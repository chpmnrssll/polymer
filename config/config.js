module.exports = {
  security: {
    tokenLife: 3600 // 1hr (in seconds)
  },
  server: function () {
    switch (process.env.NODE_ENV) {
      case 'dev':
        return ({
          port: process.env.PORT,
          ip: process.env.IP
        });
      case 'dist':
        return ({
          port: process.env.OPENSHIFT_NODEJS_PORT,
          ip: process.env.OPENSHIFT_NODEJS_IP,
        });
    }
  },
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
        return ({
          user: process.env.OPENSHIFT_MONGODB_DB_USERNAME,      // "admin",
          password: process.env.OPENSHIFT_MONGODB_DB_PASSWORD,  // "VhJrmKb1KvuI",
          uri: process.env.OPENSHIFT_MONGODB_DB_HOST,
          port: process.env.OPENSHIFT_MONGODB_DB_PORT,
          name: "polymer"
        });
    }
  }
};