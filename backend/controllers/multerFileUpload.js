const multer = require('multer');

const PATH = process.env.UPLOAD_FOLDER_PATH;

let storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, PATH);
    },
    filename: (req, file, cb) => {
        console.log(file);
        let file_extension = file.originalname.split('.')[file.originalname.split('.').length - 1];
        console.log(file_extension);
        cb(null, file.fieldname + '-' + Date.now() + '.' + file_extension)
    }
});

let upload = multer({
    storage: storage
});

module.exports.upload = async (req, res) => {
    try {
        console.log("upload - - -")
        upload.single('image');
    } catch (error) {
        console.log("error - - -");
        console.log(error);
        throw error;
    }
}
