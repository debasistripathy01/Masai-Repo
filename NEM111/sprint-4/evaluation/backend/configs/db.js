const express = require("express");
require("dotenv").config();
const PORT = process.env.mongoURL
const mongoose = require("mongoose");


const connection = mongoose.connect(PORT);
module.exports=connection;
