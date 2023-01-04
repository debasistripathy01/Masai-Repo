



const express = require("express");
const {connection, HeroModel, heroSchema} = require("./db.js")

const app = express();

app.use(express.json())

app.get("/",(req, res)=>{
    res.send("Welcome")
})

app.get("/heros", async(req, res)=>{
    const heros = await HeroModel.find()
    res.send(heros)
})


app.post("/addhero", async(req, res)=>{
    const data  = req.body;
    const hero = new HeroModel(data);
    await hero.save();
    console.log(data);
    res.send("added data")
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
    
    console.log("running on port 4500");
})