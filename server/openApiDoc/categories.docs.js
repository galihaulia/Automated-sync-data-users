const util = require('../utils/apiBuildHandler');
const moment = require('moment');
const tag = "CategoriesController";
const sch = ['indexCategorySchema', 'indexGroupSchema', 'createCategorySchema', 'updateCategorySchema', 'deleteCategorySchema'];

const schema = {
    indexCategorySchema: {
        title: "Index Category",
        type: "object",
        properties: {
            sumOfCategory: {
                type: "integer"
            },
            categories: {
                type: "array",
                items: {
                    properties: {
                        id: {
                            type: "integer"
                        },
                        companiesId: {
                            type: "integer"
                        },
                        name: {
                            type: "string"
                        },
                        color: {
                            type: "string"
                        },
                        type: {
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
                        group: {
                            type: "object",
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
    },
    indexGroupSchema: {
        title: "Index Group",
        type: "object",
        properties: {
            groups: {
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
                        }
                    }
                }                
            }
        }
    },
    createCategorySchema: {
        title: "Create Category",
        properties: {
            company_id: {
                type: "integer"
            },
            name: {
                type: "string"
            },
            color: {
                type: "string"
            },
            type: {
                type: "string"
            },
            group_id: {
                type: "integer"
            }
        }
    },
    updateCategorySchema: {
        title: "Update Category",
        properties: {
            id: {
                type: "integer"
            },
            name: {
                type: "string"
            },
            color: {
                type: "string"
            },
            type: {
                type: "string"
            },
            group_id: {
                type: "integer"
            }
        }
    },
    deleteCategorySchema: {
        title: "Delete Category",
        properties: {
            id: {
                type: "integer"
            }
        }
    }
}

const paths = {
    "/categories" : {
        get: {
            tags: [tag],
            parameters: [
                {
                    name: 'company_id',
                    in: 'query',
                    schema: {
                        type: 'integer'
                    },
                    required: true
                },
                {
                    name: 'type',
                    in: 'query',
                    description: 'Course, Event',
                    schema: {
                        type: 'string'
                    },
                    required: true
                },
                {
                    name: 'group_id',
                    in: 'query',
                    schema: {
                        type: 'integer'
                    },
                    required: false
                },
                {
                    name: 'filter_by',
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
                    description: "List All Category",
                    content: {
                        "application/json": {
                            schema: util.getSchemaResponse(sch[0], sch[0], "object")
                        }
                    }
                }
            }
        }
    },
    "/category/groups" : {
        get: {
            tags: [tag],
            responses: {
                200: {
                    description: "List All Groups of Category",
                    content: {
                        "application/json": {
                            schema: util.getSchemaResponse(sch[1], sch[1], "object")
                        }
                    }
                }
            }
        }
    },
    "/category": {
        post: {
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
                    description: "Create Category",
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
                        schema: util.getSchemaRequest(sch[3])
                    }
                }
            },
            responses: {
                200: {
                    description: "Update Category",
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
                        schema: util.getSchemaRequest(sch[4])
                    }
                }
            },
            responses: {
                200: {
                    description: "Delete Category",
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