



const express = require("express");
const {connection, HeroModel, heroSchema} = require("./db.js")
require("dotenv").config()
const app = express();

app.use(express.json())

app.get("/",(req, res)=>{
    res.send("Welcome")
})

app.get("/heros", async(req, res)=>{
    // let query = req.query;

    try{
        const city = req.query.city
    const language= req.query.language
    const active = req.query.isActive;
    const heros = await HeroModel.find({language: language, active: active})
    res.send(heros)
    }
    catch(err){
        console.log(err);
        console.log("Error getting query")
    }
    

})

// Patching the data in the Server

app.patch("/edithero/:id", async(req, res)=>{


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


// Deleteing the data in the Server

app.delete("/delete/:id", async( req, res)=>{
    try{
        const ID = req.body.id;
        await HeroModel.findByIdAndDelete({_id:ID});
        res.send(`Deleted the Hero data of id ${ID}`)
    }
    catch(err){
        console.log(err, "Error while deleting data");
    }
})

app.post("/addhero", async(req, res)=>{
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



app.listen(4500, async ()=>{
    try{
        await connection
        console.log("Connected to DB")
    }
    catch(err){
        console.log(err);
        console.log("erorr while connecting to db")
    }
    
    console.log(`running on port${process.env.KEY}` );
})