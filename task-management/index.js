// console.log("OK")
const express=require("express");
require("dotenv").config();
const database=require("./config/database");
//Routes Ver1
const routesVer1=require("./api/v1/routes/index.route")

database.connect();
const app=express();

//Routes Ver1
routesVer1(app);
const port=process.env.PORT;




app.listen(port,()=>{
    console.log(`App listening on port ${port}`);
})