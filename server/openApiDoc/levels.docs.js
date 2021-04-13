

const util1 = require('../utils/apiBuildHandler')
const tag = "LevelsController"
const schema = {
    levelsSchema : {
        title: "List Levels",
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
    },
    levelSchema: {
        title: "Level Detail",
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
            }
        }
    },
    levelCreation:{
        title: "LevelCreation",
        properties: {
            name: {
                type: "string"
            }
        }
    },
    levelModification:{
        title: "LevelModification",
        properties: {
            id: {
                type: "integer"
            },
            name: {
                type: "string"
            },
            is_active: {
                type: "boolean"
            }
        }
    },
    levelDeletion: {
        title: "LevelDeletion",
        properties: {
            id: {
                type: "integer"
            }
        }
    }
}
const paths = {
    "/levels": {
        get: {
            tags : [tag],
            responses: {
                200: {
                    description : "List All Levels",
                    content: {
                        "application/json": {
                            schema: util1.getSchemaResponse("levelsSchema","levelsSchema","object")
                        }
                    }
                }
            }
        }
    },
    "/level": {
        get: {
            tags:[tag],
            parameters: [
                {
                    name: 'level_id',
                    in: 'query',
                    schema: {
                      type: 'integer'
                    },
                    required: true
                  }
            ],
            responses: {
                200: {
                    description : "Level Detail",
                    content: {
                        "application/json": {
                            schema: util1.getSchemaResponse("levelSchema","levelSchema","object")
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
                        schema: util1.getSchemaRequest("levelCreation")
                    }
                }
            },
            responses: {
                200 : {
                    description: "Level Creation",
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
                        schema: util1.getSchemaRequest("levelModification")
                    }
                }
            },
            responses: {
                200 : {
                    description: "Level Modification",
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
                        schema: util1.getSchemaRequest("levelDeletion")
                    }
                }
            },
            responses: {
                200 : {
                    description: "Level Deletion",
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