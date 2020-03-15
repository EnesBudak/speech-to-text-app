const aws = require("aws-sdk");

const transcribeService = new aws.TranscribeService();

transcribe = (event, context, callback) => {
  const records = event.Records;

  const transcribingPromises = records.map(record => {
    const recordUrl = [
      "https://s3.amazonaws.com",
      "s3://mybuckettss/1583458662952deneme.mp3",
      record.s3.object.key
    ].join("/");

    const TranscriptionJobName = record.s3.object.key;

    return transcribeService
      .startTranscriptionJob({
        LanguageCode: "tr-TR",
        Media: { MediaFileUri: recordUrl },
        MediaFormat: "mp3",
        TranscriptionJobName,
        MediaSampleRateHertz: 8000, // normally 8000 if you are using wav file
        OutputBucketName: "transcription.json"
      })
      .promise();
  });

  Promise.all(transcribingPromises)
    .then(() => {
      callback(null, { message: "Start transcription job successfully" });
    })
    .catch(err => callback(err, { message: "Error start transcription job" }));
};

module.exports = transcribe;
