const mogoose = require("mongoose");

const connection = mogoose.connect("mongodb://127.0.0.1:27017/dataofusers");

module.exports={
    connection
}