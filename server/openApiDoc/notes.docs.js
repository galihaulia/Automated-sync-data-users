const util = require('../utils/apiBuildHandler');
const moment = require('moment');
const tag = "NotesController"
const schema = {
    notesSchema: {
        title: "List Notes",
        type: "object",
        properties: {
            sumOfNote: {
                type: "integer"
            },
            notes: {
                type: "array",
                items: {
                    properties: {
                        id: {
                            type: "integer"
                        },
                        course: {
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
                                }
                            }
                        },
                        chapter: {
                            type: "object",
                            properties: {
                                id: {
                                    type: "integer"
                                },
                                title: {
                                    type: "string"
                                }
                            }
                        },
                        material: {
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
                        description: {
                            type: "string"
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
    noteSchema: {
        title: "detil Note",
        type: "object",
        properties: {
            id: {
                type: "integer"
            },
            course: {
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
                    }
                }
            },
            chapter: {
                type: "object",
                properties: {
                    id: {
                        type: "integer"
                    },
                    title: {
                        type: "string"
                    }
                }
            },
            material: {
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
            description: {
                type: "string"
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
    },
    noteCoursesSchema: {
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
                        sumOfNote: {
                            type: "integer"
                        }
                    }
                }
            }
        }
    },
    createNotesSchema: {
        title: "Create Note",
        type: "object",
        properties: {
            course_id: {
                type: "integer"
            },
            chapter_id: {
                type: "integer"
            },
            material_id: {
                type: "integer"
            },
            description: {
                type: "string"
            }
        }
    },
    updateNotesSchema: {
        title: "Update Note",
        type: "object",
        properties: {
            id: {
                type: "integer"
            },
            description: {
                type: "string"
            }
        }
    },
    deleteNotesSchema: {
        title: "Delete Note",
        type: "object",
        properties: {
            id: {
                type: "integer"
            }
        }
    },
}

const paths = {
    "/notes": {
        get: {
            tags: [tag],
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
                    name: 'material_id',
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
                    description: "List All Notes",
                    content: {
                        "application/json": {
                            schema: util.getSchemaResponse("notesSchema", "notesSchema", "object")
                        }
                    }
                }
            }
        }
    },
    "/note/courses": {
        get: {
            tags: [tag],
            responses: {
                200: {
                    description: "List Courses",
                    content: {
                        "application/json": {
                            schema: util.getSchemaResponse("noteCoursesSchema", "noteCoursesSchema", "object")
                        }
                    }
                }
            }
        }
    },
    "/note": {
        get: {
            tags: [tag],
            parameters: [
                {
                    name: 'id',
                    in: 'query',
                    schema: {
                        type: 'integer'
                    },
                    required: true
                }
            ],
            responses: {
                200: {
                    description: "List Note",
                    content: {
                        "application/json": {
                            schema: util.getSchemaResponse("noteSchema", "noteSchema", "object")
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
                        schema: util.getSchemaRequest("createNotesSchema")
                    }
                }
            },
            responses: {
                200: {
                    description: "Create Note",
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
                        schema: util.getSchemaRequest("updateNotesSchema")
                    }
                }
            },
            responses: {
                200: {
                    description: "Update Note",
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
                        schema: util.getSchemaRequest("deleteNotesSchema")
                    }
                }
            },
            responses: {
                200: {
                    description: "Delete Note",
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
