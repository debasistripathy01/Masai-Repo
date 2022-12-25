const fs = require("fs");
const http = require("http");

const server = http.createServer((req,res) =>{
    if(req.url=="/textsync"){
        let file = fs.readFileSync("./file.txt",{encoding:"utf-8"});
        res.end("Reading Complete");
    }else if(req.url == "/textasync"){
        let file = fs.readFile("./file.txt",{encoding:"utf-8"});
        res.end("Reading Complete")
    }else if(req.url=="/textstream"){
        let readStream = fs.createReadStream("./file.txt",{encoding:"utf-8"});
        readStream.pipe(res);
    }
})

server.listen(3000);