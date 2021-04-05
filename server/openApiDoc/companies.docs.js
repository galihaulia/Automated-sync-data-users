

const util1 = require('../utils/apiBuildHandler')
const tag = "CompaniesController"
const schema = {
    companiesSchema : {
        title: "List Companies",
        type: "object",
        properties: {
            companies: {
                type: "array",
                items: {
                    properties: {
                        id: {
                            type: "integer"
                        },
                        name: {
                            type: "string"
                        },
                        idCompany: {
                            type: "string"
                        },
                        companyCode: {
                            type: "string"
                        },
                        address: {
                            type: "string"
                        },
                        phone: {
                            type: "string"
                        },
                        logo: {
                            type: "string"
                        },
                        logogram: {
                            type: "string"
                        },
                        isActive: {
                            type : "boolean"
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
                        departments: {
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
                                        departmentCode: {
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
                        },
                        sumOfEmployee: {
                            type: "integer"
                        }
                    }
                }
            }
        }
    },
    companySchema: {
        title: "Company Detail",
        properties: {
            id: {
                type: "integer"
            },
            name: {
                type: "string"
            },
            idCompany: {
                type: "string"
            },
            companyCode: {
                type: "string"
            },
            address: {
                type: "string"
            },
            phone: {
                type: "string"
            },
            logo: {
                type: "string"
            },
            logogram: {
                type: "string"
            },
            isActive: {
                type : "boolean"
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
            departments: {
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
                            departmentCode: {
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
    companyCreation:{
        title: "CompanyCreation",
        properties: {
            name: {
                type: "string"
            },
            id_company: {
                type: "string"
            },
            company_code: {
                type: "string"
            },
            address: {
                type: "string"
            },
            phone: {
                type: "string"
            },
            logo: {
                type: "string"
            },
            logogram: {
                type: "string"
            }
        }
    },
    companyModification:{
        title: "CompanyModification",
        properties: {
            id: {
                type: "integer"
            },
            name: {
                type: "string"
            },
            id_company: {
                type: "string"
            },
            company_code: {
                type: "string"
            },
            address: {
                type: "string"
            },
            phone: {
                type: "string"
            },
            logo: {
                type: "string"
            },
            logogram: {
                type: "string"
            },
            is_active: {
                type: "boolean"
            }
        }
    },
    companyDeletion: {
        title: "CompanyDeletion",
        properties: {
            id: {
                type: "integer"
            }
        }
    },
    companyActivation: {
        title: "CompanyActivation",
        properties: {
            id: {
                type: "integer"
            },
            is_active: {
                type: "boolean"
            }
        }
    }
}
const paths = {
    "/companies": {
        get: {
            tags : [tag],
            responses: {
                200: {
                    description : "List All Companies",
                    content: {
                        "application/json": {
                            schema: util1.getSchemaResponse("companiesSchema","companiesSchema","object")
                        }
                    }
                }
            }
        }
    },
    "/company": {
        get: {
            tags:[tag],
            parameters: [
                {
                    name: 'company_id',
                    in: 'query',
                    schema: {
                      type: 'integer'
                    },
                    required: true
                  }
            ],
            responses: {
                200: {
                    description : "Company Detail",
                    content: {
                        "application/json": {
                            schema: util1.getSchemaResponse("companySchema","companySchema","object")
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
                        schema: util1.getSchemaRequest("companyCreation")
                    }
                }
            },
            responses: {
                200 : {
                    description: "Company Creation",
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
                        schema: util1.getSchemaRequest("companyModification")
                    }
                }
            },
            responses: {
                200 : {
                    description: "Company Modification",
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
                        schema: util1.getSchemaRequest("companyDeletion")
                    }
                }
            },
            responses: {
                200 : {
                    description: "Company Deletion",
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
    "/company/activate": {
        put: {
            tags: [tag],
            requestBody: {
                content: {
                    "application/json":{
                        schema: util1.getSchemaRequest("companyActivation")
                    }
                }
            },
            responses: {
                200 : {
                    description: "Company Activation",
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
    "/company/image" : {
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
                    description : "Upload company image",
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
                    description : "Delete company image",
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