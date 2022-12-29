




const express = require("express");

const fs = require("fs");

const app = express()

app.use(express.json());


// Creating a middleware Logger 

const Logger =(req, res, next)=>{
    fs.appendFile('logs.txt', `Method: ${req.method}, Route: ${req.url}, user-agent: ${req.headers['user-agent']}\n`, (err) => {
        if (err) {
          console.error(err);
        }
      });
      next();
    
}
app.use(Logger);



// Creating the Validator for the validation 

// const validator =(rq, res, next)=>{
//     if(req.method=="POST"){
//         const body = req.body;
//         if(body.roll_no && body.name && body.location && body.course){
//             if((typeof body.roll_no == "number") && (typeof body.name=="string") && ( typeof body.course =="string" ) && (typeof body.location=="string")){
//                 next();
//             }
//             else{
//                 res.send("validation failed");
//             }
//         }
//         else{
//             next();
//         }
//     }
// }
const validator =( req, res, next)=>{
    const password = req.query.password;
    const role = req.query.role;
  if (req.method === 'PATCH' || req.method === 'DELETE') {
    if (password === '7877' && (role === 'admin' || role === 'teacher')) {
      next();
    } else {
      res.send("You are not authorised to do this operation");
    }
  } else {
    next();
  }
}
app.use(validator);



// Data vase 

let dataBase = require("./db.json")



// API to add a student

app.post('/students/addstudent', (req, res) => {
    const student = {
      roll_no: req.body.roll_no,
      name: req.body.name,
      location: req.body.location,
      course: req.body.course
    };
    database.students.push(student);
    fs.writeFileSync('db.json', JSON.stringify(database));
    res.send(student);
  });

  // API to add Teacher

  app.post('/teachers/addteacher', (req, res) => {
    const teacher = {
      emp_id: req.body.emp_id,
      name: req.body.name,
      sub: req.body.sub,
      exp: req.body.exp
    };
    database.teachers.push(teacher);
    fs.writeFileSync('db.json', JSON.stringify(database));
    res.send(teacher);
  });
  







// GET the data from JSON-Server

app.get("./students", (req, res)=>{
    const data = fs.readFileSync("./db.json", "utf-8")
    const students = JSON.parse(data).students;
    res.send(students);
})

// Getting students by roll number

app.get('/students/:roll_no', (req, res) => {
    const student = database.students.find(s => s.roll_no === parseInt(req.params.roll_no));
    if (student) {
      res.send(student);
    } else {
      res.send('Student not found');
    }
  });


  //Getting teacheras 

  app.get('/teachers', (req, res) => {
    res.send(database.teachers);
  });


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

// app.use(passwordGuard)



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