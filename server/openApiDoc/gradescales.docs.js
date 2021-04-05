const util1 = require('../utils/apiBuildHandler')
const tag = "GradeScalesControllers"
const schema = {
    gradeScalesSchema: {
        title: "List Grade Scales",
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
                        grades: {
                            type: "array",
                            items: {
                                properties: {
                                    id: {
                                        type: "integer"
                                    },
                                    name: {
                                        type: "string"
                                    },
                                    min: {
                                        type: "integer"
                                    },
                                    max: {
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
    updateGradeScaleSchema: {
        title: "Update Grade Scale",
        type: "array",
        items: {
            properties: {
                id: {
                    type: "integer"
                },
                name: {
                    type: "string"
                },
                min: {
                    type: "integer"
                },
                max: {
                    type: "integer"
                }
            }
        }
    }
}

const paths = {
    "/gradescales": {
        get: {
            tags: [tag],
            parameters: [
                {
                    name: 'level_id',
                    in: 'query',
                    schema: {
                        type: 'integer'
                    },
                    required: false
                }
            ],
            responses: {
                200: {
                    description: "List All Grade Scales",
                    content: {
                        "application/json": {
                            schema: util1.getSchemaResponse("gradeScalesSchema", "gradeScalesSchema", "object")
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
                        schema: util1.getSchemaRequest("updateGradeScaleSchema")
                    }
                }
            },
            responses: {
                200: {
                    description: "Update Grade Scale",
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
}
exports.default = {schema, paths}