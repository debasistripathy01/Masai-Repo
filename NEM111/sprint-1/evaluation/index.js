

 const input = process.argv;



// const express = require("express")
// const app = express()

const dns = require("node:dns");

const http = require('http');
const fs = require('fs');
const cowsay = require('cowsay');
const dns = require('dns');
const url = require('url');


const content = ["Aman", "Albert", "Varun", "Rajat", "Nrupul"];
let param = process.argv[2];




const server = http.createServer((req, res)=>{

    // "/" EndPoint
    if(req.url === "/"){
        res.setHeader("Content-type", "text/html");
        res.end("<h1>Employee Management System</h1>");

    }
    // "/writeinFIle" EndPoint 

    else if(req.url === "/writeinfile"){
        filesystem.writeFile("./employee.txt", "Employee names are as follows:", (err)=>{
            if(err){
                res.end("there is an error while writing into the file");
                console.log(err);
            }
            else{
                res.setHeader("Content-type", "text/html");
                res.end("<h1>The data has been is written in the file</h1>")
            }
        })
    }

    // "/enternames" endPoint to Enter all the Names of the students 

    else if(req.url === "/enternames"){ 
        content.map(el=>{
            filesystem.appendFile("./employee.txt", `\n${el}`,(err)=>{
                if(err){
                    res.end("There is some error while adding the Names");
                    console.log(err);
                }
                
            })
        })
    }

    else if(req.url==="/alldetails"){
        filesystem.readFile("./employee.txt", "utf-8", (err, data)=>{
            if(err){
                res.end("There is some error while reading the Employee data");
                console.log(err);
            }
            else{
                res.end(cowsay.say({
                    text: data
                }))
            }
        })
    }


    // address endpoint Creating

    else if(req.url === "/address"){
        dns.lookup(param, (err,address, family)=>{
            res.write("The IP address is \n");
            res.end(address);
        })
    }

    // Delete Endpoint creating it 

    else if (req.url==="/delete"){
        filesystem.unlink("./employee.txt", (err)=>{
            if(err){
                res.end("THere is some error deleting");
                console.log(err);
            }
            else{
                res.setHeader("Content-type", "text/html");
                res.end("<h1>File has been deleted</h1>")
            }
        })
    }
    else{
        res.setHeader("Content-type", "text/html");
        res.end("<h1>Invalid Endpoint</h1>");
    }
})



server.listen(3500, ()=>{
    console.log("Listen on PORT 3500")
})

// app.get("/",(req,res)=>{
//     res.send("WELCOME TO EMPLOYEE MANAGEMENT SYSTEM")

// })




// app.post("/address", (req, res)=>{
//    const {website} = req.body
//     // const address = ( website ) =>{
//         ipaddress.lookup(website, (err, address)=>{
//             if(err){
//                 console.log(err);
                
//             }
//             else{
//                 res.send(address)
//             }
//             console.log(address);
//         })
    
//     // }
// })


//writeinfile 
// app.get("/writeinfile", (req, res)=>{
//     const writeinfile = (fileName,content)=>{
//         filesystem.writeFile(fileName, content,(err)=>{
//             console.log(err);
    
//         });
//     };
    
// })









// enternames("employee.txt", content);
// app.get("/enternames", (req, res)=>{
//     const enternames =(fileName, content)=>{
//         filesystem.writeFile(fileName, content, (err)=>{
//             console.log(err);
//         })
//     }
// })






// readAFile, deleteFile, makeCowSay



// app.get("/alldetails", (req, res)=>{
//     const alldetails =(fileName)=>{
//         filesystem.readFile("./"+ fileName, {encoding: "utf-8"}, (err, data)=>{
//             if(err){
//                 res.send(err)
//             }
//         })
//     }
// })


// app.get("/delete", (req, res)=>{
// const deleteFile =(fileName)=>{
//     filesystem.unlink("./"+fileName, (err)=>{
//         if(err){
//             console.log(err);
//         }
//         console.log("File has been deleted")
//     })

// }
// }); 




// const makeCowSay = (content)=>{
//     console.log(`Cow Says ${content}`);
// }
// cowsay.list(makeCowSay);






// adddress("masaischool.com");
// writeinfile("employee.txt", "Employee names are as follows:");
// alldetails("employee.txt")
// deleteFile("employee.txt");

// makeCowSay("employee.txt")




