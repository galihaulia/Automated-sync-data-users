

const util1 = require('../utils/apiBuildHandler');
const moment = require('moment');
const tag = "PathsController";
const schema = {
    pathsSchema : {
        title: "List Learning Paths",
        type: "object",
        properties: {
            sumOfPath: {
                type: "integer"
            },
            paths: {
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
                            type: "string"
                        },
                        jobTitle: {
                            type: "string"
                        },
                        level: {
                            type: "string"
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
                        },
                        sumOfCourse: {
                            type: "integer"
                        },
                        sumOfSyllabus: {
                            type: "integer"
                        },
                        progress: {
                            type: "number",
                            format: "float"
                        }
                    }
                }
            }
        }
    },
    pathSchema : {
        title: "Detail Learning Path",
        type: "object",
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
                        cover: {
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
            },
            progress: {
                type: "number",
                format: "float"
            }
        }
    }
}
const paths = {
    "/learning-paths": {
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
                    name: 'status_code',
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
                    description : "List All Learning Paths",
                    content: {
                        "application/json": {
                            schema: util1.getSchemaResponse("pathsSchema","pathsSchema","object")
                        }
                    }
                }
            }
        }
    },
    "/learning-path": {
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
                    description : "Detail Learning Path",
                    content: {
                        "application/json": {
                            schema: util1.getSchemaResponse("pathSchema","pathSchema","object")
                        }
                    }
                }
            }
        }
    }
}
exports.default = {schema,paths}