



const express = require("express");
const { connection } = require("./config/db")


const { UserModel} = require("./models/User.model")

const app = express();

app.use(express.json());

app.get("/", (req, res)=>{
    res.send("Home Page");

})

app.post("/register", async(req, res)=>{
    const payload = req.body;
    try{
        const user = new UserModel(payload);
        await user.save();
        res.send("user is registered with database");
    }catch(err){
        console.log(err);
        console.log("error while connecting to registration");
    }
})