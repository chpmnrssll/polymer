module.exports = {
    db : {
        user : "admin",
        password : "VhJrmKb1KvuI",
        uri : process.env.OPENSHIFT_MONGODB_DB_URL,
        port : process.env.OPENSHIFT_MONGODB_DB_PORT,
        name : "polymer"
        // Connection URL: mongodb://$OPENSHIFT_MONGODB_DB_HOST:$OPENSHIFT_MONGODB_DB_PORT/
    },
    security : {
        tokenLife : 3600    // 1hr (in seconds)
    },
    server : {
        port: process.env.OPENSHIFT_NODEJS_PORT || 80, // process.env.PORT
        ip: process.env.OPENSHIFT_NODEJS_IP
    }
};
