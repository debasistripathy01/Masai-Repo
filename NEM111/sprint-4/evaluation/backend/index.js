const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config()
const connection =require("./configs/db");
const { UserModel } = require("./models/User.moel");

const app = express();

app.use(express.json());


app.get("/", (req, res)=>{
    
    console.log("WELCOME PAGe")
    res.send("WElcome");
})


//Register API Endpoint

app.post("/users/register", async(req, res)=>{
    try{
        const { email, password} =req.body;
        await bcrypt.hash(password, 6, (err, hash)=>{
            if(err){
                return res.send("error while creating hasing")
            }
            const user = new UserModel({email, password: hash});
            user.save();
            return res.send("Registering userData is Successfull")
        })

    }catch(err){
        console.log(err);
        console.log("Error while registering the User details")
    }
})

//Login API endpoint
app.post("/users/login",async(req, res)=>{
    const {email, password} =req.body;
    
    try{
        const user = await UserModel.findOne({email})

        
        const available_paswd = user.password;
        await bcrypt.compare(password, available_paswd, (err, res)=>{
            if(err){
                return res.send("Error while comparing Password or Wrong Password")
            }
            if(res === true){
                const token = jwt.sign({email: user.email,_id:user._id},process.env.jwt_secret_key);
                return res.send({message: "Login Success", token: token, userID: user._id})
            }
        })
        
    }catch(err){
        console.log(err);
        console.log("Error while loging in the User has failed! Dammit!!");
    }
    res.send("Logged in user Successfully");
} )


// SHowing the existing Posts of the Logged in Users
app.get("/posts", (req, res)=>{

    const post = req.body;
    try{

        const query = req.params.query;
        if(!query){
            return res.send("No query found");
        }
        const post_data = new UserModel.findOne({query});
        res.send("FOund all the posts that are stored in the data base");
    }catch(err){
        console.log(err);
        console.log("error while fetching to posts");

    }






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





app.listen(8080, async()=>{
    console.log("connected to 8080 port ");
    try{
        await connection;
        console.log("successfully connected to Mongo DB");
        
    }catch(err){
        console.log(err);
        console.log("Error at connecting mognoose")
    }
})