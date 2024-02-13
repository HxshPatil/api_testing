const express = require ("express");
const bodyParser= require('body-parser');
const app = express();
const port = 5000; 

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/api", require("./routers/api1_router"), require("./routers/api2_router"), require("./routers/api3_router"));
app.use(express.json());

app.listen(port,()=>{
    console.log(`using port:${port}`);
});
