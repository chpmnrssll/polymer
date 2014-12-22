var mongoose = require("mongoose"),
  config = require("./config").db(),
  authString = config.user + (config.user.length > 0 ? ":" : "") + config.password,
  connectionString = "mongodb://" + authString + config.uri + ":" + config.port + "/" + config.name;

//connection string format: "mongodb://<user>:<password>uri:port/<name>"
mongoose.connect(connectionString);

mongoose.connection.on("error", function(err) {
  console.log("DB connection error:", err.message);
  console.log(connectionString)
});

mongoose.connection.once("open", function() {
  console.log("Connected to DB!");
});

module.exports = mongoose.connection;