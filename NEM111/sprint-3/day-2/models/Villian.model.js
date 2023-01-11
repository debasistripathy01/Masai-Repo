
const mongoose = require("mongoose");

const villianSchema = mongoose.Schema({
    name: {type: String, require: true},
    city: {type: String, require: true},
    villian: {type: String, require: true},
    language: {type: String, require: true},
    isActive: {type: Boolean, require: true},
},
{
    versionKey: false
})
const VillianModel = mongoose.model("villian", villianSchema)



module.exports={ VillianModel }

