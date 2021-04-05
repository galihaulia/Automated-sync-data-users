const util = require('../utils/apiBuildHandler');
const moment = require('moment');
const tag = "FGDsController"
const schema = {
    fgdsSchema : {
        title: "List FGD",
        type: "object",
        properties: {
            sumOfFgd: {
                type: "integer"
            },
            fgds: {
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
                        author: {
                            type: "object",
                            properties: {
                                id: {
                                    type: "integer"
                                },
                                fullName: {
                                    type: "string"
                                },
                                photo: {
                                    type: "string"
                                },
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
                        isGeneral: {
                            type: 'boolean'
                        },
                        course: {
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
                        keywords: {
                            type: "array",
                            items: { type: "string" }
                        },
                        files: {
                            type: "array",
                            items: { type: "string"}
                        },
                        sumOfComment: {
                            type: "integer"
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
            }
        }
    },
    fgdSchema: {
        title: "Detail FGD",
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
            author: {
                type: "object",
                properties: {
                    id: {
                        type: "integer"
                    },
                    fullName: {
                        type: "string"
                    },
                    photo: {
                        type: "string"
                    },
                    company: {
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
            isGeneral: {
                type: 'boolean'
            },
            course: {
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
            keywords: {
                type: "array",
                items: { type: "string" }
            },
            files: {
                type: "array",
                items: { type: "string"}
            },
            createdAt: {
                type: "string",
                format: "date-time"
            },
            updatedAt: {
                type: "string",
                format: "date-time"
            },
            comments: {
                type: "array",
                items: {
                    properties: {
                        id: {
                            type: "integer"
                        },
                        comment: {
                            type: "string"
                        },
                        file: {
                            type: "string"
                        },
                        createdBy: {
                            type: "object",
                            properties: {
                                id: {
                                    type: "integer"
                                },
                                fullName: {
                                    type: "string"
                                },
                                photo: {
                                    type: "string"
                                },
                                company: {
                                    type: "string"
                                }
                            }
                        },
                        isSolved: {
                            type: "boolean"
                        },
                        isLike: {
                            type: "boolean"
                        },
                        sumOfLike: {
                            type: "integer"
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
            }
        }
    },
    fgdCoursesSchema: {
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
                        },
                        sumOfFgd: {
                            type: "integer"
                        },
                        isCommisioning: {
                            type: "boolean"
                        }
                    }
                }
            }
        }
    },
    createFGDSchema:{
        title: "Create FGD",
        properties: {
            course_id: {
                type: "integer"
            },
            title: {
                type: "string"
            },
            description: {
                type: "string"
            },
            is_general: {
                type: 'boolean'
            },
            keywords: {
                type: "string"
            },
            files: {
                type: "array",
                items: { type: "string"}
            }
        }
    },
    updateFGDSchema:{
        title: "Update FGD",
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
            is_general: {
                type: 'boolean'
            },
            status_code: {
                type: 'string'
            },
            keywords: {
                type: "string"
            },
            files: {
                type: "array",
                items: { type: "string" }
            }
        }
    },
    deleteFGDSchema:{
        title: "Delete FGD",
        properties: {
            id: {
                type: "integer"
            }
        }
    },
    createCommentSchema:{
        title: "Create Comment",
        properties: {
            discussion_id: {
                type: "integer"
            },
            comment: {
                type: "string"
            },
            file: {
                type: "string"
            }
        }
    },
    feedbackSchema:{
        title: "Feedback of Discussion",
        properties: {
            comment_id: {
                type: "integer"
            }
        }
    },
}
const paths = {
    "/fgds": {
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
                    name: 'created_by',
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
                    name: 'status_code',
                    in: 'query',
                    description: 'SOLV1, SOLV2',
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
                    description : "List All FGD by CourseId",
                    content: {
                        "application/json": {
                            schema: util.getSchemaResponse("fgdsSchema","fgdsSchema","object")
                        }
                    }
                }
            }
        }
    },
    "/fgd/courses": {
        get: {
            tags:[tag],
            parameters: [
                {
                    name: 'type',
                    in: 'query',
                    description: 'internal-discussion,purchased,sold',
                    schema: {
                        type: 'string'
                    },
                    required: false
                },
                {
                    name: 'role',
                    in: 'query',
                    schema: {
                        type: 'integer'
                    },
                    required: false
                }
            ],
            responses: {
                200: {
                    description : "List Courses",
                    content: {
                        "application/json": {
                            schema: util.getSchemaResponse("fgdCoursesSchema","fgdCoursesSchema","object")
                        }
                    }
                }
            }
        }
    },
    "/fgd": {
        get: {
            tags:[tag],
            parameters: [
                {
                    name: 'fgd_id',
                    in: 'query',
                    schema: {
                        type: 'integer'
                    },
                    required: true
                }
            ],
            responses: {
                200: {
                    description : "Detail FGD",
                    content: {
                        "application/json": {
                            schema: util.getSchemaResponse("fgdSchema","fgdSchema","object")
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
                        schema: util.getSchemaRequest("createFGDSchema")
                    }
                }
            },
            responses: {
                200 : {
                    description: "Create FGD",
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
                        schema: util.getSchemaRequest("updateFGDSchema")
                    }
                }
            },
            responses: {
                200 : {
                    description: "Update FGD",
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
                        schema: util.getSchemaRequest("deleteFGDSchema")
                    }
                }
            },
            responses: {
                200 : {
                    description: "Delete FGD",
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
    "/fgd/image" : {
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
                    description : "Upload FGD Image",
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
                    description : "Delete FGD Image",
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
    "/fgd/thread-status": {
        put: {
            tags: [tag],
            requestBody: {
                content: {
                    "application/json":{
                        schema: util.getSchemaRequest("feedbackSchema")
                    }
                }
            },
            responses: {
                200 : {
                    description: "Feedback of Discussion",
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
    "/fgd/comment": {
        post: {
            tags: [tag],
            requestBody: {
                content: {
                    "application/json":{
                        schema: util.getSchemaRequest("createCommentSchema")
                    }
                }
            },
            responses: {
                200 : {
                    description: "Feedback of Discussion",
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
    "/fgd/comment-feedback": {
        put: {
            tags: [tag],
            requestBody: {
                content: {
                    "application/json":{
                        schema: util.getSchemaRequest("feedbackSchema")
                    }
                }
            },
            responses: {
                200 : {
                    description: "Feedback of Discussion",
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
    "/fgd/comment/image" : {
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
                    description : "Upload Comment Image",
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
                    description : "Delete Comment Image",
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