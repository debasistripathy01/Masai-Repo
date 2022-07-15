// const url = `https://swapi.dev/api/people/?search=${query}`;





let id;


async function display(){
    let query = document.getElementById("query").value;

    let url = `https://swapi.dev/api/people/?search=${query}`;

    let res = await fetch(url);
    let data = await res.json();
    console.log(data);
    return data.results
    
}

function append(data){
    let container = document.getElementById("results");
    container.innerHTML ="";
    data.forEach(function(el){
        let box = document.createElement("div");

        let p =  document.createElement("p");
        p.innerText = el.name

        container.append(p);
    });
}

async function main(){
    let data = await display();
    append(data);
}

function debouncing(func, delay){
    if(id){
        clearTimeout(id);
    }
    id = setTimeout(function(){
        func();
    }, delay);
}


