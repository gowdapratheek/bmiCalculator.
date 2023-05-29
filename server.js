const bodyParser = require("body-parser");
const ex = require("express");

const app = ex();
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function (req, res) {
  var we = Number(req.body.w);
  var he = Number(req.body.h);
  var b = we / (he * he);
  res.send("bmi of the person is " + b);
});

app.listen(3000, function () {
  console.log("listening");
});
