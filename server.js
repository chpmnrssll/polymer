var bodyParser = require("body-parser"),
  compression = require("compression"),
  express = require("express"),
  methodOverride = require("method-override"),
  logger = require("morgan"),
  passport = require("passport"),
  favicon = require("serve-favicon"),
  config = require("./config/config"),
  database = require("./config/database"),
  app = express();

app.use(favicon(__dirname + "/public/favicon.ico"));

// set the static files location (will be / for users)
app.use(express.static(__dirname + "/public"));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
  extended: false
}));

// parse application/json
app.use(bodyParser.json({
  type: "application/json"
}));

// use gzip compression
app.use(compression());

// simulate DELETE and PUT
app.use(methodOverride());

// log every request to the console
app.use(logger("dev"));

app.use(passport.initialize());

// setup passport & strategies
require("./config/passport");

// setup routes
require("./routes")(app);

app.listen(config.server.port, config.server.ip, function() {
  console.log("App started.");
});