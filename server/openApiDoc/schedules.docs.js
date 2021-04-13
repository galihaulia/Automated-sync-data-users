const util = require('../utils/apiBuildHandler')
const tag = "SchedulesController"
const schema = {
    schedulesSchema: {
        title: "List Schedules",
        type: "object",
        properties: {
            schedules: {
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
                        type: {
                            type: "string"
                        },
                        startDate: {
                            type: "string",
                            format: "date-time"
                        },
                        endDate: {
                            type: "string",
                            format: "date-time"
                        },
                        startTime: {
                            type: "string",
                            format: "date-time"
                        },
                        isAllDay: {
                            type: "boolean"
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
                                }
                            }
                        },
                        author: {
                            type: "object",
                            properties: {
                                fullName: {
                                    type: "string"
                                },
                                photo: {
                                    type: "string"
                                },
                                cover: {
                                    type: "string"
                                }
                            }
                        },
                        link: {
                            type: "string"
                        },
                        color: {
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
                        webinar: {
                            type: "object",
                            properties: {
                                speakers: {
                                    type: "array",
                                    items: { type: "integer" }
                                }
                            }
                        }
                    }
                }
            }
        }
    },
    scheduleSchema: {
        title: "Schedules View",
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
            type: {
                type: "string"
            },
            trainingType: {
                type: "string"
            },
            startDate: {
                type: "string"
            },
            endDate: {
                type: "string"
            },
            startTime: {
                type: "string"
            },
            endTime: {
                type: "string"
            },
            isAllDay: {
                type: "boolean"
            },
            category: {
                type: "object",
                properties: {
                    id: {
                        type: "number"
                    },
                    name: {
                        type: "string"
                    },
                    color: {
                        type: "string"
                    }
                }
            },
            author: {
                type: "object",
                properties: {
                    fullName: {
                        type: "string"
                    },
                    photo: {
                        type: "string"
                    },
                    cover: {
                        type: "string"
                    }
                }
            },
            organizer: {
                type: "string"
            },
            createdAt: {
                type: "string"
            },
            updatedAt: {
                type: "string"
            },
            scheduleArea: {
                type: "object",
                properties: {
                    departments: {
                        type: "array",
                        items: {
                            type: "object",
                            properties: {
                                id: {
                                    type: "number"
                                },
                                fullName: {
                                    type: "string"
                                },
                                photo: {
                                    type: "string"
                                },
                                department: {
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
                                jobTitle: {
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
                                level: {
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
                    },
                    employees: {
                        type: "array",
                        items: {
                            type: "object",
                            properties: {
                                id: {
                                    type: "number"
                                },
                                fullName: {
                                    type: "string"
                                },
                                photo: {
                                    type: "string"
                                },
                                department: {
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
                                jobTitle: {
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
                                level: {
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
            },
            assignment: {
                type: "object",
                properties: {
                    mentors: {
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
                                job: {
                                    type: "string"
                                },
                                level: {
                                    type: "string"
                                }
                            }
                        }
                    },
                    courses: {
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
                                cover: {
                                    type: "string"
                                },
                                activity: {
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
                                author: {
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
                                sumOfChapter: {
                                type: "number"
                                }
                            }
                        }
                    }
                }
            },
            sumOfParticipant: {
                type: "number"
            }
        }
    },
    detailsScheduleSchema: {
        title: "detil Schedules",
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
            type: {
                type: "string"
            },
            startDate: {
                type: "string"
            },
            endDate: {
                type: "string"
            },
            startTime: {
                type: "string"
            },
            endTime: {
                type: "string"
            },
            isAllDay: {
                type: "boolean"
            },
            category: {
                type: "object",
                    properties: {
                    id: {
                        type: "number"
                    },
                    name: {
                        type: "string"
                    },
                    color: {
                        type: "string"
                    }
                }
            },
            author: {
                type: "object",
                    properties: {
                    fullName: {
                        type: "string"
                    },
                    photo: {
                        type: "string"
                    },
                    cover: {
                        type: "string"
                    }
                }
            },
            organizer: {
                type: "string"
            },
            createdAt: {
                type: "string"
            },
            updatedAt: {
                type: "string"
            },
            assignment: {
                type: "object",
                properties: {
                    mentors: {
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
                                }
                            }
                        }
                    },
                    courses: {
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
                            cover: {
                                type: "string"
                            },
                            author: {
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
                            sumOfChapter: {
                                type: "number"
                            }
                        }
                        }
                    }
                }
            },
            sumOfParticipant: {
                type: "number"
            },
            progressBar: {
                type: "object",
                    properties: {
                    progressCourse: {
                        type: "number"
                    },
                    progressMaterials: {
                        type: "number"
                    },
                    sumDoneSubmit: {
                        type: "number"
                    },
                    sumTotalSubmit: {
                        type: "number"
                    }
                }
            },
            assignmentList: {
                type: "array",
                items: {
                    type: "object",
                    properties: {
                        id: {
                            type: "number"
                        },
                        courseId: {
                            type: "number"
                        },
                        progressListMaterial: {
                            type: "number"
                        },
                        name: {
                            type: "string"
                        },
                        status: {
                            type: "string"
                        },
                        enUsers: {
                            type: "array",
                            items: {
                                type: "object",
                                properties: {
                                    idNumber: {
                                        type: "string"
                                    },
                                    name: {
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
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    },
    createScheduleSchema: {
        title: "Create Schedule",
        type: "object",
        properties: {
            name: {
                type: "string"
            },
            description: {
                type: "string"
            },
            category_id: {
                type: "integer"
            },
            type: {
                type: "string"
            },
            start_date: {
                type: "string",
                format: "date-time"
            },
            end_date: {
                type: "string",
                format: "date-time"
            },
            start_time: {
                type: "string",
                format: "date-time"
            },
            end_time: {
                type: "string",
                format: "date-time"
            },
            is_all_day: {
                type: "booelan"
            },
            link: {
                type: "string"
            },
            organizer: {
                type: "string"
            },
            color: {
                type: "string"
            },
            trainingType: {
                type: "string"
            },
            companyId: {
                type: "integer"
            },
            schedule_area: {
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
                                    items: { type: "integer" }
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
            },
            speakers: {
                type: "array",
                items: { type: "integer" }
            },
            courses: {
                type: "array",
                items: { type: "integer" }
            },
            mentors: {
                type: "array",
                items: { type: "integer" }
            }
        }
    },
    updateScheduleSchema: {
        title: "Update Schedule",
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
            category_id: {
                type: "integer"
            },
            type: {
                type: "string"
            },
            start_date: {
                type: "string",
                format: "date-time"
            },
            end_date: {
                type: "string",
                format: "date-time"
            },
            start_time: {
                type: "string",
                format: "date-time"
            },
            end_time: {
                type: "string",
                format: "date-time"
            },
            is_all_day: {
                type: "booelan"
            },
            link: {
                type: "string"
            },
            color: {
                type: "string"
            },
            schedule_area: {
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
                                    items: { type: "integer" }
                                },
                                deletion: {
                                    type: "integer"
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
                                },
                                deletion: {
                                    type: "integer"
                                }
                            }
                        }
                    }
                }
            },
            speakers: {
                type: "array",
                items: {
                    properties: {
                        id: {
                            type: "integer"
                        },
                        deletion: {
                            type: "integer"
                        }
                    }
                }
            },
            courses: {
                type: "array",
                items: {
                    properties: {
                        id: {
                            type: "integer"
                        },
                        deletion: {
                            type: "integer"
                        }
                    }
                }
            },
            mentors: {
                type: "array",
                items: {
                    properties: {
                        id: {
                            type: "integer"
                        },
                        deletion: {
                            type: "integer"
                        }
                    }
                }
            }
        }
    },
    deleteScheduleSchema: {
        title: "Delete Schedule",
        type: "object",
        properties: {
            id: {
                type: "integer"
            },
            
        }
    },
    scheduleCourseSchema: {
        title: "List Courses",
        type: "object",
        properties: {
            courses: {
                type: "array",
                items: {
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
        }
    }
}

const paths = {
    "/schedules": {
        get: {
            tags: [tag],
            parameters: [
                {
                    name: 'is_manager',
                    in: 'query',
                    schema: {
                        type: 'boolean'
                    },
                    required: false
                },
                {
                    name: 'month',
                    in: 'query',
                    schema: {
                        type: 'string',
                        enum: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
                    },
                    required: false
                },
                {
                    name: 'filter_by',
                    in: 'query',
                    schema: {
                        type: 'string',
                        enum: ["Upcoming", "Overdue", "Ongoing"]
                    },
                    required: false
                }
            ],
            responses: {
                200: {
                    description: "List All Schedules",
                    content: {
                        "application/json": {
                            schema: util.getSchemaResponse("schedulesSchema", "schedulesSchema", "object")
                        }
                    }
                }
            }
        }
    },
    "/schedule": {
        get: {
            tags: [tag],
            parameters: [
                {
                    name: 'schedule_id',
                    in: 'query',
                    schema: {
                        type: 'integer'
                    },
                    required: true
                }
            ],
            responses: {
                200: {
                    description: "Schedule Detail",
                    content: {
                        "application/json": {
                            schema: util.getSchemaResponse("scheduleSchema", "scheduleSchema", "object")
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
                        schema: util.getSchemaRequest("createScheduleSchema")
                    }
                }
            },
            responses: {
                200: {
                    description: "Create Schedule",
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
                        schema: util.getSchemaRequest("updateScheduleSchema")
                    }
                }
            },
            responses: {
                200: {
                    description: "Schedule Update",
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
        delete: {
            tags: [tag],
            requestBody: {
                content: {
                    "application/json": {
                        schema: util.getSchemaRequest("deleteScheduleSchema")
                    }
                }
            },
            responses: {
                200: {
                    description: "Delete Schedule",
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
    },
    "/schedule/course": {
        get: {
            tags: [tag],
            parameters: [
                {
                    name: 'trainingType',
                    in: 'query',
                    description: 'webinar,inclass',
                    schema: {
                        type: 'string'
                    },
                    required: false
                },
                {
                    name: 'organizer',
                    in: 'query',
                    schema: {
                        type: 'integer'
                    },
                    required: false
                },
            ],
            responses: {
                200: {
                    description: "List All Schedules",
                    content: {
                        "application/json": {
                            schema: util.getSchemaResponse("scheduleCourseSchema", "scheduleCourseSchema", "object")
                        }
                    }
                }
            }
        }
    },
    "/schedule/details":{
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
                }
            ],
            responses: {
                200: {
                    description : "Detail Schedule",
                    content: {
                        "application/json": {
                            schema: util.getSchemaResponse("detailsScheduleSchema","detailsScheduleSchema","object")
                        }
                    }
                }
            }
        }
    }
}

exports.default = {schema, paths}
