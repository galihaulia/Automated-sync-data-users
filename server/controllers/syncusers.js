const asyncHandler = require('../middleware/asyncHandler');
const { 
    getInstanceGetSSO
} = require('../lib/helper');

const {
    DB_TABLES: {
        DB_USERS,
        DB_PROFILES,
        DB_JOBLEVELUSERS,
        DB_DEPARTMENTS,
        DB_JOBTITLES,
        DB_JOBLEVELS
    },
} = require('../lib/const');

const sequelize = require('sequelize');
const { Op } = sequelize;

const apiSSO = getInstanceGetSSO();

exports.getDataUser = asyncHandler(async (req, res, next) => {
    const now = new Date()

    let datas = []
    let dataUsers = []
    let dataUpdate = []
    let dataUpdated = []
    let dataNew = []
    let listDeptNon = []
    let listJobNon = []

    await apiSSO.get()
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
        res.status(404).jsend.error({
            message: "Failed to get data from third party.",
        });
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
                 dataUser.job != data.job))
            return filUserUp
        })
        dataUpdate = fUserUpdate

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

                        const department = await DB_DEPARTMENTS.create({
                            name: deptNon.department,
                            departmentCode: deptNon.departmentCode,
                            companiesId: 1,
                            isActive: true,
                            createdAt: now,
                            updatedAt: now
                        })
                        departmentsId = department.id
                        
                        const findJob = await DB_JOBTITLES.findOne({
                            where: {
                                name: {
                                    [Op.substring]: userUp.job
                                }
                            }
                        })

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
                                    departmentsId: department.id,
                                    jobTitlesId: createJobTitle.id,
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
                            dataUpdated.push(jobleveluser)
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
        dataUpdate: dataUpdate,
        dataUpdated: dataUpdated,
        dataNew: dataNew.length,
        listDeptNon: listDeptNon.length,
        listJobNon: listJobNon.length
    }
    
    res.jsend.success(data)
});