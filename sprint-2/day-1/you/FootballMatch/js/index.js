


const FirstUrl = "https://jsonmock.hackerrank.com/api/football_matches?year=2011";

const team1Url = "https://jsonmock.hackerrank.com/api/football_matches?";


let Promise = [];
let box = document.getElementById("container");


let yearSelected=()=>{
    box.innerHTML = null;
    let value = document.getElementById("year").value;

    FirstUrl += `year=${value}`;
    console.log(FirstUrl);


    for(let i=0; i <= 300; i++){
        FirstUrl += `&page=${i}`;
        try{
            let PromiseOne = fetch(FirstUrl).then((res)=>res.json());
            Promise.push(PromiseOne);
            console.log(Promise);
        }
        catch(err){
            console.log(err);
        }
    }
}

let getData=async()=>{

    let data = await Promise.all(Promise);



}











// sleep(1000)
// .then((res)=>console.log(res))
// .catch((err)=>console.log(err))




// function sleep(){
//     return new Promise((res, rej)=>{
//         if(typeof delay !== "number"){
//             rej("Rejected")
//         }

//         setTimeout(() => {
//             res("Rejected");
//         }, delay);
//     });
// }

let data = 1234;

// let submit = ()=>{
//     let pin = document.getElementById("pin").value;

//     let p = new Promise((res, rej)=>{
//         if(+pin === data){
//             res("correct Pin");
//         }
//         else{
//             rej("wrong pin")
//         };
//     });

//     p.then((res)=>{
//         console.log(res);
//     }).catch((error)=>{
//         console.log(res);
//     }).finally(()=>{
//         console.log("PPromise Executed");
//     });
// };





