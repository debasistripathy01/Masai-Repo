const express = require("express")


const validator = (req, res, next)=>{
    const { title, genre, price, author} = req.body;
    if (!title || !genre || !price || !author) {
        return res.send("err: All fields are not present")
    }
    next();
}

module.exports=validator;