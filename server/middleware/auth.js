require('dotenv').config();
const jwt = require('jsonwebtoken')
const asyncHandler = require('./asyncHandler')
const errorResponse = require('./errorResponse')
const secretKey = process.env.JWT_SECRET
const {
    DB_TABLES : {
        DB_USERS,
        DB_PROFILES,
        DB_TOKENS
    }
} = require('../lib/const')
exports.authenticate = asyncHandler(async (req,res,next) => {
    const authHeader = req.get('Authorization')
    let token;
    if (authHeader && authHeader.startsWith('Bearer')) {
        token = authHeader.split(' ')[1]
    }
    if (!token) {
        res.status(401).json({
            message : "Not Authenticated"
        })

        //return next(new errorResponse('Not Authenticated',401))
    }
   try {
       let verify = jwt.verify(token,secretKey)
       req.user = await DB_USERS.findOne({
           where : {
               id : verify.id
           },
           include: [
               {
                   model: DB_PROFILES,
                   as: 'profile'
               }
           ]
       })
       //console.log(verify)
       next()
   } catch (error) {
       res.status(401).json({
           message : "Not Authenticated"
       })
   }
   
})