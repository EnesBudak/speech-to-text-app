const router = require("express").Router();
const {
  transcribeJob,
  uploadGoogleStorage
} = require("../googleServices/fileUploadTranscribe");
const multer = require("multer");
const multerStorage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, "./uploads/");
  },
  filename: function(req, file, cb) {
    cb(null, file.fieldname + "-" + Date.now() + file.originalname);
  }
});

const fileFilter = (req, file, cb) => {
  if (file.mimetype === "audio/wave" || file.mimetype === "audio/wave") {
    return cb(null, true);
  } else {
    req.fileValidationError = "Forbidden extension";
    return cb(null, false, req.fileValidationError);
  }
};
const upload = multer({ storage: multerStorage, fileFilter: fileFilter });

router.post("/file", upload.single("audio"), (req, res) => {
  console.log(req.file);

  if (!req.fileValidationError) {
    uploadGoogleStorage(req, res)
      .catch(console.error)
      .then(() => {
        transcribeJob(req, res).catch(console.error);
      });
  } else {
    res.json({ status: 401, message: "Hatalı dosya dürü" });
  }
});
module.exports = router;
