const mongoose = require("mongoose");
const express = require("express");

const connection = mongoose.connect(process.env.API);

module.exports={connection};