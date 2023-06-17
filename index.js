const express = require("express");
const app = express();
const coronaData = require("./coronaData.json");

app.get("/", function (req, res) {
  res.send(coronaData);
});

app.listen(5000, function () {
  console.log("listening on localhost port 5000.");
});
