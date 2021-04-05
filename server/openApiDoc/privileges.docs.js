const util1 = require('../utils/apiBuildHandler')
const tag = "PrivilegesController"
const schema = {
    privilegesSchema : {
        title: "List Privileges",
        type: "object",
        properties: {
            privileges: {
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

const paths = {
    "/privileges": {
        get: {
            tags : [tag],
            responses: {
                200: {
                    description : "List All Privileges",
                    content: {
                        "application/json": {
                            schema: util1.getSchemaResponse("privilegesSchema","privilegesSchema","object")
                        }
                    }
                }
            }
        }
    }
}
exports.default = {schema,paths}