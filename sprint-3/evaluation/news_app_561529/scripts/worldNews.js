// import { blockStatement } from "@babel/types";




let data = JSON.parse(localStorage.getItem("user")) || [];


//-------------------- DebounceSearch Function Applied-----------------//

document.getElementById("search_box").addEventListener("input", ()=>{
    debounceSearchFunc(DisplayData, 2000);
})

let id;

function debounceSearchFunc(DisplayData, delay){
    if(id){
        clearTimeout(id);
    }
    id = setTimeout(()=>{
        DisplayData();
    }, 2000);
}

//------------------------- For Countries to Click -----------------------//

document.getElementById("in").addEventListener("click", countryNews(this.id));
document.getElementById("us").addEventListener("click", countryNews(this.id));
document.getElementById("ch").addEventListener("click", countryNews(this.id));
document.getElementById("uk").addEventListener("click", countryNews(this.id));
document.getElementById("nz").addEventListener("click", countryNews(this.id));




//------------------------Async FUnction and try catch Apply------------------//




//------------------WoRLD NEWS---------------------//
let new_data;

async function DisplayData(){
    let query = document.getElementById("search_box").value
    console.log(query);
    const url = `https://masai-mock-api-2.herokuapp.com/news?q=${query}`;
    try{
        let res = await fetch(url);
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

                //-------For Button  Selected Countries--------//

async function countryNews(elm){
    const url2 = `https://masai-mock-api-2.herokuapp.com/news/top-headlines?country=${elm}`;
    try{
        let res = await fetch(url2);
        let data = await res.json();

        if(data.articles !== undefined){
            displayAccordingToCountry(data.articles);
        }
        

    }
    catch(error){
        console.log(error);
    }
}

//------------------------For SignUP Data Selected COuntries----------------//


let country = document.createElement("h3");
country.innerText = data.country;
if(data.country === "in"){
    document.getElementById("user_country").innerText = "India"
}else if(data.country === "ch"){
    document.getElementById("user_country").innerText = "China"
}else if(data.country === "us"){
    document.getElementById("user_country").innerText = "USA"
}else if(data.country === "uk"){
    document.getElementById("user_country").innerText = "UK"
}else if(data.country === "nz"){
    document.getElementById("user_country").innerText = "New Zealand"
}

let country_data = data.country;

async function showCountryNews(){
    const api = `https://masai-mock-api-2.herokuapp.com/news/top-headlines?country=${country_data}`;
    try{

        let res = await fetch(api);
        let data2 = await res.json();
        let news_data = data2.articles;
        
        if(news_data !== undefined){
            displayAccordingToCountry(news_data);
        }
    }
    catch(error){
        console.log(error);
    }
}


// ---------------------- Append Data Accordingly-----------------------//


function displayNews(data){

    let container = document.getElementById("news_result");
    container.innerHTML = null;

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




//--------------------Appending Selected Coountry Data-----------------//

function displayAccordingToCountry(data){
    let box = document.getElementById("news_result")
    box.innerHTML = null;
    data.forEach((ele) => {
        let div = document.createElement('div');
        div.setAttribute("class","news")
        div.addEventListener("click", () =>{
            localStorage.setItem("newsdata",JSON.stringify(ele))
            window.location.href = "news.html"
        })
        
        let image = document.createElement('img');
        image.src = ele.urlToImage;

        let div2 = document.createElement('div');

        let title = document.createElement("h3")
        title.innerHTML =ele.title;

        let author = document.createElement("h4");
        author.innerHTML = ele.author;

        div2.append(title,author)

        div.append(image,div2)
        box.append(div); 
    });
}