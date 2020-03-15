const aws = require("aws-sdk");
const multer = require("multer");
const multerS3 = require("multer-s3");

const dotenv = require("dotenv");

dotenv.config();

aws.config.update({
  accessKeyId: process.env.ACCESS_KEY,
  secretAccessKey: process.env.SECRET_ACCESS_KEY,
  bucket: process.env.BUCKET_NAME
});

const s3 = new aws.S3();

// const fileFilter = (req, file, cb) => {
//   if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
//     cb(null, true);
//   } else {
//     cb(new Error("Invalid file type, only JPEG and PNG is allowed!"), false);
//   }
// };

const upload = multer({
  // fileFilter,
  storage: multerS3({
    s3,
    bucket: "mybuckettss",
    metadata: function(req, file, cb) {
      cb(null, { fieldName: file.originalname });
    },
    key: function(req, file, cb) {
      console.log(file);
      cb(null, Date.now().toString() + file.originalname);
    }
  })
});

module.exports = upload;
