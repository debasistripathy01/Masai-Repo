// import { blockStatement } from "@babel/types";

let url = "https://masai-mock-api-2.herokuapp.com/news?q=";
let url2 = "https://masai-mock-api-2.herokuapp.com/news/top-headlines?country=";

let data = JSON.parse(localStorage.getItem("news_data")) || [];


let id;

function debounceSearchFunc(DisplayData, delay){
    if(id){
        clearTimeout(id);
    }
    id = setTimeout(function(){
        DisplayData();
    }, 2000);
}






let new_data;
async function DisplayData(){
    let query = document.getElementById("search_box").value
    try{
        let res = await fetch(`${url}${query}`);
        let data = await res.json();

        new_data = data.articles;
        console.log("data is :",new_data);

        if(new_data !== undefined){
            displayNews(new_data);
        }
        
    }catch(error){
        console.log(error);
    }
};

function displayNews(data){

    let container = document.getElementById("news_result");
    container.value = null;

    data.forEach((elem)=>{
        let box = document.createElement("div");
        box.setAttribute("class", "news");

        let image = document.createElement("img");
        image.src = elem.urlToImage;

        let link = document.createElement("p");
        link.innerHTML = elem.url;
        link.style.color = "blue";

        let title = document.createElement("p");
        title.innerText = elem.title;

        let author = document.createElement("p");
        author.innerText = elem.author;

        let desc = document.createElement("p");
        desc.innerText = elem.description;

        link.addEventListener("click", ()=>{
            submitFunc(elem);
        });

        box.append(image, link, title, author);
        container.append(box);
    });
}

function submitFunc(elem){
    data.push(elem);
    localStorage.setItem("news_data", JSON.stringify(data));
    window.location.href = "./news.html";
}


document.getElementById("in").addEventListener("click", submitIndia(elem));
document.getElementById("us").addEventListener("click", submitUs(elem));
document.getElementById("ch").addEventListener("click", submitChina(elem));
document.getElementById("uk").addEventListener("click", submitUK(elem));
document.getElementById("nz").addEventListener("click", submitNz(elem));


let country_data;
function countryData(){

async function DisplayData(){
    let query = document.getElementById("country_code").value
    try{
        let res = await fetch(`${url2}${query}`);
        let data = await res.json();

        country_data = data.articles;
        console.log("Country data is :",new_data);

        if(country_data === undefined){
            displayNews(new_data);
        }
        else{
            displayNews(country_data);
        }
        
    }catch(error){
        console.log(error);
    }
}
}


function submitIndia(elem){
    countryData();
};

function submitUs(elem){
    countryData();
};
function submitChina(elem){
    countryData();
};
function submitUK(elem){
    countryData();
};
function submitNz(elem){
    countryData();
};
