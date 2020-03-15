const router = require("express").Router();
const AWS = require("aws-sdk");


const upload = require("../services/audio-upload");

const singleUpload = upload.single("audio");


router.post("/file", (req, res) => {
  singleUpload(req, res, function(err) {
    if (err) {
      return res.status(422).send({
        errors: [{ title: "Image Upload Error", detail: err.message }]
      });
    }
    var transcribeservice = new AWS.TranscribeService();

    transcribeservice.startTranscriptionJob({
      LanguageCode: "tr-TR",
      Media: { MediaFileUri: req.file.location },
      MediaFormat: "mp3",
      MediaSampleRateHertz: 8000, // normally 8000 if you are using wav file
      OutputBucketName: "transcription.json"
    })
    // return res.json({ imageUrl: req.file.location });
  });
});
module.exports = router;
