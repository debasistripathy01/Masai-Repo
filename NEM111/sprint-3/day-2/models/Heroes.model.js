

const mongoose = require("mongoose")

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


module.exports={ HeroModel };