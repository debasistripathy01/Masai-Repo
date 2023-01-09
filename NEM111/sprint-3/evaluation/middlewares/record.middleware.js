
const express = require("express");
const fs = require("fs");
const record = (req, res, next)=>{
    const {id} = req.params;
    const message = `The document with id: ${id} has been ${req.method === 'PATCH' ? 'updated' : 'deleted'}.\n`;
    fs.appendFile("records.txt", message, (err)=>{
        if(err){
            console.log(err);
        }
        next();
    })
}

module.exports = record;