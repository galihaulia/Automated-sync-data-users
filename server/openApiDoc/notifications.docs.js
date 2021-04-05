const util = require('../utils/apiBuildHandler');
const moment = require('moment');
const tag = "NotificationsController"
const schema = {
    notificationsSchema: {
        title: "List Notifications",
        type: "object",
        properties: {
            sumOfNotification: {
                type: "integer"
            },
            notifications: {
                type: "array",
                items: {
                    properties: {
                        id: {
                            type: "integer"
                        },
                        type: {
                            type: "string"
                        },
                        title: {
                            type: "string"
                        },
                        description: {
                            type: "string"
                        },
                        isRead: {
                            type: "boolean"
                        },
                        link: {
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
    }
}

const paths = {
    "/notifications": {
        get: {
            tags: [tag],
            parameters: [
                {
                    name: 'privilege',
                    in: 'query',
                    description: 'Manager, Mentor, Mentee',
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
                    description: "List All Notifications",
                    content: {
                        "application/json": {
                            schema: util.getSchemaResponse("notificationsSchema", "notificationsSchema", "object")
                        }
                    }
                }
            }
        }
    },
    "/notification/{id}": {
        put: {
            tags: [tag],
            parameters: [
                {
                  name: 'id',
                  in: 'path',
                  required: true,
                  schema: {
                    type: "number",
                    required: true,
                  }
                }
            ],
            responses: {
                200 : {
                    description: "Update Notification",
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
    }
}

exports.default = {schema, paths}
