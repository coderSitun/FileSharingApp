const router = require('express').Router();
const multer = require('multer');

let storage = multer.diskStorage({
    destination: (req, file, cb) => cb(null, 'uploads/'),
    filename: (req, file, cb) => {
        const uniqueName = Date.now() + Math.round(Math.random() * 1E9) + path.extname(file.originalname);
        cb(null, uniqueName);
    }
});

let upload = multer({
    storage: storage,
    limit: { filesize: 100 * 1000 * 1000}
}).single('myfile');

module.exports = router;