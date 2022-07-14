// const url = `https://swapi.dev/api/people/?search=${query}`;








function display(){
    let query = document.getElementById("query").value;

    let url = `https://swapi.dev/api/people/?search=${query}`;

    let res = await fetch(url);
    let data = await res.json();
    // console.log(data);
    return data.res
}

function append(){
    let container = document.getElementById("results");

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
    setTimeout(function(){
        func();
    });
}


