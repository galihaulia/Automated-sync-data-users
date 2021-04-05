const asyncHandler = require("../../middleware/asyncHandler");


exports.getUser = asyncHandler(async(req,res,next) => {
    res.status(200).json({
        msg : "Hello world"
    })
})