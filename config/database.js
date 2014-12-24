var mongoose = require("mongoose"),
  dbConfig = require("./config").db(),
  authString = dbConfig.user + (dbConfig.user.length > 0 ? ":" : "") + dbConfig.password,
  connectionString = "mongodb://" + authString + dbConfig.uri + ":" + dbConfig.port + "/" + dbConfig.name;

//connection string format: "mongodb://<user>:<password>uri:port/<name>"
mongoose.connect(connectionString);

mongoose.connection.on("error", function(err) {
  console.log("DB connection error:", err.message);
  console.log(connectionString)
  mongoose.connection.state = { message: "DB connection error", connectionString: connectionString };
});

mongoose.connection.once("open", function() {
  console.log("Connected to DB!");
  mongoose.connection.state = { message: "Connected to DB", connectionString: connectionString };
});

module.exports = mongoose.connection;