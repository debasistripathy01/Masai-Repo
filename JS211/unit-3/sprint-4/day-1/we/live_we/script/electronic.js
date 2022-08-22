import navbar from "../component/navbar.js";



document.getElementById("navbar").innerHTML = navbar();


import { display, append } from "./fetch.js";
const url = `https://fakestoreapi.com/products/category/electronics`;

let container = document.getElementById("container");

display(url).then((res)=>{
    console.log(res);
    append(res, container)
})

// let display = async ()=>{
//     let res = await fetch(url);
//     let data = await res.json();
//     console.log(data)
//     append(data)
// }

// display();

// let append = (data) => {
//     let container = document.getElementById("container");
//     data.forEach(({image, title, price})=>{

//         var box = document.createElement("div");

//         let i = document.createElement("img")
//         i.src = image;

//         let t = document.createElement("h3");
//         t.innerText = title;
        
//         let p = document.createElement("p");
//         p.innerText = price;

//         box.append(i,t , p);
//         container.append(box);
//     })
// }
