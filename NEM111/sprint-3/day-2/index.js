

const express = require("express");
require("dotenv").config();
const app = express();
const {connection} = require("./db");
const {heroRouter} = require("./routes/Hero.route")
const {villianRouter} = require("./routes/Villian.route")


app.use(express.json())

app.get("/",(req, res)=>{
    res.send("Welcome")
})

app.use("/heroes", heroRouter);
app.use("/villians", villianRouter);


app.listen(`process.env.API`, async ()=>{
    try{
        await connection;
        console.log(`Connected to DB Successfully connected to ${process.env.mongoURL}`)
    }
    catch(err){
        console.log(err);
        console.log("erorr while connecting to db");
    }
    // console.log(`running on port${process.env.KEY}` );
});
