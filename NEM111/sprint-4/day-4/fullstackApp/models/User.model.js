

const mongoose = require("mongoose")

const userData = mongoose.Schema({
    name: String,
    email: String,
    password: String,
    age: Number
}, {
    versionKey: false
});


const UserModel = mongoose.model("user", userData);
module.exports={UserModel}