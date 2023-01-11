// mongodb+srv://debasis:<password>@cluster0.h9ccc5i.mongodb.net/?retryWrites=true&w=majority



const mongoose = require("mongoose");
require("dotenv").config()
// const connection = mongoose.connect("mongodb://127.0.0.1:27017/superheroDB")
const connection = mongoose.connect(process.env.mongoURL);
// const PORT = process.env.KEY
// const PORT = process.env.API

module.exports={connection};
// const connection = mongoose.co
// connect(PORT)



