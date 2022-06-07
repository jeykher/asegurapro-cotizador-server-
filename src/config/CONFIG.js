const CONFIG = {
    enviroment:process.env.ENVIROMENT || "development",
    server: {
        port: process.env.SERVER_PORT || 3000
    }
};

module.exports = CONFIG;