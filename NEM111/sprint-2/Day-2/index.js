const express = require("express");
const app = express()
app.get("/",(req, res)=>{
    res.send("HOME PAGE")
})




app.get("/students",(req, res)=>{
    res.send("Students PAGE")
})


app.get("/teachers",(req, res)=>{
    res.send("TEACHERs PAGE")
})



app.post("/addstudent",(req, res)=>{
    console.log(req.body)
    res.send("Students added")
})


app.post("/addteachers",(req, res)=>{
    console.log(req.body)
    res.send("teachers added")
})

app.listen(3500, ()=>{
    console.log("liestiending to 3500 endPoitn")
})