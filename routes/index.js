var database = require("../config/database");

module.exports = function(app) {
  /*
  app.get("*", function (req, res) {
      res.sendFile(__dirname + "/public/index.html");
  });
  */
  
  app.get("/dbState", function (req, res, next) {
      return res.status(200).json(database.state);
  });
  
  app.get("/errorExample", function (req, res, next) {
      next(new Error("Random error!"));
  });
  
  app.use("/users", require("../routes/users"));
  app.use("/oauth2", require("../routes/oauth2"));
  
  // production error handler (no stacktraces leaked to user)
  app.use(function(err, req, res, next) {
    console.log(err);
    res.status(err.status || 500).json({
      message: err.message,
      error: {}
    });
  });
};