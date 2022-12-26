// inbuilt module - 
        // 1. OS
        // 2. DNS
        // 3. FS
        // 4. crypto
        // 5. path
// Sum , sub, division, ----> import export  (user defined Local Module)

// Asynchronous Behaviour

// 2. Js is single Threaded



// const checkIsEven = require("is-even");
// let result = checkIsEven(1000)


// console.log(result)

const fs = require("fs");



// let data
// try{
// data = fs.readFileSync("./lecture.txt", { encoding: "utf-8"})
// }
// catch(err){
//     console.log(err)
// }
// console.log(data)





// console.log(fs)
// fs.readFile("./lecture.txt",{encoding:"utf-8"}, (err, data)=>{
//     if(err){
//         console.log("Error")
//         console.log("Cannot read FIle")
//     }else{
//         console.log(data)
//     }
// })

// console.log("Bye! Guys")


// fs.writeFileSync("./lecture2.txt","This is my first Project", (err)=>{
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log("Data has writtemn")
//     }
// })


// let data;


//     data  = fs.appendFile("./lecture2.txt", "THis is the second line that I am writting.", (err)=>{
//         if(err){
//             console.log(err);
//         }
//         else{
//             console.log("appended")
//         }
//     });



// port => 

// const http = require("http")

// const server = http.createServer((req, res)=>{
//     if(req.url==="/"){
//         res.end(`<h1>This is My Home Page</h1>`)
//     }
//     else if(req.url==="/data"){
//         res.end("Data will be here");
//     }
// })
// // console.log(http)


// server.listen(4500, ()=>{
//     console.log("Server is Listening to 4500 Port ")
// })

import Button from "/";

const myButton =()=>{

    const [value , setValue] = useState(false);


    const handleClick=()=>{
        setValue(true);
    }
    return (
        <div>
            {value? <Button /> : null}
            <button onCLick={()=>{handleClick}}>{value}</button>
        </div>
    )
}