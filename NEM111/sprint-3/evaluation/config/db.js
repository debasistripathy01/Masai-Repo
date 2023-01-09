
require("dotenv").config();
const mongoose = require("mongoose");

// const PORT = process.env.API_KEY;
// const PORT = process.env.KEY
// const connection = mongoose.connect(process.env.API_KEY)



const connection = mongoose.connect("mongodb://127.0.0.1:27017/bookslibrary")



module.exports = connection

