const util = require('../utils/apiBuildHandler')
const tag = "CertificateController"
const schema = {
    certificatesSchema: {
        title: "List Certificates",
        type: "object",
        properties: {
            certificates: {
                type: "array",
                items: {
                    properties: {
                        id: {
                            type: "integer"
                        },
                        name: {
                            type: "string"
                        },
                        file: {
                            type: "string"
                        },
                        logo: {
                            type: "string"
                        },
                        templatesId: {
                            type: "integer"
                        }
                    }
                }
            }
        }
    },
    certificateSchema: {
        title: "Detail Certificate",
        properties:{
            id: {
                type: "integer"
            },
            name: {
                type: "string"
            },
            file: {
                type: "string"
            },
            logo: {
                type: "string"
            },
            templatesId: {
                type: "integer"
            }
        }
    },
    createCertificateSchema: {
        title: "Create Certificate",
        properties:{
            name: {
                type: "string"
            },
            file: {
                type: "string"
            },
            logo: {
                type: "string"
            },
            templates_id: {
                type: "integer"
            }
        }
    },
    updateCertificateSchema: {
        title: "Update Certificate",
        properties:{
            name: {
                type: "string"
            },
            file: {
                type: "string"
            },
            logo: {
                type: "string"
            },
            templates_id: {
                type: "integer"
            }
        }
    },
}
const paths = {
    "/certificates": {
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
                    description: "List All Certificate by TemplatesId",
                    content: {
                        "application/json": {
                            schema: util.getSchemaResponse("certificatesSchema", "certificatesSchema", "object")
                        }
                    }
                }
            }
        }
    },
    "/certificate": {
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
                    description: "Detail Certificate",
                    content: {
                        "application/json": {
                            schema: util.getSchemaResponse("certificateSchema", "certificateSchema", "object")
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
                        schema: util.getSchemaRequest("createCertificateSchema")
                    }
                }
            },
            responses: {
                200: {
                    description: "Create Certificate",
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
            requestBody: {
                content: {
                    "application/json": {
                        schema: util.getSchemaRequest("updateCertificateSchema")
                    }
                }
            },
            responses: {
                200: {
                    description: "Update Certificate",
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
                    description: "Delete Certificate",
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
    },
    "/certificate/file": {
        post: {
            tags: [tag],
            requestBody: {
                content: {
                    "multipart/form-data": {
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
            responses: {
                200: {
                    description: "Upload Certificate File",
                    content: {
                        "application/json": {
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
        delete: {
            tags: [tag],
            requestBody: {
                content: {
                    "application/json": {
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
            responses: {
                200: {
                    description: "Delete Certificate File",
                    content: {
                        "application/json": {
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
    "/certificate/image": {
        post: {
            tags: [tag],
            requestBody: {
                content: {
                    "multipart/form-data": {
                        type: "object",
                        schema: {
                            properties: {
                                logo: {
                                    type: "string",
                                    format: "binary"
                                }
                            },
                        },
                    }
                }
            },
            responses: {
                200: {
                    description: "Upload Certificate Logo",
                    content: {
                        "application/json": {
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
        delete: {
            tags: [tag],
            requestBody: {
                content: {
                    "application/json": {
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
            responses: {
                200: {
                    description: "Delete Certificate Logo",
                    content: {
                        "application/json": {
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
exports.default = {schema, paths}