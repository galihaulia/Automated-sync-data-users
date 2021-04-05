

const util1 = require('../utils/apiBuildHandler');
const moment = require('moment');
const tag = "SyllabusesController"
const schema = {
    syllabusesSchema : {
        title: "List Syllabuses",
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
                        description: {
                            type: "string"
                        },
                        cover: {
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
                        numOfCourses: {
                            type: "integer"
                        }
                    }
                }
            }
        }
    },
    syllabusSchema : {
        title: "Syllabus Detail",
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
                        author: {
                            type: "string"
                        },
                        cover: {
                            type: "string"
                        },
                        sumOfChapter: {
                            type: "integer"
                        }
                    }
                }
            }
        }
        
    },
    syllabusCreation:{
        title: "SyllabusCreation",
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
            courses: {
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
    syllabusModification:{
        title: "SyllabusModification",
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
            courses: {
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
    syllabusDeletion: {
        title: "SyllabusDeletion",
        properties: {
            id: {
                type: "integer"
            }
        }
    }
}
const paths = {
    "/syllabuses": {
        get: {
            tags : [tag],
            parameters: [
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
                    name: 'sort_by',
                    description: 'title',
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
                    description : "List All Syllabuses",
                    content: {
                        "application/json": {
                            schema: util1.getSchemaResponse("syllabusesSchema","syllabusesSchema","object")
                        }
                    }
                }
            }
        }
    },
    "/syllabus": {
        get: {
            tags : [tag],
            parameters: [
                {
                    name: 'syllabus_id',
                    in: 'query',
                    schema: {
                      type: 'integer'
                    },
                    required: true
                }
            ],
            responses: {
                200: {
                    description : "Syllabus Detail",
                    content: {
                        "application/json": {
                            schema: util1.getSchemaResponse("syllabusSchema","syllabusSchema","object")
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
                        schema: util1.getSchemaRequest("syllabusCreation")
                    }
                }
            },
            responses: {
                200 : {
                    description: "Syllabus Creation",
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
                        schema: util1.getSchemaRequest("syllabusModification")
                    }
                }
            },
            responses: {
                200 : {
                    description: "Syllabus Modification",
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
                        schema: util1.getSchemaRequest("syllabusDeletion")
                    }
                }
            },
            responses: {
                200 : {
                    description: "Syllabus Deletion",
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
    "/syllabus/image" : {
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
                    description : "Upload syllabus image",
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
                    description : "Delete syllabus image",
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