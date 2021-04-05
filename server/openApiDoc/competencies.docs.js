

const util1 = require('../utils/apiBuildHandler');
const moment = require('moment');
const tag = "CompetenciesController"
const schema = {
    compDeptsSchema : {
        title: "List Departments of Competency",
        type: "object",
        properties: {
            departments: {
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
                        sumOfCompetency: {
                            type: "integer"
                        }
                    }
                }
            }
        }
    },
    compsSchema : {
        title: "List Competencies",
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
                        description: {
                            type: "string"
                        },
                        cover: {
                            type: "string"
                        },
                        status: {
                            type: "string"
                        },
                        jobTitle: {
                            type: "string"
                        },
                        level: {
                            type: "string"
                        },
                        stdCompetency: {
                            type: "object",
                            properties: {
                                id: {
                                    type: "string"
                                },
                                name: {
                                    type: "string"
                                }
                            }
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
                        sumOfSyllabus: {
                            type: "integer"
                        },
                        sumOfCourse: {
                            type: "integer"
                        }
                    }
                }
            }
        }
    },
    compSchema : {
        title: "Competency Detail",
        properties: {
            id: {
                type: "integer"
            },
            title: {
                type: "string"
            },
            description: {
                type: "string"
            },
            cover: {
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
            department: {
                type: "object",
                properties: {
                    id: {
                        type: "integer"
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
                        type: "integer"
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
                        type: "integer"
                    },
                    name: {
                        type: "string"
                    }
                }
            },
            stdCompetency: {
                type: "object",
                properties: {
                    id: {
                        type: "string"
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
                                    description: {
                                        type: "string"
                                    },
                                    cover: {
                                        type: "string"
                                    },
                                    author: {
                                        type: "string"
                                    },
                                    sumOfChapter: {
                                        type: "integer"
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    },
    compCreation:{
        title: "CompetencyCreation",
        properties: {
            title: {
                type: "string"
            },
            description: {
                type: "string"
            },
            cover: {
                type: "string"
            },
            department_id: {
                type: "integer"
            },
            job_title_id: {
                type: "integer"
            },
            level_id:{
                type: "integer"
            },
            std_competency_id: {
                type: "integer"
            },
            syllabuses: {
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
    compModification:{
        title: "CompetencyModification",
        properties: {
            id: {
                type: "integer"
            },
            title: {
                type: "string"
            },
            description: {
                type: "string"
            },
            cover: {
                type: "string"
            },
            department_id: {
                type: "integer"
            },
            job_title_id: {
                type: "integer"
            },
            level_id:{
                type: "integer"
            },
            std_competency_id: {
                type: "integer"
            },
            status_code: {
                type: "string"
            },
            syllabuses: {
                type: "array",
                items: {
                    type: "object",
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
    compDeletion: {
        title: "CompetencyDeletion",
        properties: {
            id: {
                type: "integer"
            }
        }
    }
}
const paths = {
    "/competency/departments": {
        get: {
            tags : [tag],
            responses: {
                200: {
                    description : "List All Departments Of Competency",
                    content: {
                        "application/json": {
                            schema: util1.getSchemaResponse("compDeptsSchema","compDeptsSchema","object")
                        }
                    }
                }
            }
        }
    },
    "/competencies": {
        get: {
            tags : [tag],
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
                    required: false
                },
                {
                    name: 'level_id',
                    in: 'query',
                    schema: {
                      type: 'integer'
                    },
                    required: false
                },
                {
                    name: 'status_code',
                    in: 'query',
                    description: 'Draft, Pub02',
                    schema: {
                      type: 'string'
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
                    description : "List All Competencies",
                    content: {
                        "application/json": {
                            schema: util1.getSchemaResponse("compsSchema","compsSchema","object")
                        }
                    }
                }
            }
        }
    },
    "/competency": {
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
                    description : "Competency Detail",
                    content: {
                        "application/json": {
                            schema: util1.getSchemaResponse("compSchema","compSchema","object")
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
                        schema: util1.getSchemaRequest("compCreation")
                    }
                }
            },
            responses: {
                200 : {
                    description: "Competency Creation",
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
                        schema: util1.getSchemaRequest("compModification")
                    }
                }
            },
            responses: {
                200 : {
                    description: "Competency Modification",
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
                        schema: util1.getSchemaRequest("compDeletion")
                    }
                }
            },
            responses: {
                200 : {
                    description: "Competency Deletion",
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
    "/competency/image" : {
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
                    description : "Upload competency image",
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
                    description : "Delete competency image",
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
    }
}
exports.default = {schema,paths}