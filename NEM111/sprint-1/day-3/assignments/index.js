const http = require("http");
const fs = require("fs");
const server = http.createServer((req,res) =>{
    if(req.url=="/public"){
        
        let directory_name = "./Public";
        let filename = fs.readdirSync(directory_name);
        res.end(filename.join(","))
    }
    else if(req.url=="/"){
        
        let directory_name = "../assignments";
        // Function to get current filenames
        // in directory
        let filenames = fs.readdirSync(directory_name);
        
        res.end((filenames.join(",")))
    }
    else if(req.url=="/public/other"){
        let content = fs.readFileSync("./Public/other.js",{encoding:"utf-8"})
        res.end(content);
    }
    else{
        return res.end(" Not found")
    }
})

server.listen(3000)