

const util1 = require('../utils/apiBuildHandler')
const moment = require('moment')
const tag = "StdCompetenciesController"
const schema = {
    stdDeptsSchema : {
        title: "List Departments of Std Competency",
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
                        sumOfStdCompetency: {
                            type: "integer"
                        }
                    }
                }
            }
        }
    },
    stdJobTitlesSchema : {
        title: "List Job Titles of Std Competency",
        type: "object",
        properties: {
            jobTitles: {
                type: "array",
                items: {
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
                        stdCompetencies: {
                            type: "array",
                            items: {
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
                }
            }
        }
    },
    stdCompetenciesSchema : {
        title: "List of Std Competency",
        type: "object",
        properties: {
            stdCompetencies: {
                type: "array",
                items: {
                    properties: {
                        id: {
                            type: "integer"
                        },
                        title: {
                            type: "string"
                        }
                    }
                }
            }
        }
    },
    stdCompetenciAreaSchema : {
        title: "Std Competency Area",
        type: "object",
        properties: {
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
                        jobTitles: {
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
        }
    },
    stdCreation:{
        title: "StdCompetencyCreation",
        properties: {
            title: {
                type: "string"
            },
            file: {
                type: "string"
            },
            departments: {
                type: "array",
                items: {
                    type: "object",
                    properties: {
                        id: {
                            type: "integer"
                        },
                        job_titles: {
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
        }
    },
    stdModification:{
        title: "StdCompetencyModification",
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
            departments: {
                type: "array",
                items: {
                    type: "object",
                    properties: {
                        id: {
                            type: "integer"
                        },
                        job_titles: {
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
        }
    },
    stdDeletion: {
        title: "StdCompetencyDeletion",
        properties: {
            id: {
                type: "integer"
            }
        }
    }
}
const paths = {
    "/std-competency/departments": {
        get: {
            tags : [tag],
            responses: {
                200: {
                    description : "List All Departments Of Std Competency",
                    content: {
                        "application/json": {
                            schema: util1.getSchemaResponse("stdDeptsSchema","stdDeptsSchema","object")
                        }
                    }
                }
            }
        }
    },
    "/std-competency/job-titles": {
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
                    name: 'filter_by',
                    in: 'query',
                    description: 'title',
                    schema: {
                      type: 'string'
                    },
                    required: false
                }
            ],
            responses: {
                200: {
                    description : "List All Job Titles Of Std Competency",
                    content: {
                        "application/json": {
                            schema: util1.getSchemaResponse("stdJobTitlesSchema","stdJobTitlesSchema","object")
                        }
                    }
                }
            }
        }
    },
    "/std-competencies": {
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
                    description: 'title',
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
                }
            ],
            responses: {
                200: {
                    description : "List Of Std Competency",
                    content: {
                        "application/json": {
                            schema: util1.getSchemaResponse("stdCompetenciesSchema","stdCompetenciesSchema","object")
                        }
                    }
                }
            }
        }
    },
    "/std-competency-area": {
        get: {
            tags : [tag],
            parameters: [
                {
                    name: 'std_competency_id',
                    in: 'query',
                    schema: {
                      type: 'integer'
                    },
                    required: true
                }
            ],
            responses: {
                200: {
                    description : "Std CompetencyArea",
                    content: {
                        "application/json": {
                            schema: util1.getSchemaResponse("stdCompetencyAreaSchema","stdCompetencyAreaSchema","object")
                        }
                    }
                }
            }
        }
    },
    "/std-competency": {
        post: {
            tags: [tag],
            requestBody: {
                content: {
                    "application/json":{
                        schema: util1.getSchemaRequest("stdCreation")
                    }
                }
            },
            responses: {
                200 : {
                    description: "Std Competency Creation",
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
                        schema: util1.getSchemaRequest("stdModification")
                    }
                }
            },
            responses: {
                200 : {
                    description: "Std Competency Modification",
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
                        schema: util1.getSchemaRequest("stdDeletion")
                    }
                }
            },
            responses: {
                200 : {
                    description: "Std Competency Deletion",
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
    "/std-competency/file" : {
        post : {
            tags : [tag],
            requestBody: {
                content:{
                    "multipart/form-data":{
                        type: "object",
                        schema: {
                            properties: {
                                file: {
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
                    description : "Upload std competency file",
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
                    description : "Delete std competency file",
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