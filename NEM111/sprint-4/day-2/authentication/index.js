const express = require("express");
const { connection } = require("./config/db");
const { JsonWebTokenError } = require("jsonwebtoken");
const jwt = require("jsonwebtoken");
const app = express();
const { UserModel } = require("./schemas/user.model");

app.use(express.json())

// app.get("/", (req, res)=>{
//     console.log("WELCOME")
// })


//REGISTER THE CLIENT DATA
app.post("/register", async(req, res)=>{

    const payload = req.body;
    try{
        const user = UserModel(payload);
        await user.save();
        res.send("User data is registered");

    }catch(err){
        console.log(err);
        console.log("Error while registering the data");
    }
    res.send("registered");
})

//LOGIN user using the data

app.post("/login", async(req, res)=>{
    const { email, password}= req.body;
    try{

        const user = new UserModel({email: email, password: password});
        if(user.length > 0){
            res.send({"message":"Login Successful", "token":"abc123"})
        }
        else{
            res.send("Wrong Credentials")
        }
        console.log(user);
    }catch(err){
        console.log(err);
        console.log("Error while validating email and password");
    }

    res.send("Logged In for the database")
})

// ABout the data
app.get("/about", (req, res)=>{
    res.send("About Page");

})
app.get("/data", (req, res)=>{
    const token = req.headers.authorization
    console.log(token)
    jwt.verify(token, "masai", (err, decoded)=>{
        if(err){
            res.send("invalid Token");
        }else{
            res.send("Data....")
        }

    })

    // if(token === "abc123"){
    //     res.send("data...")
    // }
    // else{
    //     res.send("Login First")
    // }

})

app.get("/cart", (req, res)=>{
    const token = req.query.token
    jwt.verify(token, "masai", (err, decoded)=>{
        if(err){
            res.send("invalid Token");
        }else{
            res.send("CArt....")
        }
    })
})

app.get("/contact", (req, res)=>{
    res.send("Contact Page");
})

app.get("/",(req, res)=>{
    res.send("Welcome to HomePage")
})

app.listen(4300, async()=>{
    try{
        await connection;
        console.log("connected to the DB ");
    }catch(err){
        console.log(err);
        console.log("Error in connecting to MOngo ")
    }

    console.log("App is listening to 4300");
});

