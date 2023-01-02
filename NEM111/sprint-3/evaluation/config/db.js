

const mongoose = require("mongoose");

const PORT = process.env.KEY;

// const connection = mongoose.connect(`${PORT}`)

const bookSchema = mongoose.Schema({
    title: {type: String, require: true},
    price: {type: String, require: true},
    genre: {type: String, require:true},
    author: {type: String, require: true}
}, {
    versionKey: false
});

const Book = mongoose.model("book", bookSchema);
module.exports={bookSchema, Book};

