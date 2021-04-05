

const util1 = require('../utils/apiBuildHandler')
const moment = require('moment')
const tag = "JobTitlesController"
const schema = {
    jobTitlesSchema : {
        title: "List Job Titles",
        type: "object",
        properties: {
            sumOfJobTitle: {
                type: "integer"
            },
            departments: {
                type: "array",
                items: {
                    properties: {
                        id: {
                            type: "integer"
                        },
                        name: {
                            type: "string"
                        },
                        departmentCode: {
                            type: "string"
                        },
                        companiesId: {
                            type: "integer"
                        },
                        isActive: {
                            type: "boolean"
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
                        jobLevels: {
                            type: "array",
                            items: {
                                properties: {
                                    type: "object",
                                    properties: {
                                        id: {
                                            type: "integer"
                                        },
                                        name: {
                                            type: "string"
                                        },
                                        isActive: {
                                            type: "boolean"
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
                                        levels: {
                                            type: "array",
                                            items: {
                                                type: "object",
                                                properties: {
                                                    id: {
                                                        type: "integer"
                                                    },
                                                    name: {
                                                        type: "string"
                                                    },
                                                    isActive: {
                                                        type: "boolean"
                                                    },
                                                    deletedAt: {
                                                        type: "string",
                                                        format: "date-time"
                                                    },
                                                    createdAt: {
                                                        type: "string",
                                                        format: "date-time"
                                                    },
                                                    updatedAt: {
                                                        type: "string",
                                                        format: "date-time"
                                                    }
                                                }
                                            }
                                        },
                                        members: {
                                            type: "array",
                                            items: {
                                                type: "object",
                                                properties: {
                                                    usersId: {
                                                        type: "integer"
                                                    },
                                                    email: {
                                                        type: "string"
                                                    },
                                                    fullName: {
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
                    }
                }                
            }
        }
    },
    jobTitleSchema: {
        title: "Job Title Detail",
        properties: {
            departmentsId: {
                type: "integer"
            },
            jobTitlesId: {
                type: "integer"
            },
            levels: {
                type: "array",
                items: {
                    type: "object",
                    properties: {
                        id: {
                            type: "integer"
                        },
                        name: {
                            type: "string"
                        },
                        isActive: {
                            type: "boolean"
                        },
                        deletedAt: {
                            type: "string",
                            format: "date-time"
                        },
                        createdAt: {
                            type: "string",
                            format: "date-time"
                        },
                        updatedAt: {
                            type: "string",
                            format: "date-time"
                        }
                    }
                }
            },
            members: {
                type: "array",
                items: {
                    type: "object",
                    properties: {
                        usersId: {
                            type: "integer"
                        },
                        email: {
                            type: "string"
                        },
                        fullName: {
                            type: "string"
                        },
                        level: {
                            type: "string"
                        }
                    }
                }
            }
        }
    },
    jobTitlesCreation:{
        title: "JobTitlesCreation",
        type: "array",
        items: {
            properties: {
                department_id: {
                    type: "integer"
                },
                name: {
                    type: "string"
                },
                levels: {
                    type: "array",
                    items: {
                        type: "object",
                        properties: {
                            id: {
                                type: "integer"
                            }
                        }
                    }
                }
                
            }
        }
    },
    jobTitleCreation:{
        title: "JobTitleCreation",
        properties: {
            department_id: {
                type: "integer"
            },
            name: {
                type: "string"
            },
            levels: {
                type: "array",
                items: {
                    type: "object",
                    properties: {
                        id: {
                            type: "integer"
                        }
                    }
                }
            }
            
        }
    },
    jobTitleModification:{
        title: "JobTitleModification",
        properties: {
            id: {
                type: "integer"
            },
            department_id: {
                type: "integer"
            },
            name: {
                type: "string"
            },
            levels: {
                type: "array",
                items: {
                    type: "object",
                    properties: {
                        id: {
                            type: "integer"
                        }
                    }
                }
            }
            
        }
    },
    jobTitleDeletion: {
        title: "JobTitleDeletion",
        properties: {
            id: {
                type: "integer"
            }
        }
    },
    jobTitleDisposition: {
        title: "JobTitleDisposition",
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
            users: {
                type: "array",
                items: {
                    type: "object",
                    properties: {
                        id: {
                            type: "integer"
                        }
                    }
                }
            }
        }
    }
}
const paths = {
    "/job-titles": {
        get: {
            tags : [tag],
            parameters: [
                {
                    name: 'company_id',
                    in: 'query',
                    schema: {
                      type: 'string'
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
                    name: 'filter_by',
                    in: 'query',
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
                    description : "List All Job Titles",
                    content: {
                        "application/json": {
                            schema: util1.getSchemaResponse("jobTitlesSchema","jobTitlesSchema","object")
                        }
                    }
                }
            }
        },
        post: {
            tags: [tag],
            requestBody: {
                content: {
                    "application/json":{
                        schema: util1.getSchemaRequest("jobTitlesCreation")
                    }
                }
            },
            responses: {
                200 : {
                    description: "Job Titles Creation",
                    content: {
                        "application/json":{
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
    "/job-title": {
        get: {
            tags:[tag],
            parameters: [
                {
                    name: 'department_id',
                    in: 'query',
                    schema: {
                      type: 'integer'
                    },
                    required: true
                },
                {
                    name: 'job_title_id',
                    in: 'query',
                    schema: {
                      type: 'integer'
                    },
                    required: true
                }
            ],
            responses: {
                200: {
                    description : "Job Title Detail",
                    content: {
                        "application/json": {
                            schema: util1.getSchemaResponse("jobTitleSchema","jobTitleSchema","object")
                        }
                    }
                }
            }
        },
        post: {
            tags: [tag],
            requestBody: {
                content: {
                    "application/json":{
                        schema: util1.getSchemaRequest("jobTitleCreation")
                    }
                }
            },
            responses: {
                200 : {
                    description: "Job Title Creation",
                    content: {
                        "application/json":{
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
                    "application/json":{
                        schema: util1.getSchemaRequest("jobTitleModification")
                    }
                }
            },
            responses: {
                200 : {
                    description: "Job Title Modification",
                    content: {
                        "application/json":{
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
                    "application/json":{
                        schema: util1.getSchemaRequest("jobTitleDeletion")
                    }
                }
            },
            responses: {
                200 : {
                    description: "Job Title Deletion",
                    content: {
                        "application/json":{
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
    "/job-title/assign": {
        post: {
            tags: [tag],
            requestBody: {
                content: {
                    "application/json":{
                        schema: util1.getSchemaRequest("jobTitleDisposition")
                    }
                }
            },
            responses: {
                200 : {
                    description: "Job Title Disposition",
                    content: {
                        "application/json":{
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
    "/job-title/user": {
        delete: {
            tags: [tag],
            requestBody: {
                content: {
                    "application/json":{
                        schema: {
                            properties: {
                                user_id: {
                                    type: "integer"
                                }
                            }
                        }
                    }
                }
            },
            responses: {
                200 : {
                    description: "Job Title Disposition",
                    content: {
                        "application/json":{
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
}
exports.default = {schema,paths}