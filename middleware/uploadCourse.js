const multer = require('multer');
const moment = require('moment');
const fs = require('fs')

let path;
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const { is_embed } = req.body

    if (is_embed == true) {
      cb(null, file)
    }

    switch (req.route.path) {
      case '/material/file':
        switch (file.mimetype) {
          case 'file/pdf':
            path = 'uploads/library/material/documents';
            break;
          case 'video/mp4':
          case 'video/quicktime':
            path = 'uploads/library/material/videos';
            break;
          default:
            path = 'uploads/library/material/documents';
        }
        break;
      case '/material/image':
        path = 'uploads/library/material/images';
        break;
      case '/course/image':
        path = 'uploads/library/course/images';
        break;
    }
    if(!fs.existsSync(path)){
      fs.mkdirSync(path, { recursive: true })
    }
    cb(null, path);
  },
  filename: (req, file, cb) => {
    const { is_embed } = req.body

    if (is_embed) {
      cb(null, file)
    }
    let name = file.originalname.split(' ').join('_')

    cb(null, `${moment().format('DDMMYYYYHmmss')}-${name}`);
  },
});

const upload = multer({ storage });

module.exports = upload;
