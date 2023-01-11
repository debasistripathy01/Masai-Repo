


// Import all the details to this File 
const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");
const villianRouter = express.Router();

const {VillianModel} = require("../models/Villian.model");

//Villian Routes to add villian details 






villianRouter.post("/addvillian", async(req, res)=>{
    try{

        const viliianData  = req.body;
        const villian = new VillianModel(viliianData);
        await villian.save();
        console.log(viliianData);
        res.send("added data of Villian")
    }catch(err){
        console.log(err);
        console.log("Error while doing post request")
    }
})

module.exports ={villianRouter};