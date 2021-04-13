

const util1 = require('../utils/apiBuildHandler')
const moment = require('moment')
const tag = "ReportsController"
const schema = {
    reportSchema : {
        title: "Mentor and Mentee Report",
        type: "object",
        properties: {
            mentor: {
                type: "object",
                properties: {
                    total: {
                        type: "integer"
                    },
                    courseOutline: {
                        type: "object",
                        properties: {
                            total: {
                                type: "integer"
                            },
                            draft: {
                                type: "integer"
                            },
                            reject: {
                                type: "integer"
                            },
                            unpublished: {
                                type: "integer"
                            },
                            published: {
                                type: "integer"
                            },
                            waitToUnpublished: {
                                type: "integer"
                            },
                            waitToPublished: {
                                type: "integer"
                            },
                            rating: {
                                type: "number",
                                format: "float"
                            }
                        }
                    }
                }
            },
            mentee: {
                type: "object",
                properties: {
                    total: {
                        type: "integer"
                    },
                    sumOfCompetency: {
                        type: "integer"
                    },
                    sumOfDiscussion: {
                        type: "integer"
                    },
                    enrollOutline: {
                        type: "object",
                        properties: {
                            enrolled: {
                                type: "integer"
                            },
                            finished: {
                                type: "integer"
                            },
                            progress: {
                                type: "integer"
                            }
                        }
                    }
                }
            }
        }
    },
    reportMentorsSchema : {
        title: "Report Mentor",
        type: "object",
        properties: {
            sumOfMentor: {
                type: "integer"
            },
            mentors: {
                type: "array",
                items: {
                    properties: {
                        id: {
                            type: "integer"
                        },
                        idNumber: {
                            type: "string"
                        },
                        fullName: {
                            type: "string"
                        },
                        department: {
                            type: "string"
                        },
                        jobTitle: {
                            type: "string"
                        },
                        level: {
                            type: "string"
                        },
                        photo: {
                            type: "string"
                        },
                        cover: {
                            type: "string"
                        },
                        courseOutline: {
                            type: "object",
                            properties: {
                                total: {
                                    type: "integer"
                                },
                                draft: {
                                    type: "integer"
                                },
                                reject: {
                                    type: "integer"
                                },
                                unpublished: {
                                    type: "integer"
                                },
                                published: {
                                    type: "integer"
                                },
                                waitToUnpublished: {
                                    type: "integer"
                                },
                                waitToPublished: {
                                    type: "integer"
                                },
                                rating: {
                                    type: "number",
                                    format: "float"
                                },
                                mandatory: {
                                    type: "integer"
                                },
                                nonMandatory: {
                                    type: "integer"
                                }
                            }
                        }
                    }
                }
            }
        }
    },
    reportCoursesSchema : {
        title: "Report Course",
        type: "object",
        properties: {
            sumOfCourse: {
                type: "integer"
            },
            courses: {
                type: "array",
                items: {
                    properties: {
                        id: {
                            type: "integer"
                        },
                        name: {
                            type: "string"
                        },
                        description: {
                            type: "string"
                        },
                        sumOfChapter: {
                            type: "integer"
                        },
                        author: {
                            type: "string"
                        },
                        idNumber: {
                            type: "string"
                        },
                        fullName: {
                            type: "string"
                        },
                        department: {
                            type: "string"
                        },
                        jobTitle: {
                            type: "string"
                        },
                        level: {
                            type: "string"
                        },
                        category: {
                            type: "object",
                            properties: {
                                name: {
                                    type: "string"
                                },
                                group: {
                                    type: "string"
                                }
                            }
                        },
                        status: {
                            type: "object",
                            properties: {
                                statusCode: {
                                    type: "string"
                                },
                                description: {
                                    type: "string"
                                }
                            }
                        },
                        enrollOutline: {
                            type: "object",
                            properties: {
                                total: {
                                    type: "integer"
                                },
                                finished: {
                                    type: "integer"
                                },
                                avgTime: {
                                    type: "integer"
                                },
                                rating: {
                                    type: "integer"
                                }
                            }
                        },
                        sumOfDiscussion: {
                            type: "integer"
                        }
                    }
                }
            }
        }
    },
    reportMenteesSchema : {
        title: "Report Mentee",
        type: "object",
        properties: {
            sumOfMentee: {
                type: "integer"
            },
            mentees: {
                type: "array",
                items: {
                    properties: {
                        id: {
                            type: "integer"
                        },
                        idNumber: {
                            type: "string"
                        },
                        fullName: {
                            type: "string"
                        },
                        department: {
                            type: "string"
                        },
                        jobTitle: {
                            type: "string"
                        },
                        level: {
                            type: "string"
                        },
                        photo: {
                            type: "string"
                        },
                        cover: {
                            type: "string"
                        },
                        enrollOutline: {
                            type: "object",
                            properties: {
                                enrolled: {
                                    type: "integer"
                                },
                                finished: {
                                    type: "integer"
                                },
                                progress: {
                                    type: "integer"
                                }
                            }
                        }
                    }
                }
            }
        }
    },
    reportCompetenciesSchema : {
        title: "Report Competency",
        type: "object",
        properties: {
            sumOfCompetency: {
                type: "integer"
            },
            competencies: {
                type: "array",
                items: {
                    properties: {
                        id: {
                            type: "integer"
                        },
                        title: {
                            type: "string"
                        },
                        competencyOutline: {
                            type: "object",
                            properties: {
                                syllabus: {
                                    type: "integer"
                                },
                                course: {
                                    type: "integer"
                                },
                                department: {
                                    type: "integer"
                                },
                                mentee: {
                                    type: "integer"
                                },
                                progress: {
                                    type: "integer"
                                }
                            }
                        }
                    }
                }
            }
        }
    },
    reportCompetencySchema : {
        title: "Detail Competency Report",
        type: "object",
        properties: {
            syllabuses: {
                type: "array",
                items: {
                    properties: {
                        id: {
                            type: "integer"
                        },
                        title: {
                            type: "string"
                        },
                        courses: {
                            type: "array",
                            items: {
                                properties: {
                                    id: {
                                        type: "integer"
                                    },
                                    name: {
                                        type: "string"
                                    },
                                    isMandatory: {
                                        type: "boolean"
                                    },
                                    category: {
                                        type: "string"
                                    },
                                    level: {
                                        type: "string"
                                    },
                                    author: {
                                        type: "string"
                                    },
                                    progress: {
                                        type: "integer"
                                    },
                                    score: {
                                        type: "number",
                                        format: "float"
                                    },
                                    grade: {
                                        type: "string"
                                    },
                                    assignedAt: {
                                        type: "string",
                                        format: "date-time"
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    },
    reportMentorSchema : {
        title: "Report Detail Mentor Assessment",
        type: "object",
        properties: {
            id: {
                type: "integer"
            },
            idNumber: {
                type: "string"
            },
            fullName: {
                type: "string"
            },
            company: {
                type: "string"
            },
            department: {
                type: "string"
            },
            jobTitle: {
                type: "string"
            },
            level: {
                type: "string"
            },
            phoneNumber: {
                type: "string"
            },
            photo: {
                type: "string"
            },
            cover: {
                type: "string"
            },
            gender: {
                type: "string"
            },
            born: {
                type: "string"
            },
            courseOutline: {
                type: "object",
                properties: {
                    total: {
                        type: "integer"
                    },
                    draft: {
                        type: "integer"
                    },
                    reject: {
                        type: "integer"
                    },
                    unpublished: {
                        type: "integer"
                    },
                    published: {
                        type: "integer"
                    },
                    waitToUnpublished: {
                        type: "integer"
                    },
                    waitToPublished: {
                        type: "integer"
                    },
                    rating: {
                        type: "integer"
                    },
                    enrolled: {
                        type: "integer"
                    },
                    mandatory: {
                        type: "integer"
                    },
                    nonMandatory: {
                        type: "integer"
                    },
                    updatedAt: {
                        type: "string",
                        format: "date-time"
                    }
                }
            },
            ranking: {
                type: "integer"
            },
            sumOfCourse: {
                type: "integer"
            },
            courses: {
                type: "array",
                items: {
                    properties: {
                        id: {
                            type: "integer"
                        },
                        name: {
                            type: "string"
                        },
                        status: {
                            type: "object",
                            properties: {
                                statusCode: {
                                    type: "string"
                                },
                                description: {
                                    type: "string"
                                }
                            }
                        },
                        sumOfChapter: {
                            type: "integer"
                        },
                        category: {
                            type: "string"
                        },
                        level: {
                            type: "string"
                        },
                        isMandatory: {
                            type: "boolean"
                        },
                        createdBy: {
                            type: "integer"
                        },
                        enroll: {
                            type: "object",
                            properties: {
                                total: {
                                    type: "integer"
                                },
                                rating: {
                                    type: "number",
                                    format: "float"
                                },
                                avgTime: {
                                    type: "number",
                                    format: "float"
                                }
                            }
                        }
                    }
                }
            }
        }
    },
    reportMenteeSchema : {
        title: "Report Detail Mentee Assessment",
        type: "object",
        properties: {
            id: {
                type: "integer"
            },
            idNumber: {
                type: "string"
            },
            fullName: {
                type: "string"
            },
            company: {
                type: "string"
            },
            department: {
                type: "string"
            },
            jobTitle: {
                type: "string"
            },
            level: {
                type: "string"
            },
            phoneNumber: {
                type: "string"
            },
            photo: {
                type: "string"
            },
            cover: {
                type: "string"
            },
            gender: {
                type: "string"
            },
            born: {
                type: "string"
            },
            sumOfDiscussion: {
                type: "integer"
            },
            enrollOutline: {
                type: "object",
                properties: {
                    enrolled: {
                        type: "integer"
                    },
                    finished: {
                        type: "integer"
                    },
                    progress: {
                        type: "integer"
                    },
                    updatedAt: {
                        type: "string",
                        format: "date-time"
                    }
                }
            },
            ranking: {
                type: "integer"
            },
            sumOfcourse: {
                type: "integer"
            },
            courses: {
                type: "array",
                items: {
                    properties: {
                        id: {
                            type: "integer"
                        },
                        name: {
                            type: "string"
                        },
                        category: {
                            type: "string"
                        },
                        level: {
                            type: "string"
                        },
                        isMandatory: {
                            type: "boolean"
                        },
                        progress: {
                            type: "integer"
                        },
                        score: {
                            type: "integer"
                        },
                        grade: {
                            type: "string"
                        },
                        assignedAt: {
                            type: "string",
                            format: "date-time"
                        }
                    }
                }
            },
            sumOfCompetency: {
                type: "integer"
            },
            competencies: {
                type: "array",
                items: {
                    properties: {
                        id: {
                            type: "integer"
                        },
                        title: {
                            type: "string"
                        },
                        competencyOutline: {
                            type: "object",
                            properties:{
                                syllabus: {
                                    type: "integer"
                                },
                                course: {
                                    type: "integer"
                                },
                                progress: {
                                    type: "integer"
                                }
                            }
                        }
                    }
                }
            }
        }
    },
    courseStatisticsSchema : {
        title: "Course Statistics",
        type: "object",
        properties: {
            rangeOfDate: {
                type: "string"
            },
            courses: {
                type: "array",
                items: {
                    properties: {
                        date: {
                            type: "string",
                            format: "date-time"
                        },
                        week: {
                            type: "string"
                        },
                        month: {
                            type: "string"
                        },
                        draft: {
                            type: "integer"
                        },
                        reject: {
                            type: "integer"
                        },
                        unpublished: {
                            type: "integer"
                        },
                        published: {
                            type: "integer"
                        },
                        waitToUnpublished: {
                            type: "integer"
                        },
                        waitToPublished: {
                            type: "integer"
                        }
                    }
                }
            }
        }
    },
    enrollStatisticsSchema : {
        title: "Enroll Statistics",
        type: "object",
        properties: {
            rangeOfDate: {
                type: "string"
            },
            enrolls: {
                type: "array",
                items: {
                    properties: {
                        date: {
                            type: "string",
                            format: "date-time"
                        },
                        week: {
                            type: "string"
                        },
                        month: {
                            type: "string"
                        },
                        enrolled: {
                            type: "integer"
                        }
                    }
                }
            }
        }
    },
    reportScheduleDetailSchema : {
        title: "Schedule Detail",
        type: "object",
        properties: {
            participanLists: {
                type: "array",
                items: {
                    type: "object",
                    properties: {
                        id: {
                            type: "number"
                        },
                        name: {
                            type: "string"
                        },
                        idNumber: {
                            type: "string"
                        },
                        department: {
                            type: "string"
                        },
                        courseList: {
                            type: "array",
                            items: {
                                type: "object",
                                properties: {
                                    id: {
                                        type: "number"
                                    },
                                    name: {
                                        type: "string"
                                    },
                                    assignmentList: {
                                        type: "array",
                                        items: {
                                            type: "object",
                                            properties: {
                                                id: {
                                                    type: "number"
                                                },
                                                name: {
                                                    type: "string"
                                                },
                                                score: {
                                                    type: "number"
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        },
                        presentasi: {
                            type: "number"
                        },
                        avg: {
                            type: "number"
                        }
                    }
                }
            },
            courseLists: {
                type: "array",
                items: {
                    type: "object",
                    properties: {
                        id: {
                            type: "number"
                        },
                        name: {
                            type: "string"
                        },
                        materialList: {
                        type: "array",
                        items: {
                            type: "object",
                            properties: {
                            id: {
                                type: "number"
                            },
                            name: {
                                type: "string"
                            }
                            }
                        }
                        }
                    }
                }
            }
        }
    },
    reportAssessmentAssignmentSchema : {
        title: "Schedule Detail",
        type: "object",
        properties: {
            enrolls: {
                type: "array",
                items: {
                    type: "object",
                    properties: {
                        coursesId: {
                            type: "number"
                        },
                        coursesName: {
                            type: "string"
                        },
                        id: {
                            type: "number"
                        },
                        name: {
                            type: "string"
                        },
                        idNumber: {
                            type: "string"
                        },
                        department: {
                            type: "string"
                        },
                        assignmentList: {
                            type: "array",
                            items: {
                                type: "object",
                                properties: {
                                    id: {
                                        type: "number"
                                    },
                                    name: {
                                        type: "string"
                                    },
                                    score: {
                                        type: "number"
                                    }
                                }
                            }
                        },
                        presentasi: {
                            type: "number"
                        },
                        avg: {
                            type: "number"
                        }
                    }
                }
            },
            course: {
                type: "array",
                items: {
                    type: "object",
                    properties: {
                        id: {
                            type: "number"
                        },
                        name: {
                            type: "string"
                        },
                        assignmentList: {
                            type: "array",
                            items: {
                                type: "object",
                                properties: {
                                    id: {
                                        type: "number"
                                    },
                                    name: {
                                        type: "string"
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    },
    reportCourseTransaction: {
        title: "List Course Transaction",
        type: "array",
        items: {
            type: "object",
            properties: {
            id: {
                type: "number"
            },
            name: {
                type: "string"
            },
            sumOfClient: {
                type: "number"
            },
            totalRating: {
                type: "number"
            },
            courseClient: {
                type: "array",
                items: {
                    type: "object",
                    properties: {
                        id: {
                            type: "number"
                        },
                        name: {
                            type: "string"
                        },
                        company: {
                            type: "object",
                            properties: {
                                id: {
                                    type: "number"
                                },
                                name: {
                                    type: "string"
                                },
                                idCompany: {
                                    type: "string"
                                },
                                address: {
                                    type: "string"
                                },
                                phone: {
                                    type: "string"
                                },
                                logo: {
                                    type: "string"
                                },
                                logogram: {
                                    type: "string"
                                },
                                isActive: {
                                    type: "boolean"
                                },
                                createdAt: {
                                    type: "string"
                                },
                                updatedAt: {
                                    type: "string"
                                }
                            }
                        },
                        participants: {
                            type: "string"
                        },
                        finished: {
                            type: "string"
                        },
                        rating: {
                            type: "number"
                        }
                    }
                }
            },
            ranking: {
                type: "number"
            }
            }
        }
    },
    reportCourseTransactionDetail: {
        title: "Detail Course Transaction",
        type: "array",
        items: {
            type: "object",
            properties: {
                id: {
                    type: "number"
                },
                name: {
                    type: "string"
                },
                company: {
                    type: "object",
                    properties: {
                        id: {
                            type: "number"
                        },
                        name: {
                            type: "string"
                        },
                        idCompany: {
                            type: "string"
                        },
                        address: {
                            type: "string"
                        },
                        phone: {
                            type: "string"
                        },
                        logo: {
                            type: "string"
                        },
                        logogram: {
                            type: "string"
                        },
                        isActive: {
                            type: "boolean"
                        },
                        createdAt: {
                            type: "string"
                        },
                        updatedAt: {
                            type: "string"
                        }
                    }
                },
                rating: {
                    type: "number"
                },
                participants: {
                    type: "number"
                },
                listParticipants: {
                    type: "array",
                    items: {
                        type: "object",
                        properties: {
                            id: {
                                type: "number"
                            },
                            idNumber: {
                                type: "string"
                            },
                            fullName: {
                                type: "string"
                            },
                            photo: {
                                type: "string"
                            },
                            department: {
                                type: "string"
                            },
                            jobTitle: {
                                type: "string"
                            },
                            level: {
                                type: "string"
                            },
                            grade: {
                                type: "string"
                            },
                            score: {
                                type: "number"
                            },
                            statusEnroll: {
                                type: "number"
                            }
                        }
                    }
                }
            }
        }
    }
}
const paths = {
    "/report": {
        get: {
            tags : [tag],
            responses: {
                200: {
                    description : "Mentor and Mentee Report",
                    content: {
                        "application/json": {
                            schema: util1.getSchemaResponse("reportSchema","reportSchema","object")
                        }
                    }
                }
            }
        }
    },
    "/report/mentors": {
        get: {
            tags : [tag],
            parameters: [
                {
                    name: 'department_id',
                    in: 'query',
                    schema: {
                        type: 'integer'
                    },
                    required: false
                },
                {
                    name: 'job_title_id',
                    in: 'query',
                    schema: {
                        type: 'integer'
                    },
                    required: false
                },
                {
                    name: 'filter_by',
                    in: 'query',
                    description: 'name',
                    schema: {
                        type: 'string'
                    },
                    required: false
                },
                {
                    name: 'pagination',
                    in: 'query',
                    schema: {
                        type: 'integer'
                    },
                    required: false
                },
                {
                    name: 'limit',
                    in: 'query',
                    schema: {
                        type: 'integer'
                    },
                    required: false
                },
                {
                    name: 'timestamp',
                    in: 'query',
                    schema: {
                      type: 'string',
                      example: moment().format('YYYY-MM-DD HH:mm:ss')
                    },
                    required: false
                },
                {
                    name: 'export_to',
                    in: 'query',
                    description: 'excel',
                    schema: {
                        type: 'string'
                    },
                    required: false
                }
            ],
            responses: {
                200: {
                    description : "Report Mentor",
                    content: {
                        "application/json": {
                            schema: util1.getSchemaResponse("reportMentorsSchema","reportMentorsSchema","object")
                        }
                    }
                }
            }
        }
    },
    "/report/mentor": {
        get: {
            tags : [tag],
            parameters: [
                {
                    name: 'user_id',
                    in: 'query',
                    schema: {
                        type: 'integer'
                    },
                    required: true
                },
                {
                    name: 'is_mandatory',
                    in: 'query',
                    schema: {
                        type: 'boolean'
                    },
                    required: false
                },
                {
                    name: 'status_code',
                    in: 'query',
                    schema: {
                        type: 'string'
                    },
                    required: false
                },
                {
                    name: 'filter_by',
                    in: 'query',
                    description: 'name',
                    schema: {
                        type: 'string'
                    },
                    required: false
                },
                {
                    name: 'export_to',
                    in: 'query',
                    description: 'pdf',
                    schema: {
                        type: 'string'
                    },
                    required: false
                },
                {
                    name: 'exclude',
                    in: 'query',
                    description: 'course',
                    schema: {
                        type: 'string'
                    },
                    required: false
                },
                {
                    name: 'pagination',
                    in: 'query',
                    schema: {
                      type: 'integer'
                    },
                    required: false
                },
                {
                    name: 'limit',
                    in: 'query',
                    schema: {
                      type: 'integer'
                    },
                    required: false
                },
                {
                    name: 'timestamp',
                    in: 'query',
                    schema: {
                      type: 'string',
                      example: moment().format('YYYY-MM-DD HH:mm:ss')
                    },
                    required: false
                }
            ],
            responses: {
                200: {
                    description : "Report Detail Mentor Assessment",
                    content: {
                        "application/json": {
                            schema: util1.getSchemaResponse("reportMentorSchema","reportMentorSchema","object")
                        }
                    }
                }
            }
        }
    },
    "/report/courses": {
        get: {
            tags : [tag],
            parameters: [
                {
                    name: 'std_competency_id',
                    in: 'query',
                    schema: {
                        type: 'integer'
                    },
                    required: false
                },
                {
                    name: 'category_id',
                    in: 'query',
                    schema: {
                        type: 'integer'
                    },
                    required: false
                },
                {
                    name: 'is_mandatory',
                    in: 'query',
                    schema: {
                        type: 'boolean'
                    },
                    required: false
                },
                {
                    name: 'department_id',
                    in: 'query',
                    schema: {
                        type: 'integer'
                    },
                    required: false
                },
                {
                    name: 'job_title_id',
                    in: 'query',
                    schema: {
                        type: 'integer'
                    },
                    required: false
                },
                {
                    name: 'status_code',
                    in: 'query',
                    schema: {
                        type: 'string'
                    },
                    required: false
                },
                {
                    name: 'filter_by',
                    in: 'query',
                    description: 'name',
                    schema: {
                        type: 'string'
                    },
                    required: false
                },
                {
                    name: 'export_to',
                    in: 'query',
                    description: 'excel',
                    schema: {
                        type: 'string'
                    },
                    required: false
                },
                {
                    name: 'group_id',
                    in: 'query',
                    schema: {
                        type: 'integer'
                    },
                    required: false
                },
                {
                    name: 'pagination',
                    in: 'query',
                    schema: {
                        type: 'integer'
                    },
                    required: false
                },
                {
                    name: 'limit',
                    in: 'query',
                    schema: {
                        type: 'integer'
                    },
                    required: false
                },
                {
                    name: 'timestamp',
                    in: 'query',
                    schema: {
                      type: 'string',
                      example: moment().format('YYYY-MM-DD HH:mm:ss')
                    },
                    required: false
                }
            ],
            responses: {
                200: {
                    description : "Report Course",
                    content: {
                        "application/json": {
                            schema: util1.getSchemaResponse("reportCoursesSchema","reportCoursesSchema","object")
                        }
                    }
                }
            }
        }
    },
    "/report/mentees": {
        get: {
            tags : [tag],
            parameters: [
                {
                    name: 'department_id',
                    in: 'query',
                    schema: {
                        type: 'integer'
                    },
                    required: false
                },
                {
                    name: 'job_title_id',
                    in: 'query',
                    schema: {
                        type: 'integer'
                    },
                    required: false
                },
                {
                    name: 'filter_by',
                    in: 'query',
                    description: 'name',
                    schema: {
                        type: 'string'
                    },
                    required: false
                },
                {
                    name: 'pagination',
                    in: 'query',
                    schema: {
                        type: 'integer'
                    },
                    required: false
                },
                {
                    name: 'limit',
                    in: 'query',
                    schema: {
                        type: 'integer'
                    },
                    required: false
                },
                {
                    name: 'timestamp',
                    in: 'query',
                    schema: {
                      type: 'string',
                      example: moment().format('YYYY-MM-DD HH:mm:ss')
                    },
                    required: false
                }
            ],
            responses: {
                200: {
                    description : "Report Mentee",
                    content: {
                        "application/json": {
                            schema: util1.getSchemaResponse("reportMenteesSchema","reportMenteesSchema","object")
                        }
                    }
                }
            }
        }
    },
    "/report/mentee": {
        get: {
            tags : [tag],
            parameters: [
                {
                    name: 'user_id',
                    in: 'query',
                    schema: {
                        type: 'integer'
                    },
                    required: true
                },
                {
                    name: 'is_mandatory',
                    in: 'query',
                    schema: {
                        type: 'boolean'
                    },
                    required: false
                },
                {
                    name: 'is_progress',
                    in: 'query',
                    schema: {
                        type: 'boolean'
                    },
                    required: false
                },
                {
                    name: 'filter_by',
                    in: 'query',
                    description: 'name',
                    schema: {
                        type: 'string'
                    },
                    required: false
                },
                {
                    name: 'export_to',
                    in: 'query',
                    description: 'pdf',
                    schema: {
                        type: 'string'
                    },
                    required: false
                },
                {
                    name: 'exclude',
                    in: 'query',
                    description: 'course, competency',
                    schema: {
                        type: 'string'
                    },
                    required: false
                },
                {
                    name: 'pagination',
                    in: 'query',
                    schema: {
                      type: 'integer'
                    },
                    required: false
                },
                {
                    name: 'limit',
                    in: 'query',
                    schema: {
                      type: 'integer'
                    },
                    required: false
                },
                {
                    name: 'timestamp',
                    in: 'query',
                    schema: {
                      type: 'string',
                      example: moment().format('YYYY-MM-DD HH:mm:ss')
                    },
                    required: false
                }
            ],
            responses: {
                200: {
                    description : "Report Detail Mentee Assessment",
                    content: {
                        "application/json": {
                            schema: util1.getSchemaResponse("reportMenteeSchema","reportMenteeSchema","object")
                        }
                    }
                }
            }
        }
    },
    "/report/competencies": {
        get: {
            tags : [tag],
            parameters: [
                {
                    name: 'department_id',
                    in: 'query',
                    schema: {
                        type: 'integer'
                    },
                    required: false
                },
                {
                    name: 'filter_by',
                    in: 'query',
                    description: 'title',
                    schema: {
                        type: 'string'
                    },
                    required: false
                },
                {
                    name: 'pagination',
                    in: 'query',
                    schema: {
                        type: 'integer'
                    },
                    required: false
                },
                {
                    name: 'limit',
                    in: 'query',
                    schema: {
                        type: 'integer'
                    },
                    required: false
                },
                {
                    name: 'timestamp',
                    in: 'query',
                    schema: {
                      type: 'string',
                      example: moment().format('YYYY-MM-DD HH:mm:ss')
                    },
                    required: false
                }
            ],
            responses: {
                200: {
                    description : "Report Competency",
                    content: {
                        "application/json": {
                            schema: util1.getSchemaResponse("reportCompetenciesSchema","reportCompetenciesSchema","object")
                        }
                    }
                }
            }
        }
    },
    "/report/competency": {
        get: {
            tags : [tag],
            parameters: [
                {
                    name: 'competency_id',
                    in: 'query',
                    schema: {
                        type: 'integer'
                    },
                    required: true
                }
            ],
            responses: {
                200: {
                    description : "Detail Competency Report",
                    content: {
                        "application/json": {
                            schema: util1.getSchemaResponse("reportCompetencySchema","reportCompetencySchema","object")
                        }
                    }
                }
            }
        }
    },
    "/report/course-statistics": {
        get: {
            tags : [tag],
            parameters: [
                {
                    name: 'group_by',
                    in: 'query',
                    description: 'daily, weekly, monthly',
                    schema: {
                        type: 'string'
                    },
                    required: true
                }
            ],
            responses: {
                200: {
                    description : "Course Statistics",
                    content: {
                        "application/json": {
                            schema: util1.getSchemaResponse("courseStatisticsSchema","courseStatisticsSchema","object")
                        }
                    }
                }
            }
        }
    },
    "/report/enroll-statistics": {
        get: {
            tags : [tag],
            parameters: [
                {
                    name: 'group_by',
                    in: 'query',
                    description: 'daily, weekly, monthly',
                    schema: {
                        type: 'string'
                    },
                    required: true
                }
            ],
            responses: {
                200: {
                    description : "Enroll Statistics",
                    content: {
                        "application/json": {
                            schema: util1.getSchemaResponse("enrollStatisticsSchema","enrollStatisticsSchema","object")
                        }
                    }
                }
            }
        }
    },
    "/report/productive-mentors": {
        get: {
            tags : [tag],
            parameters: [
                {
                    name: 'user_id',
                    in: 'query',
                    schema: {
                        type: 'integer'
                    },
                    required: false
                },
                {
                    name: 'export_to',
                    in: 'query',
                    description: 'excel',
                    schema: {
                        type: 'string'
                    },
                    required: false
                },
                {
                    name: 'filter_by',
                    in: 'query',
                    description: 'name',
                    schema: {
                        type: 'string'
                    },
                    required: false
                },
                {
                    name: 'pagination',
                    in: 'query',
                    schema: {
                        type: 'integer'
                    },
                    required: false
                },
                {
                    name: 'limit',
                    in: 'query',
                    schema: {
                        type: 'integer'
                    },
                    required: false
                },
                {
                    name: 'timestamp',
                    in: 'query',
                    schema: {
                      type: 'string',
                      example: moment().format('YYYY-MM-DD HH:mm:ss')
                    },
                    required: false
                }
            ],
            responses: {
                200: {
                    description : "Most Productive Mentors",
                    content: {
                        "application/json": {
                            schema: util1.getSchemaResponse("reportMentorsSchema","reportMentorsSchema","object")
                        }
                    }
                }
            }
        }
    },
    "/report/valueable-mentors": {
        get: {
            tags : [tag],
            parameters: [
                {
                    name: 'user_id',
                    in: 'query',
                    schema: {
                        type: 'integer'
                    },
                    required: false
                },
                {
                    name: 'export_to',
                    in: 'query',
                    description: 'excel',
                    schema: {
                        type: 'string'
                    },
                    required: false
                },
                {
                    name: 'filter_by',
                    in: 'query',
                    description: 'name',
                    schema: {
                        type: 'string'
                    },
                    required: false
                },
                {
                    name: 'pagination',
                    in: 'query',
                    schema: {
                        type: 'integer'
                    },
                    required: false
                },
                {
                    name: 'limit',
                    in: 'query',
                    schema: {
                        type: 'integer'
                    },
                    required: false
                },
                {
                    name: 'timestamp',
                    in: 'query',
                    schema: {
                      type: 'string',
                      example: moment().format('YYYY-MM-DD HH:mm:ss')
                    },
                    required: false
                }
            ],
            responses: {
                200: {
                    description : "Most Valuable Mentors",
                    content: {
                        "application/json": {
                            schema: util1.getSchemaResponse("reportMentorsSchema","reportMentorsSchema","object")
                        }
                    }
                }
            }
        }
    },
    "/report/creative-mentors": {
        get: {
            tags : [tag],
            parameters: [
                {
                    name: 'export_to',
                    in: 'query',
                    description: 'excel',
                    schema: {
                        type: 'string'
                    },
                    required: false
                },
                {
                    name: 'filter_by',
                    in: 'query',
                    description: 'name',
                    schema: {
                        type: 'string'
                    },
                    required: false
                },
                {
                    name: 'pagination',
                    in: 'query',
                    schema: {
                        type: 'integer'
                    },
                    required: false
                },
                {
                    name: 'limit',
                    in: 'query',
                    schema: {
                        type: 'integer'
                    },
                    required: false
                },
                {
                    name: 'timestamp',
                    in: 'query',
                    schema: {
                      type: 'string',
                      example: moment().format('YYYY-MM-DD HH:mm:ss')
                    },
                    required: false
                }
            ],
            responses: {
                200: {
                    description : "Most Creative Mentors",
                    content: {
                        "application/json": {
                            schema: util1.getSchemaResponse("reportMentorsSchema","reportMentorsSchema","object")
                        }
                    }
                }
            }
        }
    },
    "/report/valueable-courses": {
        get: {
            tags : [tag],
            parameters: [
                {
                    name: 'export_to',
                    in: 'query',
                    description: 'excel',
                    schema: {
                        type: 'string'
                    },
                    required: false
                },
                {
                    name: 'filter_by',
                    in: 'query',
                    description: 'name',
                    schema: {
                        type: 'string'
                    },
                    required: false
                },
                {
                    name: 'pagination',
                    in: 'query',
                    schema: {
                        type: 'integer'
                    },
                    required: false
                },
                {
                    name: 'limit',
                    in: 'query',
                    schema: {
                        type: 'integer'
                    },
                    required: false
                },
                {
                    name: 'timestamp',
                    in: 'query',
                    schema: {
                      type: 'string',
                      example: moment().format('YYYY-MM-DD HH:mm:ss')
                    },
                    required: false
                }
            ],
            responses: {
                200: {
                    description : "Most Valuable Courses",
                    content: {
                        "application/json": {
                            schema: util1.getSchemaResponse("reportCoursesSchema","reportCoursesSchema","object")
                        }
                    }
                }
            }
        }
    },
    "/report/popular-courses": {
        get: {
            tags : [tag],
            parameters: [
                {
                    name: 'export_to',
                    in: 'query',
                    description: 'excel',
                    schema: {
                        type: 'string'
                    },
                    required: false
                },
                {
                    name: 'filter_by',
                    in: 'query',
                    description: 'name',
                    schema: {
                        type: 'string'
                    },
                    required: false
                },
                {
                    name: 'pagination',
                    in: 'query',
                    schema: {
                        type: 'integer'
                    },
                    required: false
                },
                {
                    name: 'limit',
                    in: 'query',
                    schema: {
                        type: 'integer'
                    },
                    required: false
                },
                {
                    name: 'timestamp',
                    in: 'query',
                    schema: {
                      type: 'string',
                      example: moment().format('YYYY-MM-DD HH:mm:ss')
                    },
                    required: false
                }
            ],
            responses: {
                200: {
                    description : "Most Popular Courses",
                    content: {
                        "application/json": {
                            schema: util1.getSchemaResponse("reportCoursesSchema","reportCoursesSchema","object")
                        }
                    }
                }
            }
        }
    },
    "/report/discussed-courses": {
        get: {
            tags : [tag],
            parameters: [
                {
                    name: 'export_to',
                    in: 'query',
                    description: 'excel',
                    schema: {
                        type: 'string'
                    },
                    required: false
                },
                {
                    name: 'filter_by',
                    in: 'query',
                    description: 'name',
                    schema: {
                        type: 'string'
                    },
                    required: false
                },
                {
                    name: 'pagination',
                    in: 'query',
                    schema: {
                        type: 'integer'
                    },
                    required: false
                },
                {
                    name: 'limit',
                    in: 'query',
                    schema: {
                        type: 'integer'
                    },
                    required: false
                },
                {
                    name: 'timestamp',
                    in: 'query',
                    schema: {
                      type: 'string',
                      example: moment().format('YYYY-MM-DD HH:mm:ss')
                    },
                    required: false
                }
            ],
            responses: {
                200: {
                    description : "Most Discussion Courses",
                    content: {
                        "application/json": {
                            schema: util1.getSchemaResponse("reportCoursesSchema","reportCoursesSchema","object")
                        }
                    }
                }
            }
        }
    },
    "/report/productive-mentees": {
        get: {
            tags : [tag],
            parameters: [
                {
                    name: 'user_id',
                    in: 'query',
                    schema: {
                        type: 'integer'
                    },
                    required: false
                },
                {
                    name: 'export_to',
                    in: 'query',
                    description: 'excel',
                    schema: {
                        type: 'string'
                    },
                    required: false
                },
                {
                    name: 'filter_by',
                    in: 'query',
                    description: 'name',
                    schema: {
                        type: 'string'
                    },
                    required: false
                },
                {
                    name: 'pagination',
                    in: 'query',
                    schema: {
                        type: 'integer'
                    },
                    required: false
                },
                {
                    name: 'limit',
                    in: 'query',
                    schema: {
                        type: 'integer'
                    },
                    required: false
                },
                {
                    name: 'timestamp',
                    in: 'query',
                    schema: {
                      type: 'string',
                      example: moment().format('YYYY-MM-DD HH:mm:ss')
                    },
                    required: false
                }
            ],
            responses: {
                200: {
                    description : "Most Productive Mentees",
                    content: {
                        "application/json": {
                            schema: util1.getSchemaResponse("reportMenteesSchema","reportMenteesSchema","object")
                        }
                    }
                }
            }
        }
    },
    "/report/schedule-detail": {
        get: {
            tags : [tag],
            parameters: [
                {
                    name: 'schedule_id',
                    in: 'query',
                    schema: {
                        type: 'integer'
                    },
                    required: true
                },
                {
                    name: 'export_to',
                    in: 'query',
                    description: 'excel',
                    schema: {
                        type: 'string'
                    },
                    required: false
                }
            ],
            responses: {
                200: {
                    description : "Detail Schedule Report",
                    content: {
                        "application/json": {
                            schema: util1.getSchemaResponse("reportScheduleDetailSchema","reportScheduleDetailSchema","object")
                        }
                    }
                }
            }
        }
    },
    "/report/assessment-assignment": {
        get: {
            tags : [tag],
            parameters: [
                {
                    name: 'course_id',
                    in: 'query',
                    schema: {
                        type: 'integer'
                    },
                    required: true
                },
                {
                    name: 'export_to',
                    in: 'query',
                    description: 'excel',
                    schema: {
                        type: 'string'
                    },
                    required: false
                }
            ],
            responses: {
                200: {
                    description : "Detail Assessment Assignment Report",
                    content: {
                        "application/json": {
                            schema: util1.getSchemaResponse("reportScheduleDetailSchema","reportScheduleDetailSchema","object")
                        }
                    }
                }
            }
        }
    },
    "/report/course-on-sale": {
        get: {
            tags : [tag],
            parameters: [
                {
                    name: 'course_id',
                    in: 'query',
                    schema: {
                        type: 'integer'
                    },
                    required: false
                },
                {
                    name: 'export_to',
                    in: 'query',
                    description: 'excel',
                    schema: {
                        type: 'string'
                    },
                    required: false
                },
                {
                    name: 'filter_by',
                    in: 'query',
                    description: 'name',
                    schema: {
                        type: 'string'
                    },
                    required: false
                },
                {
                    name: 'pagination',
                    in: 'query',
                    schema: {
                        type: 'integer'
                    },
                    required: false
                },
                {
                    name: 'limit',
                    in: 'query',
                    schema: {
                        type: 'integer'
                    },
                    required: false
                },
                {
                    name: 'timestamp',
                    in: 'query',
                    schema: {
                      type: 'string',
                      example: moment().format('YYYY-MM-DD HH:mm:ss')
                    },
                    required: false
                }
            ],
            responses: {
                200: {
                    description : "Most Productive Mentors",
                    content: {
                        "application/json": {
                            schema: util1.getSchemaResponse("reportCourseTransaction","reportCourseTransaction","object")
                        }
                    }
                }
            }
        }
    },
    "/report/course-purchased": {
        get: {
            tags : [tag],
            parameters: [
                {
                    name: 'export_to',
                    in: 'query',
                    description: 'excel',
                    schema: {
                        type: 'string'
                    },
                    required: false
                },
                {
                    name: 'filter_by',
                    in: 'query',
                    description: 'name',
                    schema: {
                        type: 'string'
                    },
                    required: false
                },
                {
                    name: 'pagination',
                    in: 'query',
                    schema: {
                        type: 'integer'
                    },
                    required: false
                },
                {
                    name: 'limit',
                    in: 'query',
                    schema: {
                        type: 'integer'
                    },
                    required: false
                },
                {
                    name: 'timestamp',
                    in: 'query',
                    schema: {
                      type: 'string',
                      example: moment().format('YYYY-MM-DD HH:mm:ss')
                    },
                    required: false
                }
            ],
            responses: {
                200: {
                    description : "Most Productive Mentors",
                    content: {
                        "application/json": {
                            schema: util1.getSchemaResponse("reportCourseTransaction","reportCourseTransaction","object")
                        }
                    }
                }
            }
        }
    },
    "/report/detail-course-transaction": {
        get: {
            tags : [tag],
            parameters: [
                {
                    name: 'course_id',
                    in: 'query',
                    schema: {
                        type: 'integer'
                    },
                    required: true
                },
                {
                    name: 'export_to',
                    in: 'query',
                    description: 'excel',
                    schema: {
                        type: 'string'
                    },
                    required: false
                },
                {
                    name: 'filter_by',
                    in: 'query',
                    description: 'name',
                    schema: {
                        type: 'string'
                    },
                    required: false
                }
            ],
            responses: {
                200: {
                    description : "Most Productive Mentors",
                    content: {
                        "application/json": {
                            schema: util1.getSchemaResponse("reportCourseTransactionDetail","reportCourseTransactionDetail","object")
                        }
                    }
                }
            }
        }
    },
    "/report/detail-course-transaction-mentee": {
        get: {
            tags : [tag],
            parameters: [
                {
                    name: 'course_id',
                    in: 'query',
                    schema: {
                        type: 'integer'
                    },
                    required: true
                },
                {
                    name: 'users_id',
                    in: 'query',
                    schema: {
                        type: 'integer'
                    },
                    required: true
                },
                {
                    name: 'export_to',
                    in: 'query',
                    description: 'excel',
                    schema: {
                        type: 'string'
                    },
                    required: false
                },
                {
                    name: 'pagination',
                    in: 'query',
                    schema: {
                        type: 'integer'
                    },
                    required: false
                },
                {
                    name: 'limit',
                    in: 'query',
                    schema: {
                        type: 'integer'
                    },
                    required: false
                }
            ],
            responses: {
                200: {
                    description : "Most Productive Mentors",
                    content: {
                        "application/json": {
                            schema: util1.getSchemaResponse("reportCourseTransactionDetail","reportCourseTransactionDetail","object")
                        }
                    }
                }
            }
        }
    }
}
exports.default = {schema,paths}