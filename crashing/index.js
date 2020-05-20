const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

const PORT = process.env.PORT || 3001;
const TTC = 60;
let timeLeft = TTC;

console.log(`This server will crash in ${TTC} seconds`);
console.log("Initiating countdown");
setTimeout(() => {
  console.log("System will crash now with a random error number");
  process.exit((Math.random() * 100) + 1);
}, TTC * 1000);

setInterval(() => {
  timeLeft--;
}, 1000);

app.get("/", (req, res) => {
  res.send({data: "Hello", timestamp: (new Date()).getTime(), timeLeft}).status(200);
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
