


const express = require("express");
const mongoose = require("mongoose");
const heroRouter = express.Router();

const { HeroModel } = require("../models/Heroes.model");

heroRouter.get("/heroes", async(req, res)=>{
    // let query = req.query;
    let query = req.query;
    const city = req.query.city
    const language= req.query.language
try{

    
    const active = req.query.isActive;

    const heros = await HeroModel.find({language:language, isActive:isActive})
    // console.log(heros)
    res.send(heros)
}catch(err){
        console.log(err);
        console.log("Error getting query")
    }
    

})


heroRouter.post("/addhero", async(req, res)=>{
    try{
        const data = req.body;
        const hero = new HeroModel(data);
        await hero.save();
        // console.log(hero);
        res.send("Add the HEro");
    }catch(err){
        console.log(err);
        console.log("Error in adding the Hero Profile")
    }
})
// Patching the data in the Server

heroRouter.patch("/edithero/:id", async(req, res)=>{
    try{
        const ID = req.params.id
        await HeroModel.findByIdAndUpdate({_id: ID}, payload)
        const payload = req.body;
        res.send('updated the Hero Data which id is ${ID}')
    }catch(err){
        console.log(err);
        console.log("error while patching");
    }
})

// Deleteing the data in the Server of Hero Model

heroRouter.delete("/delete/:id", async( req, res)=>{
    try{
        const ID = req.params.id;
        await HeroModel.findByIdAndDelete({_id:ID});
        res.send(`Deleted the Hero data of id ${ID}`)
    }
    catch(err){
        console.log(err, "Error while deleting data");
    }
})

heroRouter.post("/addhero", async(req, res)=>{
    try{

        const data  = req.body;
        const hero = new HeroModel(data);
        await hero.save();
        console.log(data);
        res.send("added data")
    }catch(err){
        console.log(err);
        console.log("Error while doing post request")
    }
})


module.exports={heroRouter}