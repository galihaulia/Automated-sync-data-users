

const util1 = require('../utils/apiBuildHandler')
const moment = require('moment')
const tag = "UserController"
const schema = {
    // Mantee : {
    //     title : "List All Mantee",
    //     properties : {
    //         id : {
    //             type : "integer"
    //         },
    //         email : {
    //             type : "string"
    //         },
    //         startDate : {
    //             type : "datetime"
    //         },
    //         endDate : {
    //             type : "datetime"
    //         },
    //         statuesId : {
    //             type : "integer"
    //         },
    //         privilegeId : [{
    //             id : {
    //                 type : "integer"
    //             },
    //             label : {
    //                 type : "string"
    //             }
    //         }],
    //         deletedAt : {
    //             type : "datetime"
    //         },
    //         idGmail : {
    //             type : "string"
    //         },
    //         createdAt : {
    //             type : "datetime"
    //         },
    //         updatedAt : {
    //             type : "datetime"
    //         },
    //         profile : {
    //             id : {type : "integer"},
    //             usersId : {type : "integer"},
    //             fullName : {type : "string"},
    //             born : {type : "date"},
    //             phoneNumber : {type : "string"},
    //             gender : {type : "string"},
    //             email : {type : "string"},
    //             departement : {type : "string"},
    //             job : {type : "string"},
    //             foto : {type : "string"},
    //             cover : {type : "string"},
    //             deletedAt : {type : "datetime"},
    //             createdAt : {type : "datetime"},
    //             updatedAt : {type : "datetime"}
    //         },
    //         company : {
    //              id : {type : "integer"},
    //              usersId : {type : "integer"},
    //              email : {type : "string"},
    //              name : {type : "string"},
    //              address : {type : "string"},
    //              phone : {type : "string"},
    //              jobTitle : {type : "string"},
    //              deletedAt : {type : "datetime"},
    //              createdAt : {type : "datetime"},
    //              updatedAt : {type : "datetime"}
    //         }
    //     },
    // },
    usersSchema : {
        type: "object",
        properties: {
            sumOfUser: {
                type: "integer"
            },
            users: {
                type: "array",
                items: {
                    properties : {
                        id : { type : "integer" },
                        email : { type : "string" },
                        idNumber : { type : "string" },
                        startDate : { type : "datetime" },
                        endDate : { type : "datetime" },
                        statuesId : { type : "integer" },
                        isActive : { type : "boolean" },
                        idToken : { type : "string" },
                        createdAt : {type : "datetime"},
                        updatedAt : {type : "datetime"},
                        deletedAt : { type : "datetime"},
                        profile : {
                            type : "object",
                            properties : {
                                id : {type : "integer"},
                                usersId : {type : "integer"},
                                fullName : {type : "string"},
                                born : {type : "datetime"},
                                phoneNumber : {type : "string"},
                                gender : {type : "string"},
                                email : {type : "string"},
                                photo : {type : "string"},
                                cover : {type : "string"},
                                createdAt  : {type : "datetime"},
                                updatedAt : {type : "datetime"}
                            }
                        },
                        company : {
                            type : "object",
                            properties : {
                                id : {type : "integer"},
                                name : {type : "string"},
                                idCompany : {type : "string"},
                                companyCode : {type : "string"},
                                address : {type : "string"},
                                phone : {type : "string"},
                                logo : {type : "string"},
                                logogram : {type : "string"},
                                isActive:  {type : "boolean"},
                                createdAt : {type : "datetime"},
                                updatedAt : {type  : "datetime"},
                                deletedAt : {type : "datetime"}
                            }
                        },
                        department : {
                            type : "object",
                            properties : {
                                id : {type : "integer"},
                                name : {type : "string"},
                                departmentCode : {type : "string"},
                                companiesId : {type : "integer"},
                                isActive : {type : "boolean"},
                                createdAt : {type : "datetime"},
                                updatedAt : {type  : "datetime"},
                                deletedAt : {type  : "datetime"}
                            }
                        },
                        jobTitle : {
                            type : "object",
                            properties : {
                                id : {type : "integer"},
                                name : {type : "string"},
                                isActive : {type : "boolean"},
                                createdAt : {type : "datetime"},
                                updatedAt : {type  : "datetime"},
                                deletedAt : {type  : "datetime"}
                            }
                        },
                        level : {
                            type : "object",
                            properties : {
                                id : {type : "integer"},
                                name : {type : "string"},
                                isActive : {type : "boolean"},
                                createdAt : {type : "datetime"},
                                updatedAt : {type  : "datetime"},
                                deletedAt : {type  : "datetime"}
                            }
                        },
                        privileges : {
                            type : "array",
                            items: {
                                type: "object",
                                properties : {
                                    id : {type : "integer"},
                                    label : {type : "string"}
                                }
                            }
                        }
                    }
                }
            }
        }
    },    
    userSchema : {
        type: "object",
        properties : {
            id : { type : "integer" },
            email : { type : "string" },
            idNumber : { type : "string" },
            startDate : { type : "datetime" },
            endDate : { type : "datetime" },
            statuesId : { type : "integer" },
            isActive : { type : "boolean" },
            idToken : { type : "string" },
            createdAt : {type : "datetime"},
            updatedAt : {type : "datetime"},
            deletedAt : { type : "datetime"},
            profile : {
                type : "object",
                properties : {
                    id : {type : "integer"},
                    usersId : {type : "integer"},
                    fullName : {type : "string"},
                    born : {type : "datetime"},
                    phoneNumber : {type : "string"},
                    gender : {type : "string"},
                    email : {type : "string"},
                    photo : {type : "string"},
                    cover : {type : "string"},
                    createdAt  : {type : "datetime"},
                    updatedAt : {type : "datetime"}
                }
            },
            company : {
                type : "object",
                properties : {
                    id : {type : "integer"},
                    name : {type : "string"},
                    idCompany : {type : "string"},
                    companyCode : {type : "string"},
                    address : {type : "string"},
                    phone : {type : "string"},
                    logo : {type : "string"},
                    logogram : {type : "string"},
                    isActive:  {type : "boolean"},
                    createdAt : {type : "datetime"},
                    updatedAt : {type  : "datetime"},
                    deletedAt : {type : "datetime"}
                }
            },
            department : {
                type : "object",
                properties : {
                    id : {type : "integer"},
                    name : {type : "string"},
                    departmentCode : {type : "string"},
                    companiesId : {type : "integer"},
                    isActive : {type : "boolean"},
                    createdAt : {type : "datetime"},
                    updatedAt : {type  : "datetime"},
                    deletedAt : {type  : "datetime"}
                }
            },
            jobTitle : {
                type : "object",
                properties : {
                    id : {type : "integer"},
                    name : {type : "string"},
                    isActive : {type : "boolean"},
                    createdAt : {type : "datetime"},
                    updatedAt : {type  : "datetime"},
                    deletedAt : {type  : "datetime"}
                }
            },
            level : {
                type : "object",
                properties : {
                    id : {type : "integer"},
                    name : {type : "string"},
                    isActive : {type : "boolean"},
                    createdAt : {type : "datetime"},
                    updatedAt : {type  : "datetime"},
                    deletedAt : {type  : "datetime"}
                }
            },
            privileges : {
                type : "array",
                items: {
                    type: "object",
                    properties : {
                        id : {type : "integer"},
                        label : {type : "string"}
                    }
                }
            }
        }
    },
    userCreation:{
        title: "UserCreation",
        properties: {
            full_name: {
                type: "string"
            },
            id_number: {
                type: "string"
            },
            email: {
                type: "string"
            },
            department_id: {
                type: "integer"
            },
            job_title_id: {
                type: "integer"
            },
            level_id: {
                type: "integer"
            },
            privilege_id: {
                type: "array",
                items: {
                    type: "integer"
                }
            }
        }
    },
    usersCreation:{
        title: "UsersCreation",
        type: "array",
        items: {
            properties: {
                full_name: {
                    type: "string"
                },
                id_number: {
                    type: "string"
                },
                company_id: {
                    type: "integer"
                },
                email: {
                    type: "string"
                },
                born_date: {
                    type: "string",
                    format: "date"
                },
                phone_number: {
                    type: "string"
                },
                gender: {
                    type: "string"
                },
                department_id: {
                    type: "integer"
                },
                job_title_id: {
                    type: "integer"
                },
                level_id: {
                    type: "integer"
                }
            }
        }
    },
    userModification:{
        title: "UserModification",
        properties: {
            id: {
                type: "integer"
            },
            full_name: {
                type: "string"
            },
            id_number: {
                type: "string"
            },
            born_date: {
                type: "string",
                format: "date"
            },
            phone_number: {
                type: "string"
            },
            gender: {
                type: "string"
            },
            photo: {
                type: "string"
            },
            cover: {
                type: "string"
            },
            is_active: {
                type: "boolean"
            },
            department_id: {
                type: "integer"
            },
            job_title_id: {
                type: "integer"
            },
            level_id: {
                type: "integer"
            },
            privilege_id: {
                type: "array",
                items: {
                    type: "integer"
                }
            }
        }
    },
    userDeletion:{
        title: "UserDeletion",
        properties: {
            id: {
                type: "integer"
            }
        }
    },
    verifiersSchema:{
        type: "object",
        properties: {
            verifiers: {
                type: "array",
                items: {
                    properties: {
                        id: {
                            type: "integer"
                        },
                        fullName: {
                            type: "string"
                        },
                        photo: {
                            type: "string"
                        }
                    }
                }
            }
        }
    }
}
const paths = {
    "/users": {
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
                    name: 'department_id',
                    in: 'query',
                    description: 'Single or multiple department id',
                    schema: {
                      type: 'string'
                    },
                    required: false
                },
                {
                    name: 'privilege_id',
                    in: 'query',
                    description: 'Single or multiple privilege id',
                    schema: {
                      type: 'string'
                    },
                    required: false
                },
                {
                    name: 'has_level',
                    in: 'query',
                    schema: {
                      type: 'boolean'
                    },
                    required: false
                },
                {
                    name: 'filter_by',
                    in: 'query',
                    description: 'fullName, idNumber',
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
                    description : "List All Users",
                    content: {
                        "application/json": {
                            schema: util1.getSchemaResponse("usersSchema","usersSchema","object")
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
                        schema: util1.getSchemaRequest("usersCreation")
                    }
                }
            },
            responses: {
                200 : {
                    description: "Users Creation",
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
    "/user": {
        get: {
            tags:[tag],
            parameters: [
                {
                    name: 'user_id',
                    in: 'query',
                    schema: {
                      type: 'integer'
                    },
                    required: false
                  }
            ],
            responses: {
                200: {
                    description : "List Mantee",
                    content: {
                        "application/json": {
                            schema: util1.getSchemaResponse("userSchema","userSchema","object")
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
                        schema: util1.getSchemaRequest("userCreation")
                    }
                }
            },
            responses: {
                200 : {
                    description: "User Creation",
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
                        schema: util1.getSchemaRequest("userModification")
                    }
                }
            },
            responses: {
                200 : {
                    description: "User Modification",
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
                        schema: util1.getSchemaRequest("userDeletion")
                    }
                }
            },
            responses: {
                200 : {
                    description: "User Deletion",
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
    "/profile/image" : {
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
                    description : "Upload profile image",
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
                    description : "Delete profile image",
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
    },
    "/user/verifiers": {
        get: {
            tags : [tag],
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
                    name: 'filter_by',
                    in: 'query',
                    description: 'fullName, idNumber',
                    schema: {
                      type: 'string'
                    },
                    required: false
                }
            ],
            responses: {
                200: {
                    description : "List All Verifiers",
                    content: {
                        "application/json": {
                            schema: util1.getSchemaResponse("verifiersSchema","verifiersSchema","object")
                        }
                    }
                }
            }
        }
    }
}
exports.default = {schema,paths}