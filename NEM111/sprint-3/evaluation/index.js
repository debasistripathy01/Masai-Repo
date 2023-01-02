
const mongoose = require("mongoose");
const fs = require("fs");
const express = require("express");
const app = express();
const { Book, bookSchema } = require("./config/db")

app.get("/", (req, res)=>{
    res.send("App working Fine. Check ! check! Mic 124 !")
});


//Validates all the required fields ***MiddleWare****
const validator = (req, res, next)=>{
    const { title, genre, price, author} = req.body;
    if (!title || !genre || !price || !author) {
        return res.send("All fields are not present")
    }
    next();
}


// TO record all the Books of updated and Deleted Books


const record = (req, res, next)=>{
    const {id} = req.params;
    const message = `The document with id: ${id} has been ${req.method === 'PATCH' ? 'updated' : 'deleted'}.\n`;
    fs.appendFile("records.txt", message, (err)=>{
        if(err){
            console.log(err);
            next();
        }
    })
}


// GET REquest with ALl the Books and QUERY
app.get("/books", async(req, res)=>{
    try{
        const {price_low, price_high} = req.query;
        const genre = req.query.genre;
        let query={};
        if(price_low && price_high){
            query = {price: { $gte: price_low, $lte: price_high }}
        }
        const books = await Book.find({genre: genre})
        res.send(books);
    }catch(err){
        console.log(err);
        console.log("Error while doing query");

    }
})





app.listen(4300, ()=>{
    console.log("Connected to Port 4300");
})





