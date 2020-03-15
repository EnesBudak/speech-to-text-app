const Transcribe = require("../model/Transcribe");
const shortid = require("shortid");
async function transcribeJob(req, res) {
  const speech = require("@google-cloud/speech");

  // Imports the Google Cloud client library
  // Creates a client
  const client = new speech.SpeechClient();

  const audio = {
    uri: `gs://myspecialfiles/${req.file.filename}`
    // uri: "gs://myspecialfiles/audio-15840177200533 _ubat 2020.wav"cd
  };
  console.log(audio);
  const config = {
    encoding: "LINEAR16",
    // sampleRateHertz: 16000,
    enableWordTimeOffsets: true,
    audioChannelCount: 2,
    enableSeparateRecognitionPerChannel: true,
    enableAutomaticPunctuation: true,
    languageCode: "tr-TR"
    // model: "command_and_search"
    // enableAutomaticPunctuation: true
  };
  const request = {
    audio: audio,
    config: config
  };
  // // Detects speech in the audio file
  const [operation] = await client.longRunningRecognize(request);
  // // Get a Promise representation of the final result of the job
  const [response] = await operation.promise();

  const wordInfos = [];
  let transcription = null;
  response.results.forEach(result => {
    transcription = result.alternatives[0].transcript;

    result.alternatives[0].words.forEach(wordInfo => {
      word = {
        wordStart:
          `${wordInfo.startTime.seconds}` +
          `.` +
          wordInfo.startTime.nanos / 100000000,
        wordEnd:
          `${wordInfo.endTime.seconds}` +
          `.` +
          wordInfo.endTime.nanos / 100000000,
        word: wordInfo.word
      };
      wordInfos.push(word);
    });
    console.log(wordInfos);
  });
  const _id = shortid.generate();
  const transcribe = new Transcribe({
    _id: _id,
    transcribe: transcription,
    wordInfos: wordInfos
  });
  try {
    const savedTranscribe = transcribe.save();
  } catch (error) {
    console.log(error);
  }
  return res.json({
    id: _id,
    transcribe: transcription,
    wordInfos: wordInfos,
    status: "200"
  });
}

async function uploadGoogleStorage(req, res) {
  const { Storage } = require("@google-cloud/storage");

  const storage = new Storage();

  // Uploads a local file to the bucket
  await storage.bucket("myspecialfiles").upload(req.file.path, {
    // Support for HTTP requests made with `Accept-Encoding: gzip`
    gzip: false,
    // By setting the option `destination`, you can change the name of the
    // object you are uploading to a bucket.
    metadata: {
      // Enable long-lived HTTP caching headers
      // Use only if the contents of the file will never change
      // (If the contents will change, use cacheControl: 'no-cache')
      cacheControl: "no-cache"
    }
  });

  return console.log(`${req.file.filename} uploaded to "myspecialfiles".`);
}

module.exports.transcribeJob = transcribeJob;
module.exports.uploadGoogleStorage = uploadGoogleStorage;
