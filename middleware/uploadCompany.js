const multer = require('multer')
const moment = require('moment')
const fs = require('fs')

let path
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        switch (req.route.path) {
            case '/company/image':
                path = 'uploads/library/company/images';
                break;
            case '/banner/file':
                path = 'uploads/library/company/banners';
                break;
        }
        if(!fs.existsSync(path)){
          fs.mkdirSync(path, { recursive: true })
        }
        cb(null, path);
    },
    filename: (req, file, cb) => {
        let name = file.originalname.split(' ').join('_')

        cb(null, `${moment().format('DDMMYYYYHmmss')}-${name}`);
    }
})

const upload = multer({storage})

module.exports = upload