
const mongoose = require("mongoose")

const userData = new mongoose.Schema({
    name:String,
    email:String,
    password:{type:String,required:true},
    age: Number
})
const UserModel = mongoose.model("user",userData)
module.exports = {UserModel};