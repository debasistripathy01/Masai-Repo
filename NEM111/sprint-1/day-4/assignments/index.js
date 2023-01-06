


const http = require("http");

const fs = require("fs");
const { response } = require("express");

const server = http.createServer((req, res)=>{
    if(req.url ==="/"){
        res.end("HOME PAGE");

    }
    else if(req.url === "/data"){
        fs.readFile("./data.json", (error, data)=>{
            if(err){
                res.write(err);
                res.end()
            }
            else{
                res.end(data);
            }
        })
    }
    else if(req.url === "/adddetails" && req.method==="POST"){
        // Write some Logic to work it out
        let string ="";
        req.on("data",(chunk)=>{
            string += chunk
        })
        // res.end("Data has been entered")
        req.on("end",()=>{
            console.log(string)
        })
        res.end("Data Has been entered");
    }
    else if(req.url === "/reports"){
        res.setHeader("Content-type", "text/html");
        res.end("<h1>Reports</h1>")
    }
    else if (req.url === "/movies"){
        // const movie = fs.readFileSync("./lecture.txt", "utf-8");
        // // res.end("movies are read")
        // res.end(movie)

        const movie = fs.createReadStream("./lecture.txt", "utf-8")
        movie.pipe(res)
    }
    else{
        res.end("<h1>Invalid EndPoint</h1>")
    }
})

server.listen(4500,()=>{
    console.log("Listening to 4500")
})