const express = require('express')
const cors = require('cors')
const jsend = require('jsend')
const path = require('path')
const app = express()
const swaggerUI = require('swagger-ui-express')
const openApiDoc = require('./openApiDoc')
const cron = require('node-cron');

const {
    getDataUser
} = require("./controllers/syncusers");
const asyncHandler = require('./middleware/asyncHandler')

const publicPath = path.join(__dirname,'../public')
//MIDDLEWARE
app.use(cors())
app.use(jsend.middleware)

app.use('/',express.static(publicPath))
// app.engine('handlebars',exphbs({defaultLayout : 'main',layoutsDir : 'views/layouts'}))
// app.set('view engine','handlebars')

app.get('/sync-users', getDataUser);
// app.use('/api-doc',swaggerUI.serve,swaggerUI.setup(openApiDoc.default()))
app.get('*', (req, res, next) => {
    res.status(200).json({
        message: "Server clev ON",
        status: 200
    })
})

// SWAGGER
// ROUTE PATH

// ROUTES
console.log(publicPath)
module.exports = app