



const express = require("express");



const app = express()

const fs = require("fs")
app.use(express.json())  // MIDDLEWAREs 

app.get("/", (req, res)=>{
    res.end("Hello WOrld")
})

// app.get("/data", (req, res)=>{
//     res.end("Data is sent")
// })
// app.post("/addData", (req, res)=>{
//     console.log(req.body);
//     res.end("Data has been recorded")
// })


app.get("/allData", (req, res)=>{
    const data = fs.readFileSync("./db.json", "utf-8");
     const parsed_data = JSON.parse(data)
    console.log(parsed_data)
    res.send(parsed_data)
})


app.get("/student", (req, res)=>{
    const data = fs.readFileSync("./db.json", "utf-8");
    const parsed_data = JSON.parse(data);
    console.log(parsed_data.student);
    res.send(parsed_data)
})


app.post("/addStudent", (req, res)=>{
    const data = fs.readFileSync("./db.json", "utf-8");
    const parsed_data = JSON.parse(data);

    // Adding the NEw student data
    parsed_data.student.push(req.body)

    // Write it in the databse
    fs.writeFileSync("./db.json", JSON.stringify(parsed_data));


    // console.log(parsed_data)
    res.send("Database updated");
    

})


app.listen(4500,()=>{
    console.log("Running at 4500")
})