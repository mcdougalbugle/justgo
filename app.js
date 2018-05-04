var express = require('express');
var app = express();
var bodyParser = require("body-parser")
var PORT = process.env.PORT || 8080;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true } ));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api_json" }))
app.use(express.static("public"));
var db = require("./models")
var sequelize = require('./config/connection.js')
require("./routes/api-routes.js") (app)
require("./routes/html-routes.js") (app)
db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});
//accuracy: 2685location: {lat: 33.658895099999995, lng: -117.8282121}__proto__: Object
//chick-fil-a: accuracy: 805location: {lat: 33.6490106, lng: -117.8369926}__proto__: Object