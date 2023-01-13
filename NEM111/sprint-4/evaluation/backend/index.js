const express = require("express");
const mongoose = require("mongoose");
const {connection} =require("./configs/db");

const app = express();

app.use(express.json());


app.get("/", (req, res)=>{
    res.send("WElcome");
})


//Register API Endpoint

app.post("/users/register", (req, res)=>{
    res.send("User registered SUccessfullly");
})

//Login API endpoint
app.post("/users/login",(req, res)=>{
    res.send("Logged in user Successfully");
} )


// SHowing the existing Posts of the Logged in Users
app.get("/posts", (req, res)=>{
    res.send("Users Posts read Successfully");



})



// Logged in User POsts Update API endPoint

app.patch("/posts/update", (req, res)=>{
    res.send("Users Posts Patching successful")
})

// Deleting the Posts of the Login Users

app.delete("/posts/delete", (req, res)=>{
    res.send("Deleting the Posts of the Users successfully");
})



//Get all the Queries API endpoint





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