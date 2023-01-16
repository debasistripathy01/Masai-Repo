const express = require("express");
const mongoose = require("mongoose");
const {connection} =require("./configs/db");

const app = express();

app.use(express.json());


app.get("/", (req, res)=>{
    res.send("WElcome");
})






app.listen(process.env.PORT, async()=>{
    // console.log("connected to 4300 port ");
    try{
        await connection;
        console.log("successfully connected to Mongo DB");
        
    }catch(err){
        console.log(err);
        console.log("Error at connecting mognoose")
    }
})