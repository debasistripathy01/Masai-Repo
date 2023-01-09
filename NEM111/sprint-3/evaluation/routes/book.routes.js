const express = require("express");
const app = express();
const booksRouter = express.Router(); 
const record = require("../middlewares/record.middleware")
const validator = require("../middlewares/validator.middleware");
const Book = require("../models/book.model")
// GET REquest with ALl the Books and QUERY
booksRouter.get("/books", async(req, res)=>{
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

booksRouter.post("/addbook", validator, async(req, res)=>{
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

booksRouter.delete("/delete/:id", async(req, res)=>{

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

booksRouter.patch("/editbook/:id", record, async(req, res)=>{
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


module.exports = booksRouter;