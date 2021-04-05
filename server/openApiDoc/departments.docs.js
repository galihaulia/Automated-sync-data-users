

const util1 = require('../utils/apiBuildHandler')
const moment = require('moment')
const tag = "DepartmentsController"
const schema = {
    departmentsSchema : {
        title: "List Departments",
        type: "object",
        properties: {
            sumOfDepartment: {
                type: "integer"
            },
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
                        departmentCode: {
                            type: "string"
                        },
                        companiesId: {
                            type: "integer"
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
                        jobTitles: {
                            type: "array",
                            items: {
                                properties: {
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
                            }
                        }
                    }
                }
            }
        }
    },
    departmentSchema: {
        title: "Department Detail",
        type: "object",
        properties: {
            id: {
                type: "integer"
            },
            name: {
                type: "string"
            },
            departmentCode: {
                type: "string"
            },
            companiesId: {
                type: "integer"
            },
            isActive: {
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
            jobTitles: {
                type: "array",
                items: {
                    properties: {
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
                }
            }
        }
    },
    departmentsCreation:{
        title: "DepartmentsCreation",
        type: "array",
        items: {
            properties: {
                name: {
                    type: "string"
                },
                department_code: {
                    type: "string"
                },
                company_id: {
                    type: "integer"
                }
            }
        }
    },
    departmentCreation:{
        title: "DepartmentCreation",
        properties: {
            name: {
                type: "string"
            },
            department_code: {
                type: "string"
            },
            company_id: {
                type: "integer"
            }
        }
    },
    departmentModification:{
        title: "DepartmentModification",
        properties: {
            id: {
                type: "integer"
            },
            name: {
                type: "string"
            },
            department_code: {
                type: "string"
            },
            company_id: {
                type: "integer"
            },
            is_active: {
                type: "boolean"
            }
        }
    },
    departmentDeletion: {
        title: "DepartmentDeletion",
        properties: {
            id: {
                type: "integer"
            }
        }
    },
    departmentDisposition: {
        title: "DepartmentDisposition",
        properties: {
            department: {
                type: "object",
                properties: {
                    id: {
                        type: "integer"
                    } 
                }
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
const paths = {
    "/departments": {
        get: {
            tags : [tag],
            parameters: [
                {
                    name: 'company_id',
                    in: 'query',
                    schema: {
                      type: 'string'
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
                },
                {
                    name: 'export_to',
                    in: 'query',
                    description: 'excel',
                    schema: {
                      type: 'string'
                    },
                    required: false
                }
            ],
            responses: {
                200: {
                    description : "List All Departments",
                    content: {
                        "application/json": {
                            schema: util1.getSchemaResponse("departmentsSchema","departmentsSchema","object")
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
                        schema: util1.getSchemaRequest("departmentsCreation")
                    }
                }
            },
            responses: {
                200 : {
                    description: "Departments Creation",
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
    "/department": {
        get: {
            tags:[tag],
            parameters: [
                {
                    name: 'department_id',
                    in: 'query',
                    schema: {
                      type: 'integer'
                    },
                    required: true
                  }
            ],
            responses: {
                200: {
                    description : "Department Detail",
                    content: {
                        "application/json": {
                            schema: util1.getSchemaResponse("departmentSchema","departmentSchema","object")
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
                        schema: util1.getSchemaRequest("departmentCreation")
                    }
                }
            },
            responses: {
                200 : {
                    description: "Department Creation",
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
                        schema: util1.getSchemaRequest("departmentModification")
                    }
                }
            },
            responses: {
                200 : {
                    description: "Department Modification",
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
                        schema: util1.getSchemaRequest("departmentDeletion")
                    }
                }
            },
            responses: {
                200 : {
                    description: "Department Deletion",
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
    // "/department/assign": {
    //     post: {
    //         tags: [tag],
    //         requestBody: {
    //             content: {
    //                 "application/json":{
    //                     schema: util1.getSchemaRequest("departmentDisposition")
    //                 }
    //             }
    //         },
    //         responses: {
    //             200 : {
    //                 description: "Department Disposition",
    //                 content: {
    //                     "application/json":{
    //                         schema: {
    //                             properties: {
    //                                 message: {
    //                                     type: "string"
    //                                 }
    //                             }
    //                         }
    //                     }
    //                 }
    //             }
    //         }
    //     }
    // }
}
exports.default = {schema,paths}