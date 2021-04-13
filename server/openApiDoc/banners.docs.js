const util1 = require('../utils/apiBuildHandler');
const moment = require('moment');
const tag = "BannersController";
const schema = {
    bannersSchema : {
        title: "List Banners",
        type: "object",
        properties: {
            sumOfBanner: {
                type: "integer"
            },
            banners: {
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
                            type: "text"
                        },
                        cover: {
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
                        companies: {
                            type: "array",
                            items: {
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
        }
    },
    bannerSchema: {
        title: "Banner Detail",
        properties: {
            id: {
                type: "integer"
            },
            title: {
                type: "string"
            },
            description: {
                type: "text"
            },
            cover: {
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
            companies: {
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
    },
    bannerCreation:{
        title: "BannerCreation",
        properties: {
            title: {
                type: "string"
            },
            description: {
                type: "string"
            },
            cover: {
                type: "string"
            },
            file: {
                type: "string"
            },
            is_embed: {
                type: "boolean"
            },
            url: {
                type: "string"
            },
            companies: {
                type: "array",
                items: {
                    properties: {
                        id: {
                            type: "integer"
                        }
                    }
                }
            }
        }
    },
    bannerModification:{
        title: "BannerModification",
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
            file: {
                type: "string"
            },
            is_embed: {
                type: "boolean"
            },
            url: {
                type: "string"
            },
            is_active: {
                type: "boolean"
            },
            companies: {
                type: "array",
                items: {
                    properties: {
                        id: {
                            type: "integer"
                        }
                    }
                }
            }
        }
    },
    bannerDeletion: {
        title: "BannerDeletion",
        properties: {
            id: {
                type: "integer"
            }
        }
    }
}
const paths = {
    "/banners": {
        get: {
            tags : [tag],
            parameters: [
                {
                    name: 'company_id',
                    in: 'query',
                    description: 'Single or multiple separated by comma (,)',
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
                    description : "List All Banners",
                    content: {
                        "application/json": {
                            schema: util1.getSchemaResponse("bannersSchema","bannersSchema","object")
                        }
                    }
                }
            }
        }
    },
    "/banner": {
        get: {
            tags:[tag],
            parameters: [
                {
                    name: 'banner_id',
                    in: 'query',
                    schema: {
                      type: 'integer'
                    },
                    required: true
                  }
            ],
            responses: {
                200: {
                    description : "Banner Detail",
                    content: {
                        "application/json": {
                            schema: util1.getSchemaResponse("bannerSchema","bannerSchema","object")
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
                        schema: util1.getSchemaRequest("bannerCreation")
                    }
                }
            },
            responses: {
                200 : {
                    description: "Banner Creation",
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
                        schema: util1.getSchemaRequest("bannerModification")
                    }
                }
            },
            responses: {
                200 : {
                    description: "Banner Modification",
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
                        schema: util1.getSchemaRequest("bannerDeletion")
                    }
                }
            },
            responses: {
                200 : {
                    description: "Banner Deletion",
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
    "/banner/file" : {
        post : {
            tags : [tag],
            requestBody: {
                content:{
                    "multipart/form-data":{
                        type: "object",
                        schema: {
                            properties: {
                                file: {
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
                    description : "Upload banner file",
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
                    description : "Delete banner file",
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