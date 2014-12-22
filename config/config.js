module.exports = {
  db: function() {
    switch (process.env.NODE_ENV) {
      case 'dev':
        return ({
          user: "",
          password: "",
          uri: process.env.IP,
          port: 27017,  // process.env.PORT
          name: "polymer"
        });
      case 'dist':
      default:
        return ({
          user: process.env.OPENSHIFT_MONGODB_DB_USERNAME,      // "admin",
          password: process.env.OPENSHIFT_MONGODB_DB_PASSWORD,  // "VhJrmKb1KvuI",
          uri: process.env.OPENSHIFT_MONGODB_DB_IP,
          port: process.env.OPENSHIFT_MONGODB_DB_PORT,
          name: "polymer"
        });
    }
  },
  security: {
    tokenLife: 3600 // 1hr (in seconds)
  },
  server: {
    port: process.env.OPENSHIFT_NODEJS_PORT || process.env.PORT, // 80
    ip: process.env.OPENSHIFT_NODEJS_IP || process.env.IP
  }
};