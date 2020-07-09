const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send({
    data: "Hello", 
    timestamp: (new Date()).getTime(),
    host: process.env.HOSTNAME
  }).status(200);
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
