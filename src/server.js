require('dotenv').config();

const app = require('./app/app');

app.listen(app.get("port"), () =>{
    console.log(`Serve deployed on ${app.get("enviroment")} mode and port: ${app.get("port")}`);
});