const path = require('path');
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const compression = require('compression');

const CONFIG = require('../config/CONFIG');

let router = null;

const app = express();

app.set("appName", "servidoresexpress");
app.set("json spaces",4);
app.set("port", CONFIG.server.port);
app.set("enviroment", CONFIG.enviroment);

if(app.get("enviroment") === "production"){
    router = require('../routes/routerProduction');
}
else{
    router = require('../routes/routerDevelopment');
}

app.use(morgan('dev'));
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());
app.use(cors());
app.use(compression());

if(app.get("enviroment")==="production"){
    app.use(express.static(path.join(__dirname, "../../", "build")));
}

app.use('/asegurapro/cotizador', router);

module.exports = app;