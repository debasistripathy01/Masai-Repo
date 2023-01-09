

const express = require("express");
const app = express();
const fs = require("fs");

const Book = require("./models/book.model")
const connection = require("./config/db")
const booksRouter = require("./routes/book.routes")
const validator = require("./middlewares/validator.middleware")
const record = require("./middlewares/record.middleware")
// const {connection, Book,bookSchema} = require("./config/db")
app.use(express.json());
require("dotenv").config()

app.get("/", (req, res)=>{
    res.send("App working Fine. Check ! check! Mic 124 !")
});


//Validates all the required fields ***MiddleWare****



// TO record all the Books of updated and Deleted Books





//
app.use(validator);
app.use("/books", booksRouter)

app.listen(4500, async()=>{
    // console.log("Connected to Port 4300");
    try{
        await connection
        console.log("Connected to Database");

    }catch(err){
        console.log(err);
        console.log("Error while connecting to DB");
    }
    console.log(`Running on port${process.env.API_KEY}` );
})





