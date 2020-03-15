const router = require("express").Router();
const Transcribes = require("../model/Transcribe");

router.get("/transcribes", async (req, res) => {
  const transcribes = await Transcribes.find(transcribe);
  res.json({ transcribes: transcribes });
});

router.get("/transcribes/:transcribeId", async (req, res) => {
  const id = req.params.transcribeId;

  const result = await Transcribes.findById({ _id: id });
  console.log(result);
  if (!result) res.json({ status: 401, data: "böyle bir çeviri yok" });
  res.json({ status: 200, trascribe: result });
});
module.exports = router;
