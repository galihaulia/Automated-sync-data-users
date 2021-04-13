const util1 = require('../utils/apiBuildHandler')
const tag = "AssessmentsController"
const schema = {
    assessmentsSchema : {
        title: "List Courses",
        type: "object",
        properties: {
            courses: {
                type: "array",
                items: {
                    properties: {
                        id: {
                            type: "integer"
                        },
                        name: {
                            type: "string"
                        },
                        company: {
                            type: "object",
                            properties: {
                                id : {
                                    type: "integer"
                                },
                                name: {
                                    type: "string"
                                }
                            }
                        },
                        description: {
                            type: "text"
                        },
                        sumOfMentee: {
                            type: "integer"
                        },
                        publishDate: {
                            type: "string",
                            format: "date-time"
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
                        }
                    }
                }
            }
        }
    },
    assessCourseSchema : {
        title: "Detail Course",
        properties: {
            employees: {
                type: "array",
                items: {
                    properties: {
                        id: {
                            type: "integer"
                        },
                        fullName: {
                            type: "string"
                        },
                        chapters: {
                            type: "array",
                            items: {
                                properties: {
                                    id: {
                                        type: "integer"
                                    },
                                    title: {
                                        type: "string"
                                    },
                                    score: {
                                        type: "number",
                                        format: "float"
                                    }
                                }
                            }
                        }
                    }
                }
            },
            chapters: {
                type: "array",
                items: {
                    properties: {
                        id: {
                            type: "integer"
                        },
                        title: {
                            type: "string"
                        },
                        employees: {
                            type: "array",
                            items: {
                                properties: {
                                    id: {
                                        type: "integer"
                                    },
                                    fullName: {
                                        type: "string"
                                    },
                                    materials: {
                                        type: "array",
                                        items: {
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
                                                score: {
                                                    type: "number",
                                                    format: "float"
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
        }
    },
    assessCourseMenteeSchema : {
        title: "Detail Course of Mentee",
        type: "object",
        properties: {
            chapters: {
                type: "array",
                items: {
                    properties: {
                        id: {
                            type: "integer"
                        },
                        title: {
                            type: "string"
                        },
                        materials: {
                            type: "array",
                            items: {
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
                                    score: {
                                        type: "number",
                                        format: "float"
                                    }
                                }
                            }
                        }
                    }
                }
            },
            profile: {
                type: "object",
                properties: {
                    id: {
                        type: "integer"
                    },
                    name: {
                        type: "string"
                    },
                    company: {
                        type: "string"
                    },
                    department: {
                        type: "string"
                    },
                    jobTitle: {
                        type: "string"
                    },
                    level: {
                        type: "string"
                    },
                    phoneNumber: {
                        type: "string"
                    },
                    photo: {
                        type: "string"
                    },
                    cover: {
                        type: "string"
                    },
                    gender: {
                        type: "string"
                    },
                    born: {
                        type: "string",
                        format: "date-time"
                    }
                }
            },
            course: {
                properties: {
                    name: {
                        type: "string"
                    },
                    stdCompetency: {
                        type: "string"
                    }
                }
            }
        }
    },
    assessQuizSchema : {
        title: "Detail Quiz",
        type: "object",
        properties: {
            chapters: {
                type: "array",
                items: {
                    properties: {
                        id: {
                            type: "integer"
                        },
                        title: {
                            type: "string"
                        },
                        materials: {
                            type: "array",
                            items: {
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
                                    grade: {
                                        type: "number",
                                        format: "float"
                                    },
                                    sumOfQuestion: {
                                        type: "integer"
                                    },
                                    sumOfPoint: {
                                        type: "integer"
                                    },
                                    timer: {
                                        type: "string",
                                        format: "date-time"
                                    },
                                    employees: {
                                        type: "array",
                                        items: {
                                            properties: {
                                                id: {
                                                    type: "string"
                                                },
                                                idNumber: {
                                                    type: "string"
                                                },
                                                fullName: {
                                                    type: "string"
                                                },
                                                score: {
                                                    type: "number",
                                                    format: "float"
                                                },
                                                point: {
                                                    type: "number",
                                                    format: "float"
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
        }
    },
    assessAssignmentSchema : {
        title: "Detail Assignment",
        type: "object",
        properties: {
            chapters: {
                type: "array",
                items: {
                    properties: {
                        id: {
                            type: "integer"
                        },
                        title: {
                            type: "string"
                        },
                        materials: {
                            type: "array",
                            items: {
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
                                    grade: {
                                        type: "number",
                                        format: "float"
                                    },
                                    sumOfQuestion: {
                                        type: "integer"
                                    },
                                    sumOfPoint: {
                                        type: "integer"
                                    },
                                    timer: {
                                        type: "string",
                                        format: "date-time"
                                    },
                                    employees: {
                                        type: "array",
                                        items: {
                                            properties: {
                                                id: {
                                                    type: "string"
                                                },
                                                idNumber: {
                                                    type: "string"
                                                },
                                                fullName: {
                                                    type: "string"
                                                },
                                                score: {
                                                    type: "number",
                                                    format: "float"
                                                },
                                                point: {
                                                    type: "number",
                                                    format: "float"
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
        }
    },
    assessQuizMenteeSchema : {
        title: "Detail Quiz of Mentee",
        type: "object",
        properties: {
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
                        isCorrect: {
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
                                    isPicked: {
                                        type: "boolean"
                                    },
                                    file: {
                                        type: "string"
                                    }
                                }
                            }
                        }
                    }
                }
            },
            summary: {
                type: "object",
                properties: {
                    correct: {
                        type: "integer"
                    },
                    wrong: {
                        type: "integer"
                    },
                    status: {
                        type: "string"
                    },
                    score: {
                        type: "string",
                        format: "float"
                    },
                    grade: {
                        type: "integer"
                    },
                    point: {
                        type: "integer"
                    },
                    sumOfPoint: {
                        type: "integer"
                    },
                    completionTime: {
                        type: "string",
                        format: "date-time"
                    }
                }
            },
            profile: {
                type: "object",
                properties: {
                    id: {
                        type: "integer"
                    },
                    name: {
                        type: "string"
                    },
                    company: {
                        type: "string"
                    },
                    department: {
                        type: "string"
                    },
                    jobTitle: {
                        type: "string"
                    },
                    level: {
                        type: "string"
                    },
                    phoneNumber: {
                        type: "string"
                    },
                    photo: {
                        type: "string"
                    },
                    cover: {
                        type: "string"
                    },
                    gender: {
                        type: "string"
                    },
                    born: {
                        type: "string",
                        format: "date-time"
                    }
                }
            }
        }
    },
    assessAssignmentMenteeSchema : {
        title: "Detail Assignment of Mentee",
        type: "object",
        properties: {
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
                        isCorrect: {
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
                                    isPicked: {
                                        type: "boolean"
                                    },
                                    file: {
                                        type: "string"
                                    }
                                }
                            }
                        }
                    }
                }
            },
            summary: {
                type: "object",
                properties: {
                    correct: {
                        type: "integer"
                    },
                    wrong: {
                        type: "integer"
                    },
                    status: {
                        type: "string"
                    },
                    score: {
                        type: "string",
                        format: "float"
                    },
                    grade: {
                        type: "integer"
                    },
                    point: {
                        type: "integer"
                    },
                    sumOfPoint: {
                        type: "integer"
                    },
                    completionTime: {
                        type: "string",
                        format: "date-time"
                    }
                }
            },
            profile: {
                type: "object",
                properties: {
                    id: {
                        type: "integer"
                    },
                    name: {
                        type: "string"
                    },
                    company: {
                        type: "string"
                    },
                    department: {
                        type: "string"
                    },
                    jobTitle: {
                        type: "string"
                    },
                    level: {
                        type: "string"
                    },
                    phoneNumber: {
                        type: "string"
                    },
                    photo: {
                        type: "string"
                    },
                    cover: {
                        type: "string"
                    },
                    gender: {
                        type: "string"
                    },
                    born: {
                        type: "string",
                        format: "date-time"
                    }
                }
            }
        }
    },
    assessResetSchema : {
        title: "Reset Quiz of Mentee",
        type: "object",
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
            user_id: {
                type: "integer"
            }
        }
    }
}
const paths = {
    "/assessments": {
        get: {
            tags : [tag],
            parameters: [
                {
                    name: 'filter_by',
                    in: 'query',
                    description: "name",
                    schema: {
                      type: 'string'
                    },
                    required: false
                },
                {
                    name: 'isInternal',
                    in: 'query',
                    description: 'internal = true, external = false',
                    schema: {
                        type: 'boolean'
                    },
                    required: true
                },
                {
                    name: 'company_name',
                    in: 'query',
                    description: "name",
                    schema: {
                      type: 'integer'
                    },
                    required: false
                }
            ],
            responses: {
                200: {
                    description : "List All Courses",
                    content: {
                        "application/json": {
                            schema: util1.getSchemaResponse("assessmentsSchema","assessmentsSchema","object")
                        }
                    }
                }
            }
        }
    },
    "/assessment/course": {
        get: {
            tags : [tag],
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
                    name: 'filter_by',
                    in: 'query',
                    description: "name",
                    schema: {
                      type: 'string'
                    },
                    required: false
                }
            ],
            responses: {
                200: {
                    description : "Detail Course",
                    content: {
                        "application/json": {
                            schema: util1.getSchemaResponse("assessCourseSchema","assessCourseSchema","object")
                        }
                    }
                }
            }
        }
    },
    "/assessment/course-mentee": {
        get: {
            tags : [tag],
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
                    name: 'user_id',
                    in: 'query',
                    schema: {
                      type: 'integer'
                    },
                    required: true
                }
            ],
            responses: {
                200: {
                    description : "Detail Course of Mentee",
                    content: {
                        "application/json": {
                            schema: util1.getSchemaResponse("assessCourseMenteeSchema","assessCourseMenteeSchema","object")
                        }
                    }
                }
            }
        }
    },
    "/assessment/quiz": {
        get: {
            tags : [tag],
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
                    name: 'filter_by',
                    in: 'query',
                    description: "name",
                    schema: {
                      type: 'string'
                    },
                    required: false
                }
            ],
            responses: {
                200: {
                    description : "Detail Quiz",
                    content: {
                        "application/json": {
                            schema: util1.getSchemaResponse("assessQuizSchema","assessQuizSchema","object")
                        }
                    }
                }
            }
        }
    },
    "/assessment/assignment": {
        get: {
            tags : [tag],
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
                    name: 'filter_by',
                    in: 'query',
                    description: "name",
                    schema: {
                      type: 'string'
                    },
                    required: false
                }
            ],
            responses: {
                200: {
                    description : "Detail Assignment",
                    content: {
                        "application/json": {
                            schema: util1.getSchemaResponse("assessAssignmentSchema","assessAssignmentSchema","object")
                        }
                    }
                }
            }
        }
    },
    "/assessment/quiz-mentee": {
        get: {
            tags : [tag],
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
                    name: 'user_id',
                    in: 'query',
                    schema: {
                      type: 'integer'
                    },
                    required: true
                }
            ],
            responses: {
                200: {
                    description : "Detail Quiz of Mentee",
                    content: {
                        "application/json": {
                            schema: util1.getSchemaResponse("assessQuizMenteeSchema","assessQuizMenteeSchema","object")
                        }
                    }
                }
            }
        }
    },
    "/assessment/assignment-mentee": {
        get: {
            tags : [tag],
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
                    name: 'user_id',
                    in: 'query',
                    schema: {
                      type: 'integer'
                    },
                    required: true
                }
            ],
            responses: {
                200: {
                    description : "Detail Assignment of Mentee",
                    content: {
                        "application/json": {
                            schema: util1.getSchemaResponse("assessAssignmentMenteeSchema","assessAssignmentMenteeSchema","object")
                        }
                    }
                }
            }
        }
    },
    "/assessment-reset": {
        put: {
            tags: [tag],
            requestBody: {
                content: {
                    "application/json":{
                        schema: util1.getSchemaRequest("assessResetSchema")
                    }
                }
            },
            responses: {
                200 : {
                    description: "Reset Quiz of Mentee",
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