require('dotenv').config();
const apiSSOLogin = process.env.API_SSO_LOGIN;
const apiSSOGet = process.env.API_SSO_GET;
const grant_type_sso = process.env.GRANT_TYPE_SSO;
const username_sso = process.env.USERNAME_SSO;
const password_sso = process.env.PASSWORD_SSO;
const axios = require('axios');
const querystring = require('querystring');
const cron = require('node-cron');

const {
    DB_TABLES: {
        DB_USERS,
        DB_PROFILES,
        DB_JOBLEVELUSERS,
        DB_DEPARTMENTS,
        DB_JOBTITLES,
        DB_JOBLEVELS,
        DB_COURSEBYDEPARTMENTS,
        DB_COURSES,
        DB_CHAPTERS,
        DB_MATERIALS,
        DB_ENROLLS,
        DB_PROGRESSCHAPTERS,
        DB_PROGRESSMATERIALS
    },
} = require('./lib/const');

const sequelize = require('sequelize');
const { Op } = sequelize;

async function getData() {
    const now = new Date()
    let hrstart = process.hrtime()

    let datas = []
    let dataUsers = []
    let dataUpdate = []
    let dataUpdated = []
    let dataCek = []
    let dataNew = []
    let listDeptNon = []
    let listJobNon = []
    let listDeptNonJobAda = []
    let listDeptJobAda = []

    let payload = querystring.stringify({
        grant_type: grant_type_sso,
        username: username_sso,
        password: password_sso
    })

    let dataToken = null
    await axios.post(apiSSOLogin, payload)
    .then((response) => {
        if (response.data) {
            dataToken = response.data.access_token
        }
    })
    
    let option = {
        headers: {
            'accept': 'application/json',
            'authorization': `Bearer ${dataToken}`
        }
    }

    await axios.get(apiSSOGet, option)
    .then((response) => {
        if (response.data) {
            response.data.map((result) => {
                if(result.unitName != null){
                    let objRes = {
                        idNumber: result.nik,
                        fullName: result.nama,
                        email: result.email,
                        department: result.unitName,
                        departmentCode: result.unitId,
                        job: result.gradeName,
                        level: result.grade
                    }
                    datas.push(objRes)
                }
            })
        }
    }).catch(({ response: { data } }) => {
        console.log("Failed to get data from third party.");
    });
    
    const users = await DB_USERS.findAll({
        include:[
            {
                model: DB_PROFILES,
                as: 'profile',
                attributes: ["fullName"]
            },
            {
                model: DB_JOBLEVELUSERS,
                required: true,
                as: 'joblevelusers',
                include: [
                    {
                        model: DB_DEPARTMENTS,
                        as: 'department',
                        attributes: ['name']
                    },
                    {
                        model: DB_JOBTITLES,
                        as: 'job',
                        attributes: ['name']
                    }
                ]
            }
        ]
    })
    
    if(users){
        dataUsers = users.map(user => {
            const { joblevelusers } = user
            const { department, job, level } = joblevelusers
            return {
                idNumber: user.idNumber,
                fullName: user.profile.fullName,
                email: user.email,
                department: (department) ? department.name : null,
                job: (job) ? job.name : null,
                level: (level) ? level.name : null
            }
        })

        const fUserNew = datas.filter(data => !dataUsers.includes(data))
        dataNew = fUserNew

        const fUserUpdate = datas.filter(data => {
            const [filUserUp] = dataUsers.filter(dataUser => 
                (dataUser.idNumber == data.idNumber &&
                 dataUser.fullName == data.fullName &&
                 dataUser.department != data.department &&
                 dataUser.job != data.job) || 
                (dataUser.idNumber == data.idNumber &&
                 dataUser.fullName == data.fullName &&
                 dataUser.department == data.department &&
                 dataUser.job != data.job))
            return filUserUp
        })
        dataUpdate = fUserUpdate

        const cekData = dataUpdate.filter(dataA => {
            const [filData] = dataUpdate.filter(dataB => {
                (dataB.idNumber == dataA.idNumber &&
                    dataB.fullName == dataA.fullName)})
            return filData
        })
        dataCek = cekData

        if(fUserUpdate.length > 0){
            for(userUp of fUserUpdate){
                let departmentsId
                let jobTitlesId
                let levelsId = 8

                const findDept = await DB_DEPARTMENTS.findOne({
                    where: {
                        name:{
                            [Op.substring]: userUp.department
                        }
                    }
                })
                departmentsId = (findDept) ? findDept.id : null

                try {
                    if(!findDept){
                        let deptNon = {
                            department: userUp.department,
                            departmentCode: userUp.departmentCode
                        }
                        listDeptNon.push(deptNon)

                        const createDepartment = await DB_DEPARTMENTS.create({
                            name: deptNon.department,
                            departmentCode: deptNon.departmentCode,
                            companiesId: 1,
                            isActive: true,
                            createdAt: now,
                            updatedAt: now
                        })
                        departmentsId = createDepartment.id
                        
                        const findJob = await DB_JOBTITLES.findOne({
                            where: {
                                name: {
                                    [Op.substring]: userUp.job
                                }
                            }
                        })
                        jobTitlesId = (findJob) ? findJob.id : null

                        if(!findJob){
                            let jobNon = {
                                job: userUp.job,
                                levels: [1, 2, 3, 4, 5, 6, 7, 8]
                            }
                            listJobNon.push(jobNon)

                            const createJobTitle = await DB_JOBTITLES.create({
                                name: jobNon.job,
                                isActive: true,
                                createdAt: now,
                                updatedAt: now
                            })
                            jobTitlesId = createJobTitle.id
                            
                            const { levels } = jobNon
                            for(const level of levels){
                                await DB_JOBLEVELS.create({
                                    departmentsId: createDepartment.id,
                                    jobTitlesId: createJobTitle.id,
                                    levelsId: level
                                })
                            }
                        } else {
                            let jobAda = {
                                department: createDepartment.id,
                                job: findJob.id,
                                levels: [1, 2, 3, 4, 5, 6, 7, 8]
                            }
                            listDeptNonJobAda.push(jobAda)
                            
                            const { levels } = jobAda
                            for(const level of levels){
                                await DB_JOBLEVELS.create({
                                    departmentsId: createDepartment.id,
                                    jobTitlesId: findJob.id,
                                    levelsId: level
                                })
                            }
                        }
                    } else {
                        const findJob = await DB_JOBTITLES.findOne({
                            where: {
                                name: {
                                    [Op.substring]: userUp.job
                                }
                            }
                        })
                        jobTitlesId = (findJob) ? findJob.id : null
                        
                        if(!findJob){
                            let jobNon = {
                                job: userUp.job,
                                levels: [1, 2, 3, 4, 5, 6, 7, 8]
                            }
                            listJobNon.push(jobNon)

                            const createJobTitle = await DB_JOBTITLES.create({
                                name: jobNon.job,
                                isActive: true,
                                createdAt: now,
                                updatedAt: now
                            })
                            jobTitlesId = createJobTitle.id
                            
                            const { levels } = jobNon
                            for(const level of levels){
                                await DB_JOBLEVELS.create({
                                    departmentsId: findDept.id,
                                    jobTitlesId: createJobTitle.id,
                                    levelsId: level
                                })
                            }
                        } else {
                            let jobAda = {
                                department: findDept.id,
                                job: findJob.id,
                                levels: [1, 2, 3, 4, 5, 6, 7, 8]
                            }
                            listDeptJobAda.push(jobAda)
                        }
                    }

                    const user = await DB_USERS.findOne({
                        where:{
                            idNumber: userUp.idNumber
                        },
                        include:[
                            {
                                model: DB_PROFILES,
                                as: 'profile',
                                attributes: ["fullName"],
                                where:{
                                    fullName: {
                                        [Op.substring]: userUp.fullName
                                    }
                                },
                                required: true
                            }
                        ]
                    })

                    if(user){
                        const jobleveluser = await DB_JOBLEVELUSERS.findOne({
                            where:{
                                usersId: user.id
                            }
                        })

                        if(jobleveluser){
                            jobleveluser.departmentsId = departmentsId
                            jobleveluser.jobTitlesId = jobTitlesId
                            jobleveluser.levelsId = levelsId
                            await jobleveluser.save()
                            let objJobLevelUser = {
                                departmentsId: (departmentsId) ? departmentsId : jobleveluser.departmentsId,
                                jobTitlesId: (jobTitlesId) ? jobTitlesId : jobleveluser.jobTitlesId,
                                levelsId: (levelsId) ? levelsId : jobleveluser.levelsId,
                                usersId: (jobleveluser) ? jobleveluser.usersId : null
                            }
                            dataUpdated.push(objJobLevelUser)
                        }
                    }

                } catch (error) {}
            }
        } else {
            console.log("tidak ada yg berubah");
        }

        if(fUserNew.length > 0){

        } else {
            console.log("tidak ada user baru");
        }
    }

    let data = {
        datas: datas.length,
        dataUsers: dataUsers.length,
        dataUpdate: {
            sumOfDataUpdate: dataUpdate.length,
            data: dataUpdate     
        },
        dataCek:{
            sumOfDataCek: dataCek.length,
            data: dataCek
        },
        dataUpdated: {
            sumOfDataUpdated: dataUpdated.length,
            data: dataUpdated
        },
        listDeptNon: {
            sumOfDataDeptNon: listDeptNon.length,
            data: listDeptNon
        },
        listJobNon: {
            sumOfDataJobNon: listJobNon.length,
            data: listJobNon 
        },
        listDeptNonJobAda: {
            sumOfDataJobAda: listDeptNonJobAda.length,
            data: listDeptNonJobAda 
        },
        listDeptJobAda: {
            sumOfDataDeptJobAda: listDeptJobAda.length,
            data: listDeptJobAda
        }
    }
    
    let end = new Date() - now,
    hrend = process.hrtime(hrstart)

    console.info('Execution time: %dms', end)
    console.info('Execution time (hr): %ds %dms', hrend[0], hrend[1] / 1000000)
    
    return data
}

