// mongodb+srv://debasis:<password>@cluster0.h9ccc5i.mongodb.net/?retryWrites=true&w=majority



const mongoose = require("mongoose");

// const connection = mongoose.connect("mongodb://127.0.0.1:27017/superheroDB")
const PORT = process.env.KEY
const connection = mongoose.connect(`${PORT}`)
require("dotenv").config()

const heroSchema = mongoose.Schema({
    name: {type: String, require: true},
    city: {type: String, require: true},
    villian: {type: String, require: true},
    language: {type: String, require: true},
    isActive: {type: Boolean, require: true},
},
{
    versionKey: false
})

const HeroModel = mongoose.model("hero", heroSchema)

module.exports={ connection, heroSchema, HeroModel }

