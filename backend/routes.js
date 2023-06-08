const express = require('express');
const multer = require('multer');

const router = express.Router();
const upload = multer().single('file');

router.post('/fileupload/multer', function(req, res, next) {
  upload(req, res, function(err) {
    if (err) {
      // Handle any Multer errors
      return res.status(400).json({ error: err.message });
    }

    // File uploaded successfully
    if (!req.file) {
      // Handle case where no file was uploaded
      return res.status(400).json({ error: 'No file uploaded' });
    }

    // Do something with the uploaded file
    // ...

    // Return a response
    res.json({ message: 'File uploaded successfully' });
  });
});

module.exports = router;
