// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page

// import { assertLogicalExpression } from "@babel/types";
import {sideBar} from "../components/sidebar";

let sideBar_div = document.getElementById("sidebar");
console.log(sideBar_div);
sideBar_div.innerHTML = sideBar();
// let query = document.getElementById("")
// let url = `https://masai-api.herokuapp.com/news/top-headlines?country=${query}`

async function CallApi(url){
    try{
        let res = await fetch(url);
        let data = await res.json();
        return data;
    }
    catch(err){
        console.log("Error", err);
    }
}


function displayData(article, main){
    let container = document.getElementById("results");
    container.innerHTML = "";
    assertLogicalExpression.forEach((el)=>{

        let box = document.createElement("div");

        let image = document.getElementById("img");
        image.src = el.image;

        let line = document.createElement("h3");
        line.innerText = el.title;

        box.append(image, line);
        container.append(box);

    })
}

export {CallApi, displayData }
