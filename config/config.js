module.exports = {
    db : {
        user : "admin",
        password : "VhJrmKb1KvuI",
        uri : process.env.OPENSHIFT_MONGODB_DB_HOST,
        port : process.env.OPENSHIFT_MONGODB_DB_PORT,
        name : "polymer"
    },
    security : {
        tokenLife : 3600    // 1hr (in seconds)
    },
    server : {
        port : process.env.OPENSHIFT_NODEJS_PORT || process.env.PORT // || 80
    }
};
