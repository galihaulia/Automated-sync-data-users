const multer = require('multer')
const moment = require('moment')
const fs = require('fs')

let path
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        switch (req.route.path) {
            case '/fgd/image':
                path = 'uploads/library/discussion/images';
                break;
            case '/fgd/comment/image':
                path = 'uploads/library/comment/images';
                break;
        }
        // switch (file.mimetype) {
        //     case 'file/pdf':
        //         path = 'uploads/library/discussion/documents'
        //         break
        //     case 'video/mp4':
        //     case 'video/quicktime':
        //         path = 'uploads/library/discussion/videos'
        //         break
        //     case 'image/jpeg':
        //     case 'image/jpg':
        //     case 'image/png':
        //         path = 'uploads/library/discussion/images'
        //         break
        //     default:
        //         path = 'uploads/library/discussion/documents'
        // }
        if(!fs.existsSync(path)){
            fs.mkdirSync(path, { recursive: true })
        }
        cb(null, path)
    },
    filename: (req, file, cb) => {
        cb(null, `${moment().format('DDMMYYYYHmmss')}-${file.originalname}`)
    }
})

const upload = multer({storage})

module.exports = upload