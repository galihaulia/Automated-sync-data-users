const authDoc = require('./auth.docs')
const userDoc = require('./user.docs')
const coursesDoc = require('./courses.docs')
const companiesDoc = require('./companies.docs')
const departmentsDoc = require('./departments.docs')
const jobTitlesDoc = require('./jobtitles.docs')
const levelsDoc = require('./levels.docs')
const stdCompetenciesDoc = require('./stdcompetencies.docs')
const syllabuses = require('./syllabuses.docs')
const competenciesDoc = require('./competencies.docs')
const privilegesDoc = require('./privileges.docs')
const chaptersDoc = require('./chapters.docs')
const materialsDoc = require('./materials.docs')
const categoriesDoc = require('./categories.docs')
const bannersDoc = require('./banners.docs')
const thirdPartiesDoc = require('./thirdparties.docs')
const gradeScalesDoc = require('./gradescales.docs')
const statusesDoc = require('./statuses.docs')
const schedulesDoc = require('./schedules.docs')
const noteDoc = require('./notes.docs')
const fgdsDoc = require('./fgds.docs')
const certificate = require('./certificates.docs')
const paths = require('./paths.docs') 
const assessments = require('./assessments.docs')
const reports = require('./reports.docs')
const notifications = require('./notifications.docs')

const allDocs = [
    authDoc.default,
    userDoc.default,
    companiesDoc.default,
    departmentsDoc.default,
    jobTitlesDoc.default,
    levelsDoc.default,
    stdCompetenciesDoc.default,
    syllabuses.default,
    competenciesDoc.default,
    coursesDoc.default,
    privilegesDoc.default,
    chaptersDoc.default,
    materialsDoc.default,
    categoriesDoc.default,
    bannersDoc.default,
    thirdPartiesDoc.default,
    gradeScalesDoc.default,
    statusesDoc.default,
    schedulesDoc.default,
    noteDoc.default,
    fgdsDoc.default,
    certificate.default,
    paths.default,
    assessments.default,
    reports.default,
    notifications.default
]
let apiDoc = {
    openapi: "3.0.0",
    info: {
        version: "1.0.0",
        title: "Clev Api Documentation",
    },
    servers: [
        {
            url: "/api/v1",
        },
    ],
    // security: ["bearerAuth"],
    paths: {},
    components: {
        schemas: {
            ErrorResponse: {
                type: "object",
                properties: {
                    statusesId: {
                        type: "string",
                    },
                    message: {
                        type: "string",
                    },
                },
            },
        },
        securitySchemes: {
            jwt : {
                type : "http",
                scheme: "bearer",
                bearerFormat : "JWT"
            },
        },
    },
    security : [
        {
            jwt : []
        }
    ]
}
allDocs.forEach((doc) => {
    apiDoc.paths = Object.assign(Object.assign({},apiDoc.paths),doc.paths)
    apiDoc.components.schemas = Object.assign(Object.assign({},apiDoc.components.schemas),doc.schema)
})
exports.default = () => {
    return apiDoc
}
