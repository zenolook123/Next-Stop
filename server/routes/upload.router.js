const express = require('express');
const multer = require('multer');
const AWS = require('aws-sdk');
const router = express.Router();
const pool = require('../modules/pool');


AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
});

const s3 = new AWS.S3();


const upload = multer({
  storage: multer.memoryStorage(),
});

router.post('/api/upload', upload.single('photo'), (req, res) => {
  const file = req.file;
  const bucket = 'weekendspikebucket';
  const key = `${Date.now().toString()}-${file.originalname}`;

  const params = {
    Bucket: bucket,
    Key: key,
    Body: file.buffer
  };

  s3.upload(params, (error, data) => {
    if (error) {
      console.error('Error uploading to S3', error);
      return res.status(500)
    }

    const imageUrl = data.Location;
    return res.json({ imageUrl });
  });
});


module.exports = router;
