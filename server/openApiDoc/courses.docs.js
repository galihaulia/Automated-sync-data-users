const util = require('../utils/apiBuildHandler');
const moment = require('moment');
const tag = "CoursesController";

const schema = {
    indexCourseSchema: {
        title: "Index Course",
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
                        cover: {
                            type: "string"
                        },
                        isMandatory: {
                            type: "boolean"
                        },
                        sumOfChapter: {
                            type: "integer"
                        },
                        activity: {
                            properties: {
                                statusCode: {
                                    type: "string"
                                },
                                description: {
                                    type: "string"
                                }
                            }
                        },
                        progress: {
                            type: "number",
                            format: "float"
                        },
                        category: {
                            type: "object",
                            properties: {
                                id: {
                                    type: "integer"
                                },
                                name: {
                                    type: "string"
                                },
                                color: {
                                    type: "string"
                                },
                                group: {
                                    type: "object",
                                    properties: {
                                        id: {
                                            type: "integer"
                                        },
                                        name: {
                                            type: "string"
                                        }
                                    }
                                }
                            }
                        },
                        level: {
                            properties: {
                                id: {
                                    type: "integer"
                                },
                                name: {
                                    type: "string"
                                }
                            }
                        },
                        tags: {
                            type: "array",
                            items: { type: "string" }
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
                        rating: {
                            type: "object",
                            properties: {
                                mentees: {
                                    type: "integer"
                                },
                                rate: {
                                    type: "number",
                                    format: "float"
                                }
                            }
                        },
                        createdBy: {
                            type: "string"
                        },
                        createdAt: {
                            type: "string",
                            format: "date-time"
                        },
                        updatedAt: {
                            type: "string",
                            format: "date-time"
                        },
                        deletedAt: {
                            type: "string",
                            format: "date-time"
                        }
                    }
                }
            }
        }
    },
    showCourseSchema: {
        title: "Show Course",
        type: "object",
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
            cover: {
                type: "string"
            },
            isMandatory: {
                type: "boolean"
            },
            sumOfChapter: {
                type: "integer"
            },
            sumOfEnroll: {
                type: "integer"
            },
            activity: {
                properties: {
                    statusCode: {
                        type: "string"
                    },
                    description: {
                        type: "string"
                    }
                }
            },
            progress: {
                type: "number",
                format: "float"
            },
            category: {
                type: "object",
                properties: {
                    id: {
                        type: "integer"
                    },
                    name: {
                        type: "string"
                    },
                    color: {
                        type: "string"
                    },
                    group: {
                        type: "object",
                        properties: {
                            id: {
                                type: "integer"
                            },
                            name: {
                                type: "string"
                            }
                        }
                    }
                }
            },
            level: {
                properties: {
                    id: {
                        type: "integer"
                    },
                    name: {
                        type: "string"
                    }
                }
            },
            tags: {
                type: "array",
                items: { type: "string" }
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
            stdCompetency: {
                type: "object",
                properties: {
                    id: {
                        type: "integer"
                    },
                    title: {
                        type: "string"
                    },
                    file: {
                        type: "string"
                    },
                    departmentsId: {
                        type: "integer"
                    },
                    jobTitlesId: {
                        type: "integer"
                    }
                }
            },
            rating: {
                type: "object",
                properties: {
                    mentees: {
                        type: "integer"
                    },
                    rate: {
                        type: "number",
                        format: "float"
                    }
                }
            },
            createdBy: {
                type: "string"
            },
            verifier: {
                type: "string"
            },
            createdAt: {
                type: "string",
                format: "date-time"
            },
            updatedAt: {
                type: "string",
                format: "date-time"
            },
            deletedAt: {
                type: "string",
                format: "date-time"
            },
            chapters: {
                type: "array",
                items: {
                    properties: {
                        id: {
                            type: "integer"
                        },
                        title: {
                            type: "string"
                        },
                        materials: {
                            type: "array",
                            items: {
                                properties: {
                                    id: {
                                        type: "integer"
                                    },
                                    name: {
                                        type: "string"
                                    },
                                    type: {
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
    createCourseSchema: {
        title: "Create Course",
        type: "object",
        properties: {
            name: {
                type: "string"
            },
            description: {
                type: "string"
            },
            tag: {
                type: "string"
            },
            cover: {
                type: "string"
            },
            course_level_id: {
                type: "integer"
            },
            course_category_id: {
                type: "integer"
            },
            std_competency_id: {
                type: "integer"
            },
            is_mandatory: {
                type: "boolean"
            },
            verifier_id: {
                type: "integer"
            },
            maxPartcipants: {
                type: "integer"
            },
            avalabletime: {
                type: "string"
            },
            course_area: {
                type: "object",
                properties: {
                    departments: {
                        type: "array",
                        items: {
                            properties: {
                                department_id: {
                                    type: "integer"
                                },
                                job_title_id: {
                                    type: "integer"
                                },
                                level_ids: {
                                    type: "array",
                                    items: {type: "integer"}
                                }
                            }
                        }
                    },
                    employees: {
                        type: "array",
                        items: {
                            properties: {
                                department_id: {
                                    type: "integer"
                                },
                                job_title_id: {
                                    type: "integer"
                                },
                                level_id: {
                                    type: "integer"
                                },
                                user_id: {
                                    type: "integer"
                                }
                            }
                        }
                    }
                }
            }
        }
    },
    updateCourseSchema: {
        title: "Update Course",
        type: "object",
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
            tag: {
                type: "string"
            },
            cover: {
                type: "string"
            },
            course_level_id: {
                type: "integer"
            },
            course_category_id: {
                type: "integer"
            },
            std_competency_id: {
                type: "integer"
            },
            verifier_id: {
                type: "integer"
            },
            course_area: {
                type: "object",
                properties: {
                    departments: {
                        type: "array",
                        items: {
                            properties: {
                                department_id: {
                                    type: "integer"
                                },
                                job_title_id: {
                                    type: "integer"
                                },
                                level_ids: {
                                    type: "array",
                                    items: {type: "integer"}
                                }
                            }
                        }
                    },
                    employees: {
                        type: "array",
                        items: {
                            properties: {
                                department_id: {
                                    type: "integer"
                                },
                                job_title_id: {
                                    type: "integer"
                                },
                                level_id: {
                                    type: "integer"
                                },
                                user_id: {
                                    type: "integer"
                                }
                            }
                        }
                    }
                }
            }
        }
    },
    indexCourseByUserIDSchema: {
        title: "Index Course by User ID",
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
                        cover: {
                            type: "string"
                        },
                        isMandatory: {
                            type: "boolean"
                        },
                        isRead: {
                            type: "boolean"
                        },
                        sumOfChapter: {
                            type: "integer"
                        },
                        activity: {
                            properties: {
                                statusCode: {
                                    type: "string"
                                },
                                description: {
                                    type: "string"
                                }
                            }
                        },
                        progress: {
                            type: "number",
                            format: "float"
                        },
                        category: {
                            type: "object",
                            properties: {
                                id: {
                                    type: "integer"
                                },
                                name: {
                                    type: "string"
                                },
                                color: {
                                    type: "string"
                                },
                                group: {
                                    type: "object",
                                    properties: {
                                        id: {
                                            type: "integer"
                                        },
                                        name: {
                                            type: "string"
                                        }
                                    }
                                }
                            }
                        },
                        level: {
                            properties: {
                                id: {
                                    type: "integer"
                                },
                                name: {
                                    type: "string"
                                }
                            }
                        },
                        tags: {
                            type: "array",
                            items: { type: "string" }
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
                        rating: {
                            type: "object",
                            properties: {
                                mentees: {
                                    type: "integer"
                                },
                                rate: {
                                    type: "number",
                                    format: "float"
                                }
                            }
                        },
                        createdBy: {
                            type: "string"
                        },
                        createdAt: {
                            type: "string",
                            format: "date-time"
                        },
                        updatedAt: {
                            type: "string",
                            format: "date-time"
                        },
                        deletedAt: {
                            type: "string",
                            format: "date-time"
                        }
                    }
                }
            }
        }
    },
    showCourseByUserIDSchema: {
        title: "Show Course by User ID",
        type: "object",
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
            cover: {
                type: "string"
            },
            isMandatory: {
                type: "boolean"
            },
            isRead: {
                type: "boolean"
            },
            sumOfChapter: {
                type: "integer"
            },
            sumOfEnroll: {
                type: "integer"
            },
            activity: {
                properties: {
                    statusCode: {
                        type: "string"
                    },
                    description: {
                        type: "string"
                    }
                }
            },
            progress: {
                type: "number",
                format: "float"
            },
            category: {
                type: "object",
                properties: {
                    id: {
                        type: "integer"
                    },
                    name: {
                        type: "string"
                    },
                    color: {
                        type: "string"
                    },
                    group: {
                        type: "object",
                        properties: {
                            id: {
                                type: "integer"
                            },
                            name: {
                                type: "string"
                            }
                        }
                    }
                }
            },
            level: {
                properties: {
                    id: {
                        type: "integer"
                    },
                    name: {
                        type: "string"
                    }
                }
            },
            tags: {
                type: "array",
                items: { type: "string" }
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
            stdCompetency: {
                type: "object",
                properties: {
                    id: {
                        type: "integer"
                    },
                    title: {
                        type: "string"
                    },
                    file: {
                        type: "string"
                    }
                }
            },
            rating: {
                type: "object",
                properties: {
                    mentees: {
                        type: "integer"
                    },
                    rate: {
                        type: "number",
                        format: "float"
                    }
                }
            },
            createdBy: {
                type: "string"
            },
            createdAt: {
                type: "string",
                format: "date-time"
            },
            updatedAt: {
                type: "string",
                format: "date-time"
            },
            deletedAt: {
                type: "string",
                format: "date-time"
            },
            chapters: {
                type: "array",
                items: {
                    properties: {
                        id: {
                            type: "integer"
                        },
                        enrollsId: {
                            type: "integer"
                        },
                        title: {
                            type: "string"
                        },
                        isComplete: {
                            type: "boolean"
                        },
                        materials: {
                            type: "array",
                            items: {
                                properties: {
                                    id: {
                                        type: "integer"
                                    },
                                    enrollsId: {
                                        type: "integer"
                                    },
                                    chaptersId: {
                                        type: "integer"
                                    },
                                    name: {
                                        type: "string"
                                    },
                                    type: {
                                        type: "string"
                                    },
                                    description: {
                                        type: "string"
                                    },
                                    isRead: {
                                        type: "boolean"
                                    },
                                    file: {
                                        type: "string"
                                    },
                                    isEmbed: {
                                        type: "boolean"
                                    },
                                    url: {
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
    updateCourseStatusSchema: {
        title: "update Status of Course",
        type: "object",
        properties: {
            course_id: {
                type: "integer",
            },
            verifier_id: {
                type: "integer"
            },
            status_code: {
                type: "string"
            },
            comment: {
                type: "string"
            }
        }
    },
    logBooksSchema: {
        title: "Log Books",
        type: "object",
        properties: {
            logs: {
                type: "array",
                items: {
                    properties: {
                        id: {
                            type: "integer"
                        },
                        description: {
                            type: "string"
                        },
                        comment: {
                            type: "string"
                        },
                        author: {
                            type: "string"
                        },
                        status: {
                            type: "string"
                        },
                        createdAt: {
                            type: "string",
                            format: "date-time"
                        }
                    }
                }
            }
        }
    },
    courseLevelsSchema: {
        title: "Course Levels",
        type: "object",
        properties: {
            levels: {
                type: "array",
                items: {
                    properties: {
                        id: {
                            type: "integer"
                        },
                        name: {
                            type: "string"
                        },
                        createdAt: {
                            type: "string",
                            format: "date-time"
                        },
                        updatedAt: {
                            type: "string",
                            format: "date-time"
                        },
                        deletedAt: {
                            type: "string",
                            format: "date-time"
                        }
                    }
                }
            }
        }
    },
    courseAreaSchema: {
        title: "Course Area",
        type: "object",
        properties: {
            departments: {
                type: "array",
                items: {
                    properties: {
                        department: {
                            type: "string"
                        },
                        jobLevels: {
                            type: "array",
                            items: {
                                properties: {
                                    jobTitle: {
                                        type: "string"
                                    },
                                    levels: {
                                        type: "array",
                                        items: { type: "string" }
                                    }
                                }
                            }
                        }
                    }
                }
            },
            employees: {
                type: "array",
                items: {
                    properties: {
                        department: {
                            type: "string"
                        },
                        jobTitle: {
                            type: "string"
                        },
                        level: {
                            type: "string"
                        },
                        fullName: {
                            type: "string"
                        },
                        photo: {
                            type: "string"
                        }
                    }
                }
            }
        }
    },
    enrollSchema: {
        title: "Enroll Course",
        type: "object",
        properties: {
            course_id: {
                type: "integer"
            }
        }
    },
    courseSummarySchema: {
        title: "Course Summary",
        type: "object",
        properties: {
            completionTime: {
                type: "integer"
            },
            grade: {
                type: "string"
            },
            score: {
                properties: {
                    total: {
                        type: "number",
                        format: "float"
                    },
                    quiz: {
                        type: "number",
                        format: "float"
                    },
                    AR: {
                        type: "number",
                        format: "float"
                    },
                    VR: {
                        type: "number",
                        format: "float"
                    }
                }
            }
        }
    },
    createCourseForSaleSchema: {
        title: "Create Course For Sale",
        type: "object",
        properties: {
            course_id: {
                type: "integer"
            },
            min_participants: {
                type: "integer"
            },
            max_participants: {
                type: "integer"
            },
            available_time:{
                type: "string"
            },
            commissioning:{
                type: "number"
            },
            commissioning_unit:{
                type: "string"
            },
            commissioning_desc:{
                type: "string"
            },
            variants: {
                type: "array",
                items: {
                    properties: {
                        type: {
                            type: "string"
                        },
                        price: {
                            type: "number"
                        },
                    }
                }
            }
        }
    },
    createCourseBuySchema: {
        title: "Create course buy",
        type: "object",
        properties: {
            course_id: {
                type: "integer"
            },
            phone_number: {
                type: "string"
            },
            information: {
                type: "string"
            },
            start_date: {
                type: "string"
            },
            end_date: {
                type: "string"
            },
            price: {
                type: "integer"
            },
            participant: {
                type: "integer"
            },
            email: {
                type: "string"
            },
            variants: {
                type: "array",
                items: {
                    properties: {
                        type: {
                            type: "string"
                        },
                        price: {
                            type: "number"
                        },
                    }
                }
            }
        }
    },
    updateTransactionStatusSchema: {
        title: "update Status of Transaction",
        type: "object",
        properties: {
            transaction_id: {
                type: "integer",
            },
            status_code: {
                type: "string"
            },
            comment: {
                type: "string"
            },
            files: {
                type: "array",
                items: { type: "string" }
            }
        }
    },
    listTransaction:{
        type: "object",
        properties: {
            sumOfCourse: {
                type: "number"
            },
            transactions: {
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
                    description: {
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
                    course: {
                        type: "object",
                        properties: {
                            id: {
                                type: "number"
                            },
                            name: {
                                type: "string"
                            }
                        }
                    },
                    coursePurchased: {
                        type: "object",
                        properties: {
                            id: {
                                type: "number"
                            },
                            name: {
                                type: "string"
                            }
                        }
                    },
                    commissioningStart: {
                        type: "string"
                    },
                    commissioningEnd: {
                        type: "string"
                    },
                    enrolls: {
                        type: "array",
                        items: {
                            type: "undefined"
                        }
                    },
                    createdAt: {
                        type: "string"
                    },
                    updatedAt: {
                        type: "string"
                    }
                }
            }
            }
        }
    },
    transactionDetailsSchema : {
        title: "Transaction Details",
        type: "object",
        properties: {
            variants: {
                type: "array",
                items: {
                    type: "object",
                    properties: {
                        id: {
                            type: "number"
                        },
                        courseTransactionsId: {
                            type: "number"
                        },
                        type: {
                            type: "string"
                        },
                        price: {
                            type: "number"
                        },
                        createdAt: {
                            type: "string"
                        },
                        updatedAt: {
                            type: "string"
                        }
                    }
                }
            },
            information: {
                type: "string"
            },
            participant: {
                type: "number"
            },
            price: {
                type: "number"
            },
            email: {
                type: "string"
            },
            files: {
                type: "array",
                items: {
                    type: "string"
                }
            },
            createdAt: {
                type: "string"
            },
            updatedAt: {
                type: "string"
            }
        }
    },
    createCommissioningSchema: {
        title: "Start commissioning",
        type: "object",
        properties: {
            courseId: {
                type: "integer"
            }
        }
    },
    participantCourseAreaSchema: {
        title: "Participant Course Area",
        type: "object",
        properties: {
            course_area: {
                type: "object",
                properties: {
                    departments: {
                        type: "array",
                        items: {
                            properties: {
                                department_id: {
                                    type: "integer"
                                },
                                job_title_id: {
                                    type: "integer"
                                },
                                level_ids: {
                                    type: "array",
                                    items: {type: "integer"}
                                }
                            }
                        }
                    },
                    employees: {
                        type: "array",
                        items: {
                            properties: {
                                department_id: {
                                    type: "integer"
                                },
                                job_title_id: {
                                    type: "integer"
                                },
                                level_id: {
                                    type: "integer"
                                },
                                user_id: {
                                    type: "integer"
                                }
                            }
                        }
                    }
                }
            }
        }
    },
};

const paths = {
    '/courses': {
        get: {
            tags: [tag],
            parameters: [
                {
                    name: 'status_code',
                    in: 'query',
                    description: 'Draft, Rejct, Pub01, Pub02, Pub03, Pub04',
                    schema: {
                        type: 'string'
                    },
                    required: false
                },
                {
                    name: 'filter_by',
                    description: 'title, tag',
                    in: 'query',
                    schema: {
                        type: 'string'
                    },
                    required: false
                },
                {
                    name: 'sort_by',
                    description: 'name, createdBy',
                    in: 'query',
                    schema: {
                        type: 'string'
                    },
                    required: false
                },
                {
                    name: 'sort_type',
                    description: 'Asc, Desc',
                    in: 'query',
                    schema: {
                        type: 'string'
                    },
                    required: false
                },
                {
                    name: 'category_id',
                    in: 'query',
                    description: 'Multiple value separated by comma (,)',
                    schema: {
                        type: 'string'
                    },
                    required: false
                },
                {
                    name: 'company_id',
                    in: 'query',
                    description: '',
                    schema: {
                        type: 'string'
                    },
                    required: false
                },
                {
                    name: 'ownedby_id',
                    in: 'query',
                    description: '',
                    schema: {
                        type: 'string'
                    },
                    required: false
                },
                {
                    name: 'is_library',
                    in: 'query',
                    description: 'non-mandatory = true, mandatory = false',
                    schema: {
                        type: 'boolean'
                    },
                    required: false
                },
                {
                    name: 'verified',
                    in: 'query',
                    description: 'manager = true, mentor = false, not set = all course',
                    schema: {
                        type: 'boolean'
                    },
                    required: false
                },
                {
                    name: 'is_for_sale',
                    in: 'query',
                    description: 'ForSale = true, non-ForSale = false',
                    schema: {
                        type: 'boolean'
                    },
                    required: false
                },
                {
                    name: 'is_market',
                    in: 'query',
                    description: 'ForMarket = true, non-Market = false, not set = not for sale',
                    schema: {
                        type: 'boolean'
                    },
                    required: false
                },
                {
                    name: 'is_commissioning',
                    in: 'query',
                    description: 'Forcommissioning = true, non-commissioning = false',
                    schema: {
                        type: 'boolean'
                    },
                    required: false
                },
                {
                    name: 'filter_by_commissioning',
                    in: 'query',
                    description: 'filter_by for commissioning Ongoing & Overdue',
                    schema: {
                        type: 'string',
                        enum: ["Overdue", "Ongoing"]
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
                    description: "List All Courses",
                    content: {
                        "application/json": {
                            schema: util.getSchemaResponse("indexCourseSchema","indexCourseSchema", "object")
                        }
                    }
                }
            }
        }
    },
    '/course': {
        get: {
            tags: [tag],
            parameters: [
                {
                    name: 'course_id',
                    in: 'query',
                    schema: {
                        type: 'integer'
                    },
                    required: true
                }
            ],
            responses: {
                200: {
                    description: "Show Course",
                    content: {
                        "application/json": {
                            schema: util.getSchemaResponse("showCourseSchema","showCourseSchema", "object")
                        }
                    }
                }
            }
        },
        post: {
            tags: [tag],
            requestBody: {
                content: {
                    "application/json": {
                        schema: util.getSchemaRequest("createCourseSchema")
                    }
                }
            },
            responses: {
                200: {
                    description: "Create Course",
                    content: {
                        "application/json": {
                            schema: {
                                properties: {
                                    message: {
                                        type: "string"
                                    }
                                }
                            }
                        }
                    }
                }
            }
        },
        put: {
            tags: [tag],
            requestBody: {
                content: {
                    "application/json": {
                        schema: util.getSchemaRequest("updateCourseSchema")
                    }
                }
            },
            responses: {
                200: {
                    description: "Update Course",
                    content: {
                        "application/json": {
                            schema: {
                                properties: {
                                    message: {
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
    '/my-courses': {
        get: {
            tags: [tag],
            parameters: [
                {
                    name: 'status_code',
                    in: 'query',
                    description: 'Enrl1, Enrl2, Going, Compl',
                    schema: {
                        type: 'string'
                    },
                    required: false
                },
                {
                    name: 'filter_by',
                    description: 'title, tag',
                    in: 'query',
                    schema: {
                        type: 'string'
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
                    name: 'sort_by',
                    description: 'name, createdBy',
                    in: 'query',
                    schema: {
                        type: 'string'
                    },
                    required: false
                },
                {
                    name: 'sort_type',
                    description: 'Asc, Desc',
                    in: 'query',
                    schema: {
                        type: 'string'
                    },
                    required: false
                },
                {
                    name: 'category_id',
                    in: 'query',
                    description: 'Multiple value separated by comma (,)',
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
                    description: "Index Course by User ID",
                    content: {
                        "application/json": {
                            schema: util.getSchemaResponse("indexCourseByUserIDSchema","indexCourseByUserIDSchema", "object")
                        }
                    }
                }
            }
        }
    },
    '/my-course': {
        get: {
            tags: [tag],
            parameters: [
                {
                    name: 'course_id',
                    in: 'query',
                    schema: {
                        type: 'integer'
                    },
                    required: true
                }
            ],
            responses: {
                200: {
                    description: "Show Course by User ID",
                    content: {
                        "application/json": {
                            schema: util.getSchemaResponse("showCourseByUserIDSchema","showCourseByUserIDSchema", "object")
                        }
                    }
                }
            }
        }
    },
    '/course/on-status': {
        post: {
            tags: [tag],
            requestBody: {
                content: {
                    "application/json": {
                        schema: util.getSchemaRequest("updateCourseStatusSchema")
                    }
                }
            },
            responses: {
                200: {
                    description: "Update Status of Course",
                    content: {
                        "application/json": {
                            schema: {
                                properties: {
                                    message: {
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
    '/course/enroll': {
        post: {
            tags: [tag],
            requestBody: {
                content: {
                    "application/json": {
                        schema: util.getSchemaRequest("enrollSchema")
                    }
                }
            },
            responses: {
                200: {
                    description: "Enroll Course",
                    content: {
                        "application/json": {
                            schema: {
                                properties: {
                                    message: {
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
    "/course/image" : {
        post : {
            tags : [tag],
            requestBody: {
                content:{
                    "multipart/form-data":{
                        type: "object",
                        schema: {
                            properties: {
                                image: {
                                    type: "string",
                                    format: "binary"
                                }
                            },
                        },
                    }
                }
            },
            responses : {
                200 : {
                    description : "Upload course cover",
                    content: {
                        "application/json" : {
                            schema: {
                                properties: {
                                    message: {
                                        type: "string",
                                    },
                                    url: {
                                        type: "string",
                                    }
                                }
                            }
                        }
                    }
                }
            }
        },
        delete : {
            tags : [tag],
            requestBody: {
                content: {
                    "application/json":{
                        schema: {
                            properties: {
                                url: {
                                    type: "string"
                                }
                            }
                        }
                    }
                }
            },
            responses : {
                200 : {
                    description : "Delete course cover",
                    content: {
                        "application/json" : {
                            schema: {
                                properties: {
                                    message: {
                                        type: "string",
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    },
    '/course/log-books': {
        get: {
            tags: [tag],
            parameters: [
                {
                    name: 'course_id',
                    in: 'query',
                    schema: {
                        type: 'integer'
                    },
                    required: true
                }
            ],
            responses: {
                200: {
                    description: "Log Books",
                    content: {
                        "application/json": {
                            schema: util.getSchemaResponse("logBooksSchema","logBooksSchema", "object")
                        }
                    }
                }
            }
        }
    },
    '/course/levels': {
        get: {
            tags: [tag],
            responses: {
                200: {
                    description: "List All Course Levels",
                    content: {
                        "application/json": {
                            schema: util.getSchemaResponse("courseLevelsSchema","courseLevelsSchema", "object")
                        }
                    }
                }
            }
        }
    },
    "/course/rating" : {
        post : {
            tags : [tag],
            requestBody: {
                content:{
                    "application/json":{
                        type: "object",
                        schema: {
                            properties: {
                                course_id: {
                                    type: "integer",
                                },
                                rating: {
                                    type: "number",
                                    format: "float"
                                }
                            }
                        }
                    }
                }
            },
            responses : {
                200 : {
                    description : "Assigning Rate",
                    content: {
                        "application/json" : {
                            schema: {
                                properties: {
                                    message: {
                                        type: "string",
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    },
    '/course-area': {
        get: {
            tags: [tag],
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
                    name: 'is_detail',
                    in: 'query',
                    schema: {
                        type: 'boolean'
                    },
                    required: false
                }
            ],
            responses: {
                200: {
                    description: "Course Area",
                    content: {
                        "application/json": {
                            schema: util.getSchemaResponse("courseAreaSchema","courseAreaSchema", "object")
                        }
                    }
                }
            }
        }
    },
    '/course-summary': {
        get: {
            tags: [tag],
            parameters: [
                {
                    name: 'course_id',
                    in: 'query',
                    schema: {
                        type: 'integer'
                    },
                    required: true
                }
            ],
            responses: {
                200: {
                    description: "Course Summary",
                    content: {
                        "application/json": {
                            schema: util.getSchemaResponse("courseSummarySchema","courseSummarySchema", "object")
                        }
                    }
                }
            }
        }
    },
    '/course/for-sale': {
        post: {
            tags: [tag],
            requestBody: {
                content: {
                    "application/json": {
                        schema: util.getSchemaRequest("createCourseForSaleSchema")
                    }
                }
            },
            responses: {
                200: {
                    description: "Create Course For Sale",
                    content: {
                        "application/json": {
                            schema: {
                                properties: {
                                    message: {
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
    '/course/for-buy': {
        post: {
            tags: [tag],
            requestBody: {
                content: {
                    "application/json": {
                        schema: util.getSchemaRequest("createCourseBuySchema")
                    }
                }
            },
            responses: {
                200: {
                    description: "Create Course buy",
                    content: {
                        "application/json": {
                            schema: {
                                properties: {
                                    message: {
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
    '/course/transactions': {
        get: {
            tags: [tag],
            parameters: [
                {
                    name: 'status_code',
                    in: 'query',
                    description: 'COMPL, ONPRC, ONDLV, REVSE, PRJCT, PENDG',
                    schema: {
                        type: 'string'
                    },
                    required: false
                },
                {
                    name: 'filter_by',
                    description: 'title, tag',
                    in: 'query',
                    schema: {
                        type: 'string'
                    },
                    required: false
                },
                {
                    name: 'sort_by',
                    description: 'name, createdBy',
                    in: 'query',
                    schema: {
                        type: 'string'
                    },
                    required: false
                },
                {
                    name: 'sort_type',
                    description: 'Asc, Desc',
                    in: 'query',
                    schema: {
                        type: 'string'
                    },
                    required: false
                },
                {
                    name: 'is_my_order',
                    in: 'query',
                    description: 'my order = true, non my order = false',
                    schema: {
                        type: 'boolean'
                    },
                    required: false
                },
                {
                    name: 'company_id',
                    in: 'query',
                    description: '',
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
                    description: "List All Course Transactions",
                    content: {
                        "application/json": {
                            schema: util.getSchemaResponse("listTransaction","listTransaction", "object")
                        }
                    }
                }
            }
        }
    },
    '/course/transactions/on-status': {
        post: {
            tags: [tag],
            requestBody: {
                content: {
                    "application/json": {
                        schema: util.getSchemaRequest("updateTransactionStatusSchema")
                    }
                }
            },
            responses: {
                200: {
                    description: "Update Status of Transaction",
                    content: {
                        "application/json": {
                            schema: {
                                properties: {
                                    message: {
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
    '/course/transaction': {
        get: {
            tags: [tag],
            parameters: [
                {
                    name: 'transaction_id',
                    in: 'query',
                    description: '',
                    schema: {
                        type: 'string'
                    },
                    required: true
                }
            ],
            responses: {
                200: {
                    description: "Detail Transaction",
                    content: {
                        "application/json": {
                            schema: util.getSchemaResponse("transactionDetailsSchema","transactionDetailsSchema", "object")
                        }
                    }
                }
            }
        }
    },
    '/course/commissioning': {
        put: {
            tags: [tag],
            requestBody: {
                content: {
                    "application/json": {
                        schema: util.getSchemaRequest("createCommissioningSchema")
                    }
                }
            },
            responses: {
                200: {
                    description: "Update Commissioning Course",
                    content: {
                        "application/json": {
                            schema: {
                                properties: {
                                    message: {
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
    '/participant-course-area':{
        post: {
            tags: [tag],
            requestBody: {
                content: {
                    "application/json": {
                        schema: util.getSchemaRequest("participantCourseAreaSchema")
                    }
                }
            },
            responses: {
                200: {
                    description: "Update Course",
                    content: {
                        "application/json": {
                            schema: {
                                properties: {
                                    message: {
                                        type: "string"
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
};

exports.default = {schema, paths}