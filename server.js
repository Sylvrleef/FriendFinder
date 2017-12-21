const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

var app = express();
var PORT = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

require("./app/routing/htmlRoutes.js")(app);

app.listen(PORT, function(){
  console.log("App listening on port: " + PORT);
});
