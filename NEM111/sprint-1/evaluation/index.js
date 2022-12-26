

 const input = process.argv;



const express = require("express")
const app = express()

const ipaddress = require("dns");


const filesystem = require("fs");

const cowsay = require("cowsay");

const content = ["Aman", "Albert", "Varun", "Rajat", "Nrupul"];


app.get("/",(req,res)=>{
    res.send("WELCOME TO EMPLOYEE MANAGEMENT SYSTEM")

})

app.get("/address", (req, res)=>{
    const address = ( website ) =>{
        ipaddress.lookup(website, (err, adddress)=>{
            console.log(adddress);
        })
    
    }
})


//writeinfile 
app.get("/writeinfile", (req, res)=>{
    const writeinfile = (fileName,content)=>{
        filesystem.writeFile(fileName, content,(err)=>{
            console.log(err);
    
        });
    };
    
})









// enternames("employee.txt", content);
app.get("/enternames", (req, res)=>{
    const enternames =(fileName, content)=>{
        filesystem.writeFile(fileName, content, (err)=>{
            console.log(err);
        })
    }
})






// readAFile, deleteFile, makeCowSay



app.get("/alldetails", (req, res)=>{
    const alldetails =(fileName)=>{
        filesystem.readFile("./"+ fileName, {encoding: "utf-8"}, (err, data)=>{
            if(err){
                res.send(err)
            }
        })
    }
})


app.get("/delete", (req, res)=>{
const deleteFile =(fileName)=>{
    filesystem.unlink("./"+fileName, (err)=>{
        if(err){
            console.log(err);
        }
        console.log("File has been deleted")
    })

}
});


const makeCowSay = (content)=>{
    console.log(`Cow Says ${content}`);
}
cowsay.list(makeCowSay);






adddress("masaischool.com");
writeinfile("employee.txt", "Employee names are as follows:");
alldetails("employee.txt")
deleteFile("employee.txt");

makeCowSay("employee.txt")

app.listen(8080, ()=>{
    console.log("Listen on PORT 8080")
})


