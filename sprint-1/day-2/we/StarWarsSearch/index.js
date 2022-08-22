// BAckend of StarWar character Searches


let url = "https://swapi.dev/api/people/?format=json";

let Data = JSON.parse(localStorage.getItem("star-war-data"))||[]



//Here is Something That I need to cocmmit

let id;

function debounceSearchFunc(DisplayData, delay){
    if(id){
        clearTimeout(id)
    }
    id = setTimeout(function(){
        DisplayData();
    },2000);
}
let new_data;
async function DisplayData(){
    let query = document.getElementById("navSearch").value;
    try{
        let res = await fetch(`${url}&search=${query}`);
        let data = await res.json();

        new_data = data.results;
        console.log("data :", new_data);
        // console.log("data : ", data);

        
        if(new_data !== undefined){
            displayMovies(new_data);
        }
    }
    catch(error){
        console.log(error);
    }
}

function displayMovies(data){
    let container = document.getElementById("names");
    container.value = null;


    data.forEach((elem)=>{
        let box = document.createElement("div");
        box.setAttribute("class", "box");

        let names = document.createElement("p");
        names.innerText =  elem.name;



        names.setAttribute("class", "name");
        names.addEventListener("click", ()=>{
            submitFunc(elem);
        });
        // let mass = document.createElement("p");
        // mass.innerText =  elem.mass;

        // let skin_color = document.createElement("p");
        // skin_color.innerText =  elem.skin_color;

        // let total_films = document.createElement("p");
        // total_films.innerText = elem.films

        // box.append(names, mass, skin_color, total_films);
        box.append(names);
        container.append(box);
    });
}

function submitFunc(elem){
    Data.push(elem);
    localStorage.setItem("star-war-data", JSON.stringify(Data));
    window.location.href = "./details.html";
}
