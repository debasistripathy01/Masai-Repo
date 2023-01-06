




const express = require("express");

const fs = require("fs");
const { type } = require("os");
const app = express()

app.use(express.json());


// Creating the Validator for the validation 

const validator =(rq, res, next)=>{
    if(req.method=="POST"){
        const body = req.body;
        if(body.roll_no && body.name && body.location && body.course){
            if((typeof body.roll_no == "number") && (typeof body.name=="string") && ( typeof body.course =="string" ) && (typeof body.location=="string")){
                next();
            }
            else{
                res.send("validation failed");
            }
        }
        else{
            next();
        }
    }
}
app.use(validator);


// Creating a middleware Logger 

const Logger =(req, res, next)=>{
    const text =    `${req.method}, ${req.url}, ${req.headers["user-agent"]}`;
    const write = fs.appendFile("./logs.txt", text, "utf-8");

    next();
}
app.use(Logger);


// password 

const passwordGuard =( req, res, next)=>{
    const { password } = req.query;
    if(password == "7877"){
        next();
    }
    else{
        res.send("You are not authorised to do this operation");
    }
}

//







// GET the data from JSON-Server

app.get("./students", (req, res)=>{
    const data = fs.readFileSync("./db.json", "utf-8")
    const students = JSON.parse(data).students;
    res.send(students);
})

// Creating the Post request to ADD details

app.post("/students/create", (req, res)=>{
    const studentsData = req.body;
    const data = fs.readFileSync("./db.json", {encoding:"utf-8"});
    const parseData = JSON.parse(data);
    const students = parseData.students;
    students.push(data);
    const recentData = JSON.stringify(parseData);
    fs.writeFileSync("./students.json", recentData, "utf-8");
    res.send("students data created");
})

app.use(passwordGuard)



// PUT request for the data 

app.put("./db.json/:students", (req, res)=>{
    const studentsId = req.params.roll_no;
    const students = req.body;
    const prevData = fs.readFileSync("./db.json", {encoding: "utf-8"});
    const parseData = JSON.parse(prevData);
    const prevParsedData = parseData(data.students);
    const newData = prevParsedData.map((el)=>{
        if(students.roll_no ==Number(roll_no)){
            return students;
        }
        else{
            return el;
        }
    })
    prevParsedData.students = newData;
    const recentData = JSON.stringify(prevParsedData);
    students.writeFileSync("./db.json", recentData, "utf-8");
    res.send("Delete Students Data")

})
// app.use()

app.listen(3500, ()=>{
    console.log("liestiending to 3500 endPoint")
})