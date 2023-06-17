const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/autumn", function (req, res) {
  console.log("POSTリクエストの確認.");
});

app.listen(5000, function () {
  console.log("listening on localhost port 5000.");
});
