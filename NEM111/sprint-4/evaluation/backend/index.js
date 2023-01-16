const express = require("express");
const mongoose = require("mongoose");


const app = express();

app.use(express.json());


app.get("/", (req, res)=>{
    res.send("WElcome");
})





app.listen(process.env.PORT, ()=>{
    console.log("connected to 4300 port ");
})