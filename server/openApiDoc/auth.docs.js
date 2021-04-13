
const util1 = require('../utils/apiBuildHandler')
const tag = "AuthController";
const schema = {
    UserLogin: {
        title: "UserLogin",
        properties: {
            username: {
                type: "string",
            },
            password: {
                type: "string",
            },
            player_id: {
                type: "string"
            }
        },
        required: ["username", "password"],
    },
    UserToken: {
        title: "UserToken",
        properties: {
            token: {
                type: "string",
            },
        },
    },
    UserGmailLogin:{
        title: "UserGmailLogin",
        properties: {
            token_gmail: {
                type: "string"
            }
        }
    },
    UserRegister:{
        title: "UserRegister",
        properties: {
            full_name:{
                type: "string"
            },
            email :{
                type: "string"
            },
            company_name : {
                type: "string"
            },
            phone_number : {
                type: "string"
            },
            password : {
                type : "string"
            },
            id_token : {
                type: "string"
            },
            photo : {
                type: "string"
            }
        }
    },
    UserLogout: {
        title: "User Logout",
        properties: {
            token: {
                type: "string"
            }
        }
    },
    UserForgotPassword: {
        title: "User Forgot Password",
        properties: {
            email: {
                type: "string"
            }
        }
    },
    SendForgotPassword :{
        title: "Send Forgot Password",
        properties: {
            id :{ 
                type: "integer"
            },
            new_password: {
                type: "string"
            },
            verify_password: {
                type: "string"
            }
        }
    },
    ResendVerification: {
        title: "Resend User Verification",
        properties: {
            email : {
                type: "string"
            }
        }
    },
    ResetUserPassword: {
        title: "Reset User Password",
        properties: {
            user_id: {
                type: "integer"
            }
        }
    },
    RefreshToken: {
        title: "Refresh Token",
        properties: {
            old_token : {
                type : "string"
            }
        }
    },
    ChangePassword: {
        title: "Change Password",
        properties: {
            new_password : {
                type : "string"
            },
            old_password : {
                type : "string"
            }
        }
    },
    SyncPassword: {
        title: "Sync Password",
        properties: {
            username : {
                type : "string"
            },
            password : {
                type : "string"
            }
        }
    }
};

const paths = {
    "/login" : {
        post : {
            tags:[tag],
            requestBody: {
                content:{
                    "application/json":{
                        schema : util1.getSchemaRequest("UserLogin")
                    }
                }
            },
            responses:{
                200:{
                    description:"Token for Auth",
                    content : {
                        "application/json":{
                            schema: util1.getSchemaRequest("Token","UserToken","object")
                        }
                    }
                }
            }
        }
    },
    "/login/gmail": {
        post: {
            tags: [tag],
            requestBody: {
                content: {
                    "application/json":{
                        schema: util1.getSchemaRequest("UserGmailLogin")
                    }
                }
            },
            responses: {
                200: {
                    description:"Token for Auth",
                    content: {
                        "application/json": {
                            schema: util1.getSchemaRequest("Token", "UserToken", "object")
                        }
                    }
                }
            }
        }
    },
    "/register":{
        post: {
            tags: [tag],
            requestBody: {
                content: {
                    "application/json":{
                        schema: util1.getSchemaRequest("UserRegister")
                    }
                }
            },
            responses: {
                200 : {
                    description: "Register User",
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
    "/logout": {
        post: {
            tags : [tag],
            requestbody: {
                content: {
                    "application/json": {
                        schema: util1.getSchemaRequest("UserLogout")
                    }
                }
            },
            responses: {
                200 : {
                    description: "Logout User",
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
    "/forgot-password": {
        post: {
            tags : [tag],
            requestBody: {
                content: {
                    "application/json": {
                        schema: util1.getSchemaRequest("UserForgotPassword")
                    }
                }
            },
            responses: {
                200 : {
                    description: "User Forgot Password",
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
    "/verify-forgot-password": {
        get: {
            tags : [tag],
            parameters: [
                {
                    in: "query",
                    name: "token",
                    type: "string"
                }
            ],
            responses: {
                200 : {
                    description: "Verify Forgot Password",
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
    "/send-forgot-password": {
        post: {
            tags : [tag],
            requestBody: {
                content: {
                    "application/json": {
                        schema: util1.getSchemaRequest("SendForgotPassword")
                    }
                }
            },
            responses: {
                200 : {
                    description: "Send Forgot Password",
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
    "/verification" :{
        get: {
            tags : [tag],
            parameters: [
                {
                    in: "path",
                    name: "token",
                    type: "string"
                }
            ],
            responses: {
                200 : {
                    description: "Verification User Token",
                    content: {
                        "text/html":{
                            
                        }
                    }
                }
            }
        }
    },
    "/resend-verification": {
        post: {
            tags : [tag],
            requestBody: {
                content: {
                    "application/json": {
                        schema: util1.getSchemaRequest("ResendVerification")
                    }
                }
            },
            responses: {
                200 : {
                    description: "Resend User Verification",
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
    "/reset-user-password": {
        post: {
            tags : [tag],
            requestBody: {
                content: {
                    "application/json": {
                        schema: util1.getSchemaRequest("ResetUserPassword")
                    }
                }
            },
            responses: {
                200 : {
                    description: "Reset User Password",
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
    "/refresh-token": {
        post: {
            tags : [tag],
            requestBody: {
                content: {
                    "application/json": {
                        schema: util1.getSchemaRequest("RefreshToken")
                    }
                }
            },
            responses: {
                200 : {
                    description: "Refresh Token",
                    content: {
                        "application/json":{
                            schema: {
                                properties: {
                                    token: {
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
    "/change-password": {
        post: {
            tags : [tag],
            requestBody: {
                content: {
                    "application/json": {
                        schema: util1.getSchemaRequest("ChangePassword")
                    }
                }
            },
            responses: {
                200 : {
                    description: "Change Password",
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
    "/sync-password": {
        put: {
            tags : [tag],
            requestBody: {
                content: {
                    "application/json": {
                        schema: util1.getSchemaRequest("SyncPassword")
                    }
                }
            },
            responses: {
                200 : {
                    description: "Sync Password",
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
exports.default = {schema,paths}