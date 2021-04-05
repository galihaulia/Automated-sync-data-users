const util = require('../utils/apiBuildHandler');
const moment = require('moment');
const tag = "MaterialsController";
const url = "/material";
const sch = ['showMaterialSchema', 'createMaterialSchema', 'updateMaterialSchema', 'deleteMaterialSchema'];
const schema = {
    showMaterialSchema: {
        title: "Show Material",
        type: "object",
        properties: {
            id: {
                type: "integer"
            },
            chaptersId: {
                type: "integer"
            },
            name: {
                type: "string"
            },
            type: {
                type: "integer"
            },
            description: {
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
            trainingId: {
                type: "integer"
            },
            is_verified: {
                type: "boolean"
            },
            start_date:{
                type: "string",
                format: "date-time"
            },
            end_date:{
                type: "string",
                format: "date-time"
            },
            deletedAt: {
                type: "string",
                format: "date-time"
            },
            location: {
                type: "string"
            },
            conferenceUrl: {
                type: "string"
            },
            speakers: {
                type: "array",
                items: {
                    properties: {
                        userId : {
                            type: "integer"
                        },
                        fullName: {
                            type: "string"
                        }
                    }
                }
            },
            mentor: {
                type: "array",
                items: {
                    properties: {
                        userId : {
                            type: "integer"
                        },
                        fullName: {
                            type: "string"
                        }
                    }
                }
            },
            quiz: {
                type: "object",
                properties: {
                    setting: {
                        properties: {
                            grade: {
                                type: "integer"
                            },
                            timer: {
                                type: "string"
                            },
                            timerMode: {
                                type: "string"
                            },
                            point: {
                                type: "integer"
                            },
                            isRandom: {
                                type: "boolean"
                            },
                            completionTime: {
                                type: "string",
                                format: "date-time"
                            }
                        }

                    },
                    questions: {
                        type: "array",
                        items: {
                            properties: {
                                id: {
                                    type: "integer"
                                },
                                question: {
                                    type: "string"
                                },
                                description: {
                                    type: "string"
                                },
                                point: {
                                    type: "integer"
                                },
                                timer: {
                                    type: "string"
                                },
                                isBank: {
                                    type: "boolean"
                                },
                                files: {
                                    type: "array",
                                    items: { type: "string" }
                                },
                                answers: {
                                    type: "array",
                                    items: {
                                        properties: {
                                            id: {
                                                type: "integer"
                                            },
                                            answer: {
                                                type: "string"
                                            },
                                            description: {
                                                type: "string"
                                            },
                                            isCorrect: {
                                                type: "boolean"
                                            },
                                            file: {
                                                type: "string",
                                                format: "byte"
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            },
            files: {
                type: "array",
                items: {
                    properties: {
                        id: {
                            type: "integer"
                        },
                        file: {
                            type: "string"
                        }
                    }
                }
            },
            outline: {
                type: "object",
                properties: {
                    score: {
                        type: "number",
                        format: "float"
                    },
                    status: {
                        type: "string"
                    },
                    completionTime: {
                        type: "string",
                        format: "date-time"
                    }
                }
            }
        }
    },
    createMaterialSchema: {
        title: "Create Material",
        properties: {
            chapter_id: {
                type: "integer"
            },
            name: {
                type: "string"
            },
            type: {
                type: "string"
            },
            description: {
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
            training_id: {
                type: "integer"
            },
            is_verified: {
                type: "boolean"
            },
            location: {
                type: "string"
            },
            conferenceUrl: {
                type: "string"
            },
            speakers: {
                type: "array",
                items: { type: "number" }
            },
            mentors: {
                type: "array",
                items: { type: "number" }
            },
            start_date:{
                type: "string",
                format: "date-time"
            },
            end_date:{
                type: "string",
                format: "date-time"
            },
            quiz: {
                type: "object",
                properties: {
                    setting: {
                        properties: {
                            grade: {
                                type: "integer"
                            },
                            timer: {
                                type: "string"
                            },
                            timer_mode: {
                                type: "string"
                            },
                            point: {
                                type: "integer"
                            },
                            is_random: {
                                type: "boolean"
                            },
                            completion_time: {
                                type: "string",
                                format: "date-time"
                            }
                        }

                    },
                    questions: {
                        type: "array",
                        items: {
                            properties: {
                                id: {
                                    type: "integer"
                                },
                                question: {
                                    type: "string"
                                },
                                description: {
                                    type: "string"
                                },
                                point: {
                                    type: "integer"
                                },
                                timer: {
                                    type: "string"
                                },
                                is_bank: {
                                    type: "boolean"
                                },
                                files: {
                                    type: "array",
                                    items: { type: "string" }
                                },
                                answers: {
                                    type: "array",
                                    items: {
                                        properties: {
                                            answer: {
                                                type: "string"
                                            },
                                            description: {
                                                type: "string"
                                            },
                                            is_correct: {
                                                type: "boolean"
                                            },
                                            file: {
                                                type: "string",
                                                format: "byte"
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            },
            files: {
                type: "array",
                items: { type: "string" }
            }
        }
    },
    updateMaterialSchema: {
        title: "Update Material",
        properties: {
            id: {
                type: "integer"
            },
            name: {
                type: "string"
            },
            type: {
                type: "string"
            },
            description: {
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
            location: {
                type: "string"
            },
            conferenceUrl: {
                type: "string"
            },
            speakers: {
                type: "array",
                items: {
                    type: "number"
                }
            },
            mentor: {
                type: "array",
                items: {
                    type: "number"
                }
            },
            training_id: {
                type: "integer"
            },
            is_verified: {
                type: "boolean"
            },
            start_date:{
                type: "string",
                format: "date-time"
            },
            end_date:{
                type: "string",
                format: "date-time"
            },
            quiz: {
                type: "object",
                properties: {
                    setting: {
                        properties: {
                            grade: {
                                type: "integer"
                            },
                            timer: {
                                type: "string"
                            },
                            timer_mode: {
                                type: "string"
                            },
                            point: {
                                type: "integer"
                            },
                            is_random: {
                                type: "boolean"
                            },
                            completion_time: {
                                type: "string",
                                format: "date-time"
                            }
                        }

                    },
                    questions: {
                        type: "array",
                        items: {
                            properties: {
                                id: {
                                    type: "integer"
                                },
                                question: {
                                    type: "string"
                                },
                                description: {
                                    type: "string"
                                },
                                point: {
                                    type: "integer"
                                },
                                timer: {
                                    type: "string"
                                },
                                is_bank: {
                                    type: "boolean"
                                },
                                deletion: {
                                    type: "integer"
                                },
                                files: {
                                    type: "array",
                                    items: { 
                                        properties: {
                                            file_name: {
                                                type: "string"
                                            },
                                            deletion: {
                                                type: "integer"
                                            }
                                        }
                                    }
                                },
                                answers: {
                                    type: "array",
                                    items: {
                                        properties: {
                                            id: {
                                                type: "integer"
                                            },
                                            answer: {
                                                type: "string"
                                            },
                                            description: {
                                                type: "string"
                                            },
                                            is_correct: {
                                                type: "boolean"
                                            },
                                            file: {
                                                type: "string",
                                                format: "byte"
                                            },
                                            deletion: {
                                                type: "integer"
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
    },
    deleteMaterialSchema: {
        title: "Delete Material",
        properties: {
            id: {
                type: "integer"
            }
        }
    },
    getQuestionBanksSchema: {
        title: "List Question Bank",
        type: "object",
        properties: {
            sumOfQuestion: {
                type: "integer"
            },
            questions: {
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
                            type: "string"
                        },
                        type: {
                            type: "string"
                        },
                        author: {
                            type: "object",
                            properties: {
                                id: {
                                    type: "integer"
                                },
                                fullName: {
                                    type: "string"
                                }
                            }
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
                        files: {
                            type: "array",
                            items: { type: "string" }
                        },
                        answers: {
                            type: "array",
                            items: {
                                properties: {
                                    id: {
                                        type: "integer"
                                    },
                                    answer: {
                                        type: "string"
                                    },
                                    description: {
                                        type: "string"
                                    },
                                    isCorrect: {
                                        type: "boolean"
                                    },
                                    file: {
                                        type: "string",
                                        format: "byte"
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    },
    getQuestionBankSchema: {
        title: "Detail Question Bank",
        type: "object",
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
            type: {
                type: "string"
            },
            author: {
                type: "object",
                properties: {
                    id: {
                        type: "integer"
                    },
                    fullName: {
                        type: "string"
                    }
                }
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
            files: {
                type: "array",
                items: { type: "string" }
            },
            answers: {
                type: "array",
                items: {
                    properties: {
                        id: {
                            type: "integer"
                        },
                        answer: {
                            type: "string"
                        },
                        description: {
                            type: "string"
                        },
                        isCorrect: {
                            type: "boolean"
                        },
                        file: {
                            type: "string",
                            format: "byte"
                        }
                    }
                }
            }
        }
    },
    createQuestionBankSchema: {
        title: "Create Question Bank",
        type: "object",
        properties: {
            question: {
                type: "string"
            },
            description: {
                type: "string"
            },
            files: {
                type: "array",
                items: { type: "string" }
            },
            answers: {
                type: "array",
                items: {
                    properties: {
                        answer: {
                            type: "string"
                        },
                        description: {
                            type: "string"
                        },
                        is_correct: {
                            type: "boolean"
                        },
                        file: {
                            type: "string",
                            format: "byte"
                        }
                    }
                }
            }
        }
    },
    updateQuestionBankSchema: {
        title: "Update Question Bank",
        type: "object",
        properties: {
            id: {
                type: "integer"
            },
            question: {
                type: "string"
            },
            description: {
                type: "string"
            },
            files: {
                type: "array",
                items: { 
                    properties: {
                        file_name: {
                            type: "string"
                        },
                        deletion: {
                            type: "integer"
                        }
                    }
                }
            },
            answers: {
                type: "array",
                items: {
                    properties: {
                        id: {
                            type: "integer"
                        },
                        answer: {
                            type: "string"
                        },
                        description: {
                            type: "string"
                        },
                        is_correct: {
                            type: "boolean"
                        },
                        file: {
                            type: "string",
                            format: "byte"
                        },
                        deletion: {
                            type: "integer"
                        }
                    }
                }
            }
        }
    },
    deleteQuestionBankSchema: {
        title: "Delete Question Bank",
        properties: {
            id: {
                type: "integer"
            }
        }
    },
    submissionSchema: {
        title: "Quiz Submission",
        properties: {
            course_id: {
                type: "integer"
            },
            chapter_id: {
                type: "integer"
            },
            material_id: {
                type: "integer"
            },
            completion_time: {
                type: "string",
                format: "date-time"
            },
            questions: {
                type: "array",
                items: {
                    properties: {
                        id: {
                            type: "integer"
                        },
                        answer: {
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
    },
    submissionFilesSchema: {
        title: "Assignment File Submission",
        properties: {
            course_id: {
                type: "integer"
            },
            chapter_id: {
                type: "integer"
            },
            material_id: {
                type: "integer"
            },
            description: {
                type: "string",
            },
            files: {
                type: "array",
                items: { type: "string" }
            }
        }
    },
    submissionScore: {
        title: "Assignment Score Submission",
        properties: {
            user_id: {
                type: "integer"
            },
            course_id: {
                type: "integer"
            },
            chapter_id: {
                type: "integer"
            },
            material_id: {
                type: "integer"
            },
            score: {
                type: "string",
            },
            comment: {
                type: "string",
            },
        }
    },
    attendanceSchema : {
        title: "Attendance",
        properties: {
            materialId: {
                type: "integer"
            },
            type: {
                type: "string"
            },
            time: {
                type: "string"
            }
        }
    }
};
const paths = {
    [url]: {
        get: {
            tags: [tag],
            parameters: [
                {
                    name: 'course_id',
                    in: 'query',
                    schema: {
                        type: 'integer'
                    },
                    required: true
                },
                {
                    name: 'chapter_id',
                    in: 'query',
                    schema: {
                        type: 'integer'
                    },
                    required: true
                },
                {
                    name: 'material_id',
                    in: 'query',
                    schema: {
                        type: 'integer'
                    },
                    required: true
                },
                {
                    name: 'is_mentee',
                    in: 'query',
                    schema: {
                        type: 'boolean'
                    },
                    required: false
                },
                {
                    name: 'type',
                    in: 'query',
                    description: 'Video, Pdf, Ppt, VR, AR, 360, Quiz, Assignment, Webinar, InClass',
                    schema: {
                        type: 'string'
                    },
                    required: false
                }
            ],
            responses: {
                200: {
                    description: "List All Chapter",
                    content: {
                        "application/json": {
                            schema: util.getSchemaResponse(sch[0], sch[0], "object")
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
                        schema: util.getSchemaRequest(sch[1])
                    }
                }
            },
            responses: {
                200: {
                    description: "Create Material",
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
                        schema: util.getSchemaRequest(sch[2])
                    }
                }
            },
            responses: {
                200: {
                    description: "Update Material",
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
                        schema: util.getSchemaRequest(sch[3])
                    }
                }
            },
            responses: {
                200: {
                    description: "Delete Material",
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
    "/material/file": {
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
                    description: "Upload material file",
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
                    description: "Delete material file",
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
    "/material/image": {
        post: {
            tags: [tag],
            requestBody: {
                content: {
                    "multipart/form-data": {
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
            responses: {
                200: {
                    description: "Upload material image",
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
                    description: "Delete material image",
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
    '/materials/question-bank': {
        get: {
            tags: [tag],
            parameters: [
                {
                    name: 'filter_by',
                    description: 'question',
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
                    description: "List All Question Bank",
                    content: {
                        "application/json": {
                            schema: util.getSchemaResponse("getQuestionBanksSchema", "getQuestionBanksSchema", "object")
                        }
                    }
                }
            }
        },
    },
    '/material/question-bank': {
        get: {
            tags: [tag],
            parameters: [
                {
                    name: 'question_id',
                    in: 'query',
                    schema: {
                        type: 'integer'
                    },
                    required: true
                },
            ],
            responses: {
                200: {
                    description: "Detail Question Bank",
                    content: {
                        "application/json": {
                            schema: util.getSchemaResponse("getQuestionBankSchema", "getQuestionBankSchema", "object")
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
                        schema: util.getSchemaRequest("createQuestionBankSchema")
                    }
                }
            },
            responses: {
                200: {
                    description: "Create Question Bank",
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
                        schema: util.getSchemaRequest("updateQuestionBankSchema")
                    }
                }
            },
            responses: {
                200: {
                    description: "Update Question Bank",
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
                        schema: util.getSchemaRequest("deleteQuestionBankSchema")
                    }
                }
            },
            responses: {
                200: {
                    description: "Delete Question Bank",
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
    '/material/quiz-submission': {
        post: {
            tags: [tag],
            requestBody: {
                content: {
                    "application/json": {
                        schema: util.getSchemaRequest("submissionSchema")
                    }
                }
            },
            responses: {
                200: {
                    description: "Quiz submission",
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
    '/material/assignment-submission': {
        post: {
            tags: [tag],
            requestBody: {
                content: {
                    "application/json": {
                        schema: util.getSchemaRequest("submissionFilesSchema")
                    }
                }
            },
            responses: {
                200: {
                    description: "Assignment Files submission",
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
    '/material/assignment-submission-score':{
        put: {
            tags: [tag],
            requestBody: {
                content: {
                    "application/json": {
                        schema: util.getSchemaRequest("submissionScore")
                    }
                }
            },
            responses: {
                200: {
                    description: "Assignment Score Submission",
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
    '/material/attendance': {
        post: {
            tags: [tag],
            requestBody: {
                content: {
                    "application/json": {
                        schema: util.getSchemaRequest("attendanceSchema")
                    }
                }
            },
            responses: {
                200: {
                    description: "Attendance ",
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
}

exports.default = {schema, paths};