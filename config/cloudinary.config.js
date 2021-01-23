const cloudinary = require('cloudinary').v2;
const {CloudinaryStorage} = require('multer-storage-cloudinary');
const multer = require('multer');

require('dotenv').config();

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_KEY,
    api_secret: process.env.CLOUDINARY_SECRET
});

const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    folder: 'my-project-images',
    allowedFormats: ['jpg', 'png', 'jpeg', 'gif'],
    transformation: [{ width:500, height:500, crop:'limit'}]
});

const parser = multer({ storage: storage });

module.exports = parser;