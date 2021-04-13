

const util1 = require('../utils/apiBuildHandler')
const tag = "ThirdPartiesController"
const schema = {
    list360Schema : {
        title: "List 360 Trainings",
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
                linkWeb: {
                    type: "string"
                }
            }
        }
    },
    detail360Schema : {
        title: "Detail 360 Training",
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
            linkWeb: {
                type: "string"
            }
        }
    },
    listVRSchema : {
        title: "List VR Trainings",
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
                }
            }
        }
    },
    detailVRSchema : {
        title: "Detail VR Training",
        properties: {
            id: {
                type: "integer"
            },
            name: {
                type: "string"
            },
            description: {
                type: "string"
            }
        }
    },
    listARSchema : {
        title: "List AR Trainings",
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
                }
            }
        }
    },
    detailARSchema : {
        title: "Detail AR Training",
        properties: {
            id: {
                type: "integer"
            },
            name: {
                type: "string"
            },
            description: {
                type: "string"
            }
        }
    },
    trainingCreation:{
        title: "360 Training Creation",
        properties: {
            training_id: {
                type: "integer"
            },
            user_id: {
                type: "integer"
            },
            score: {
                type: "integer"
            }
        }
    },
    posterARSchema : {
        title: "Detail AR Poster",
        type: "array",
        items: {
            properties: {
                id: {
                    type: "integer"
                },
                created_at: {
                    type: "string",
                    format: "date-time"
                },
                updated_at: {
                    type: "string",
                    format: "date-time"
                },
                poster_hazard_id: {
                    type: "integer"
                },
                image_url: {
                    type: "object",
                    properties: {
                        id: {
                            type: "integer"
                        },
                        name: {
                            type: "string"
                        },
                        alternativeText: {
                            type: "string"
                        },
                        caption: {
                            type: "string"
                        },
                        width: {
                            type: "integer"
                        },
                        height: {
                            type: "integer"
                        },
                        formats: {
                            type: "object",
                            properties: {
                                large: {
                                    type: "object",
                                    properties: {
                                        ext: {
                                            type: "string"
                                        },
                                        url: {
                                            type: "string"
                                        },
                                        hash: {
                                            type: "string"
                                        },
                                        mime: {
                                            type: "string"
                                        },
                                        path: {
                                            type: "string"
                                        },
                                        size: {
                                            type: "number"
                                        },
                                        width: {
                                            type: "string"
                                        },
                                        height: {
                                            type: "string"
                                        }
                                    }
                                },
                                small: {
                                    type: "object",
                                    properties: {
                                        ext: {
                                            type: "string"
                                        },
                                        url: {
                                            type: "string"
                                        },
                                        hash: {
                                            type: "string"
                                        },
                                        mime: {
                                            type: "string"
                                        },
                                        path: {
                                            type: "string"
                                        },
                                        size: {
                                            type: "number"
                                        },
                                        width: {
                                            type: "string"
                                        },
                                        height: {
                                            type: "string"
                                        }
                                    }
                                },
                                medium: {
                                    type: "object",
                                    properties: {
                                        ext: {
                                            type: "string"
                                        },
                                        url: {
                                            type: "string"
                                        },
                                        hash: {
                                            type: "string"
                                        },
                                        mime: {
                                            type: "string"
                                        },
                                        path: {
                                            type: "string"
                                        },
                                        size: {
                                            type: "number"
                                        },
                                        width: {
                                            type: "string"
                                        },
                                        height: {
                                            type: "string"
                                        }
                                    }
                                },
                                thumbnail: {
                                    type: "object",
                                    properties: {
                                        ext: {
                                            type: "string"
                                        },
                                        url: {
                                            type: "string"
                                        },
                                        hash: {
                                            type: "string"
                                        },
                                        mime: {
                                            type: "string"
                                        },
                                        path: {
                                            type: "string"
                                        },
                                        size: {
                                            type: "number"
                                        },
                                        width: {
                                            type: "string"
                                        },
                                        height: {
                                            type: "string"
                                        }
                                    }
                                }
                            }
                        },
                        hash: {
                            type: "string"
                        },
                        ext: {
                            type: "string"
                        },
                        mime: {
                            type: "string"
                        },
                        size: {
                            type: "number"
                        },
                        url: {
                            type: "string"
                        },
                        previewUrl: {
                            type: "string"
                        },
                        provider: {
                            type: "string"
                        },
                        provider_metadata: {
                            type: "string"
                        },
                        created_at: {
                            type: "string",
                            format: "date-time"
                        },
                        updated_at: {
                            type: "string",
                            format: "date-time"
                        }                        
                    }
                }
            }
        }
    },
    listUserSchema : {
        title: "List Data User",
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
                linkWeb: {
                    type: "string"
                }
            }
        }
    },
}
const paths = {
    "/trainings/360": {
        get: {
            tags : [tag],
            responses: {
                200: {
                    description : "List 360 Trainings",
                    content: {
                        "application/json": {
                            schema: util1.getSchemaResponse("list360Schema","list360Schema","object")
                        }
                    }
                }
            }
        }
    },
    "/training/360": {
        get: {
            tags : [tag],
            parameters: [
                {
                    name: 'training_id',
                    in: 'query',
                    schema: {
                      type: 'integer'
                    },
                    required: true
                }
            ],
            responses: {
                200: {
                    description : "Detail 360 Training",
                    content: {
                        "application/json": {
                            schema: util1.getSchemaResponse("detail360Schema","detail360Schema","object")
                        }
                    }
                }
            }
        }
    },
    "/training/score-360": {
        post: {
            tags: [tag],
            requestBody: {
                content: {
                    "application/json":{
                        schema: util1.getSchemaRequest("trainingCreation")
                    }
                }
            },
            responses: {
                200 : {
                    description: "Submitting Score Of 360 Training",
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
    "/trainings/VR": {
        get: {
            tags : [tag],
            responses: {
                200: {
                    description : "List VR Trainings",
                    content: {
                        "application/json": {
                            schema: util1.getSchemaResponse("listVRSchema","listVRSchema","object")
                        }
                    }
                }
            }
        }
    },
    "/training/VR": {
        get: {
            tags : [tag],
            parameters: [
                {
                    name: 'training_id',
                    in: 'query',
                    schema: {
                      type: 'integer'
                    },
                    required: true
                }
            ],
            responses: {
                200: {
                    description : "Detail VR Training",
                    content: {
                        "application/json": {
                            schema: util1.getSchemaResponse("detailVRSchema","detailVRSchema","object")
                        }
                    }
                }
            }
        }
    },
    "/training/score-VR": {
        post: {
            tags: [tag],
            requestBody: {
                content: {
                    "application/json":{
                        schema: util1.getSchemaRequest("trainingCreation")
                    }
                }
            },
            responses: {
                200 : {
                    description: "Submitting Score Of VR Training",
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
    "/trainings/AR": {
        get: {
            tags : [tag],
            responses: {
                200: {
                    description : "List AR Trainings",
                    content: {
                        "application/json": {
                            schema: util1.getSchemaResponse("listARSchema","listARSchema","object")
                        }
                    }
                }
            }
        }
    },
    "/training/AR": {
        get: {
            tags : [tag],
            parameters: [
                {
                    name: 'training_id',
                    in: 'query',
                    schema: {
                      type: 'integer'
                    },
                    required: true
                }
            ],
            responses: {
                200: {
                    description : "Detail AR Training",
                    content: {
                        "application/json": {
                            schema: util1.getSchemaResponse("detailARSchema","detailARSchema","object")
                        }
                    }
                }
            }
        }
    },
    "/training/score-AR": {
        post: {
            tags: [tag],
            requestBody: {
                content: {
                    "application/json":{
                        schema: util1.getSchemaRequest("trainingCreation")
                    }
                }
            },
            responses: {
                200 : {
                    description: "Submitting Score Of AR Training",
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
    "/training/poster-AR": {
        get: {
            tags : [tag],
            parameters: [
                {
                    name: 'poster_id',
                    in: 'query',
                    schema: {
                      type: 'integer'
                    },
                    required: true
                }
            ],
            responses: {
                200: {
                    description : "Detail AR Poster",
                    content: {
                        "application/json": {
                            schema: util1.getSchemaResponse("posterARSchema","posterARSchema","object")
                        }
                    }
                }
            }
        }
    },
    "/training/posters-AR": {
        get: {
            tags : [tag],
            parameters: [
                {
                    name: 'training_id',
                    in: 'query',
                    schema: {
                      type: 'integer'
                    },
                    required: true
                }
            ],
            responses: {
                200: {
                    description : "List AR Poster",
                    content: {
                        "application/json": {
                            schema: util1.getSchemaResponse("posterARSchema","posterARSchema","object")
                        }
                    }
                }
            }
        }
    },
    "/list/users": {
        get: {
            tags : [tag],
            responses: {
                200: {
                    description : "List 360 Trainings",
                    content: {
                        "application/json": {
                            schema: util1.getSchemaResponse("listUserSchema","listUserSchema","object")
                        }
                    }
                }
            }
        }
    }
}
exports.default = {schema,paths}