// Ude Import export (MANDATORY)


import { CallApi, displayData } from ".";
import { sideBar } from "../components/sidebar";


let res = await CallApi(`https://masai-api.herokuapp.com/news?q=${query}`);
console.log("res", res);

let result = document.getElementById("results");
displayData(res, result);



let input = document.getElementById("search_bar");
input.addEventListener("anything",(el)=>{
    let imp = document.getElementById("search_bar").value;
    localStorage.setItem("getting", imp);
    window.location.href= "search.html";
});
