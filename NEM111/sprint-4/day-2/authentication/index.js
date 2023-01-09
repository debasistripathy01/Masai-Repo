const express = require("express");
const { connection } = require("./config/db");

const app = express();
app.use(express.json())

app.post("/register", (req, res)=>{
    res.send("registered");
})


app.post("/login", (req, res)=>{
    res.send("Logged In for the database")
})

app.get("/",(req, res)=>{
    res.send("Welcome to HomePage")
})

app.listen(4300, async()=>{
    try{
        await connection
    }catch(err){
        console.log(err);
        console.log("Error in ")
    }

    console.log("App is listening to 4300");
});

