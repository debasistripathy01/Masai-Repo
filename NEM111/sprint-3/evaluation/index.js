

const express = require("express");
const app = express();
const fs = require("fs");

const Book = require("./models/book.model")
const connection = require("./config/db")
const booksRouter = require("./routes/book.routes")
// const validator = require("./middlewares/validator.middleware")
// const record = require("./middlewares/record.middleware")
// const {connection, Book,bookSchema} = require("./config/db")
app.use(express.json());
require("dotenv").config()

app.get("/", (req, res)=>{
    res.send("App working Fine. Check ! check! Mic 124 !")
});


//Validates all the required fields ***MiddleWare****
const record = (req, res, next)=>{
    const {id} = req.params;
    const message = `The document with id: ${id} has been ${req.method === 'PATCH' ? 'updated' : 'deleted'}.\n`;
    fs.appendFile("records.txt", `Method: ${req.method}, Route: ${req.url}, user-agent: ${req.headers['user-agent']}\n`,message, (err)=>{
        if(err){
            console.log(err);
        }
        next();
    })
}



// TO record all the Books of updated and Deleted Books

const validator = (req, res, next)=>{
    const { title, genre, price, author} = req.body;
    if (!title || !genre || !price || !author) {
        return res.send("err: All fields are not present")
    }
    next();
}

app.get("/books", async(req, res)=>{
    try{
        const {price_low, price_high, genre} = req.query;
        // const genre = req.query.genre;
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


// POST request to add any books in the database;

app.post("/addbook", validator, async(req, res)=>{
    try{

        const data = req.body;
        const book = new Book(data);
        await book.save();
        console.log(data);
        res.send("book is added");
    }catch(err){
        console.log(err);
        console.log("Error while adding the Book")
    }
})


//Delete the Book API endPoint

app.delete("/delete/:id", async(req, res)=>{

    try{

        const ID = req.body.id;
        await Book.findByIdAndDelete({_id:ID});
        res.send(`The book with ${ID} has been Deleted`)

    }catch(err){
        console.log(err);
        console.log("Error while deleting the Book");

    }
})


// PATCH the BOOK or UPDATING the BOOK info API endpoint

app.patch("/editbook/:id", record, async(req, res)=>{
    try{

        const ID = req.params.id;
        await Book.findByIdAndUpdate({_id:ID});
        const payload  = req.body;
        res.send(`Updated the Book with id: ${ID}`);
    }
    catch(err){
        console.log(err);
        console.log("Error encountered while updating the Books");
    }
})

//
app.use(validator);
app.use("/books", booksRouter)

app.listen(4300, async()=>{
    // console.log("Connected to Port 4300");
    try{
        await connection
        // await connection
        console.log("Connected to Database");

    }catch(err){
        console.log(err);
        console.log("Error while connecting to DB");
    }
    console.log(`Running on port${process.env.KEY}` );
})





