const util1 = require('../utils/apiBuildHandler')
const tag = "StatusesController"
const schema = {
    statusesSchema : {
        title: "List Statuses",
        type: "array",
        items: {
            properties: {
                id: {
                    type: "integer"
                },
                statusCode: {
                    type: "string"
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

const paths = {
    "/statuses": {
        get: {
            tags : [tag],
            responses: {
                200: {
                    description : "List All Statuses",
                    content: {
                        "application/json": {
                            schema: util1.getSchemaResponse("statusesSchema","statusesSchema","object")
                        }
                    }
                }
            }
        }
    }
}
exports.default = {schema,paths}