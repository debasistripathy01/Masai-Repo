

const mongoose = require("mongoose");
require("dotenv").config();
const PORT = process.env.API_KEY;
// const PORT = process.env.KEY
const connection = mongoose.connect(process.env.API_KEY)



// const connection = mongoose.connect("mongodb://127.0.0.1:27017/bookslibrary")



module.exports = connection

