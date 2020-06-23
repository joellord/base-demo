const express = require("express");
const cors = require("cors");
const tracer = require("dd-trace").init();
const app = express();

app.use(cors());

const PORT = process.env.PORT || 3001;
const TTC = process.env.TTC || 60;
const SLOW_DURATION = process.env.SLOW_DURATION || 4000;
const AUTOCRASH = process.env.AUTOCRASH || false;
let timeLeft = TTC;

if (AUTOCRASH) {
  console.log(`This server will crash in ${TTC} seconds`);
  console.log("Initiating countdown");
  setTimeout(() => {
    console.log("System will crash now with a random error number");
    process.exit((Math.random() * 100) + 1);
  }, TTC * 1000);  
  setInterval(() => {
    timeLeft--;
  }, 1000);
}

app.get("/", (req, res) => {
  let body = {
    data: "Hello",
    timestamp: (new Date()).getTime()
  };
  if (AUTOCRASH) body.timeLeft = timeLeft;
  res.send({data: "Hello", timestamp: (new Date()).getTime(), timeLeft}).status(200);
});

app.get("/crash", (req, res) => {
  console.log("System crash requested...");
  process.exit((Math.random() * 100) + 1);
});

app.get("/slow", (req, res) => {
  console.log("This is a slow request");
  let start = (new Date()).getTime();
  setTimeout(() => {
    let end = (new Date()).getTime();
    console.log("Requested completed, sending response");
    res.send({
      data: "Hello",
      reqStart: start,
      reqEnd: end,
      reqDuration: (end - start) / 1000
    }).status(200);
  }, SLOW_DURATION);
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
