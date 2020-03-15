// Imports the Google Cloud client library
const speech = require("@google-cloud/speech");

// Creates a client
const client = new speech.SpeechClient();

/**
 * TODO(developer): Uncomment the following lines before running the sample.
 */
// const gcsUri = 'gs://my-bucket/audio.raw';
// const encoding = 'Encoding of the audio file, e.g. LINEAR16';
// const sampleRateHertz = 16000;
// const languageCode = 'BCP-47 language code, e.g. en-US';

// Get a Promise representation of the final result of the job
const [response] = await operation.promise();
