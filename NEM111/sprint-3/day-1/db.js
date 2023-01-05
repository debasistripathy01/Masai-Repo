const mongoose = require("mongoose");


const main =()=>{

    try{
        const connection = mongoose.connect("mongodb://127.0.0.1:27017/");
        console.log("Connection Mongoose");
        connection.disconnect();
        console.log("Dis-connected")
    }catch(err){
        console.log(err);
        console.log("cannot Connect");
    }
    
}

main();

