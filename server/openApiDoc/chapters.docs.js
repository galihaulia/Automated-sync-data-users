const util = require('../utils/apiBuildHandler');
const tag = "ChaptersController";
const url = "/chapters";
const sch = ['indexChapterSchema', 'createChapterSchema', 'updateChapterSchema', 'deleteChapterSchema'];
const schema = {
    indexChapterSchema: {
        title: "Index Chapters",
        type: "object",
        properties: {
            chapters: {
                type: "array",
                items: {
                    properties: {
                        id: {
                            type: "integer"
                        },
                        title: {
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
                        materials: {
                            type: "array",
                            items: {
                                properties: {
                                    id: {
                                        type: "integer"
                                    },
                                    name: {
                                        type: "string"
                                    },
                                    type: {
                                        type: "integer"
                                    },
                                    chaptersId: {
                                        type: "integer"
                                    },
                                    description: {
                                        type: "string"
                                    },
                                    file: {
                                        type: "string"
                                    },
                                    isEmbed: {
                                        type: "boolean"
                                    },
                                    url: {
                                        type: "string"
                                    },
                                    deletedAt: {
                                        type: "string",
                                        format:"date-time"
                                    },
                                }
                            }
                        }
                    }
                }
            }
        }
    },
    createChapterSchema: {
        title: "Create Chapter",
        properties: {
            course_id: {
                type: "integer"
            },
            title: {
                type: "string"
            }
        }
    },
    updateChapterSchema: {
        title: "Update Chapter",
        properties: {
            id: {
                type: "integer"
            },
            title: {
                type: "string"
            }
        }
    },
    deleteChapterSchema: {
        title: "Delete Chapter",
        properties: {
            id: {
                type: "integer"
            }
        }
    }
}

const paths = {
    [url]: {
        get: {
            tags: [tag],
            parameters: [
                {
                    name: 'course_id',
                    in: 'query',
                    schema: {
                        type: 'integer'
                    },
                    required: true
                }
            ],
            responses: {
                200: {
                    description: "List All Chapter",
                    content: {
                        "application/json": {
                            schema: util.getSchemaResponse(sch[0], sch[0], "object")
                        }
                    }
                }
            }
        }
    },
    "/chapter": {
        post: {
            tags: [tag],
            requestBody: {
                content: {
                    "application/json": {
                        schema: util.getSchemaRequest(sch[1])
                    }
                }
            },
            responses: {
                200: {
                    description: "Create Chapter",
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
                        schema: util.getSchemaRequest(sch[2])
                    }
                }
            },
            responses: {
                200: {
                    description: "Update Chapter",
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
                        schema: util.getSchemaRequest(sch[3])
                    }
                }
            },
            responses: {
                200: {
                    description: "Delete Chapter",
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

exports.default = {schema, paths};