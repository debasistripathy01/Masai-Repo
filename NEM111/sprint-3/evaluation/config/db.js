

const mongoose = require("mongoose");

// const PORT = process.env.API_KEY;
// const PORT = process.env.KEY
const connection = mongoose.connect(process.env.API_KEY)
require("dotenv").config();
// const connection = mongoose.connect("mongodb://127.0.0.1:27017/")



module.exports = connection