async function syncCourse() {
    const dataGet = await getData()
    const now = new Date()
    const { dataUpdated } = dataGet
    const { data } = dataUpdated
    let courseArea = []
    let courseAreaNon = []
    let findCoursesArea = []
    let findCourseInCourseArea = []
    let enrollUpdated = []
    for (const dataUp of data){
        const courseAreas = await DB_COURSEBYDEPARTMENTS.findAll({
            where: {
                departmentsId: dataUp.departmentsId,
                jobTitlesId: dataUp.jobTitlesId,
                levelsId: dataUp.levelsId
            },
            attributes: ['coursesId']
        })
        let objArea = {
            departmentsId: courseAreas.departmentsId,
            jobTitlesId: courseAreas.jobTitlesId,
            levelsId: courseAreas.levelsId
        }
        findCoursesArea.push(objArea)
    
        if (courseAreas.length > 0) {
            courseArea.push(dataUp)
            courses = await DB_COURSES.findAll({
                where: {
                    id: courseAreas.map(area => area.coursesId),
                    statusesId: {
                        [Op.ne]: 3
                    }
                },
                attributes: ['id'],
                include: [
                    {
                        model: DB_CHAPTERS,
                        attributes: ['id'],
                        include: [
                            {
                                model: DB_MATERIALS,
                                as: 'materials',
                                attributes: ['id']
                            }
                        ]
                    }
                ]
            })
            findCourseInCourseArea.push(courses)
    
            const enrolls = await DB_ENROLLS.findAll({
                where: {
                    coursesId: courseAreas.map(area => area.coursesId),
                    usersId: dataUp.usersId
                },
                attributes: ['coursesId']
            })
    
            for (const course of courses) {
                const [enroll] = await enrolls.filter(enroll => enroll.coursesId == course.id)
        
                if (!enroll) {
                    const createEnroll = await DB_ENROLLS.create({
                        usersId: dataUp.usersId,
                        coursesId: course.id,
                        statusesId: 12,
                        createdAt: now,
                        updatedAt: now
                    })

                    let objEnroll = {
                        usersId: createEnroll.usersId,
                        coursesId: createEnroll.coursesId
                    }
                    enrollUpdated.push(objEnroll)
        
                    await course.Chapters.map(async (chapter) => {
                        const progressChapter = await DB_PROGRESSCHAPTERS.create({
                            enrollsId: createEnroll.id,
                            chaptersId: chapter.id,
                            createdAt: now,
                            updatedAt: now
                        })
                        await chapter.materials.map(async (material) => {
                            await DB_PROGRESSMATERIALS.create({
                                progressChaptersId: progressChapter.id,
                                materialsId: material.id,
                                createdAt: now,
                                updatedAt: now
                            })
                            return true
                        })
                        return true
                    })
                }

                let objCourseAreaUpdated = {

                }
            }
        } else {
            courseAreaNon.push(dataUp)
        }
    }
    let datas = {
        dataGet: dataGet,
        courseArea: {
            sumOfCourseArea: courseArea.length,
            data: courseArea
        },
        findCoursesArea: {
            sumOfFindCoursesArea: findCoursesArea.length,
            data: findCoursesArea
        },
        courseAreaNon: {
            sumOfCourseAreaNon: courseAreaNon.length,
            data: courseAreaNon
        },
        findCourseInCourseArea: {
            sumOfFindCourseInCourseArea: findCourseInCourseArea.length,
            data: findCourseInCourseArea
        },
        enrollUpdated: {
            sumOfEnrollUpdated: enrollUpdated.length,
            data: enrollUpdated
        }
    }
    return datas
}

async function run() {
    // let f = await getData()
    let g = await syncCourse()
    // console.log(f);
    console.log(g);
}

run()

let crons = cron.schedule('0 0 * * fri', async() => {
    run()
    console.log("Running Script");
},null,true,'Asia/Jakarta')

crons.start()