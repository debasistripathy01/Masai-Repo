const mongoose = require("mongoose");



const main =async()=>{
    try{

        const connection = await mongoose.connect("mongodb://127.0.0.1:27017/students")
        console.log("mongodb connected")
        await Studentmodel.insertMany([{name: "Rahul", age: 24, city: "bangalore", roll_no: 145}, {name: "santosh", age: 25, city: "kolkata", roll_no:123}])
        connection.disconnect();
        console.log("disconnected")
    }catch(err){
        console.log(err)
        console.log("Cannot Connect");
    }
}
main()

const studentSchema = mongoose.Schema({
    name: {type: String, required: true},
    age: {type: Number, required: true},
    city: {type: String, required: true},
    roll_no:{type: Number, required: true}
},
{
    versionKey: false
})


const Studentmodel = mongoose.model("Student", studentSchema)

