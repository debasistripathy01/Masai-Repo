//Debouncing

async function main() {
    let query = document.getElementById("query").value;
    let data = await getData(query)
        // getData(query);
        // console.log(data);
    append(data)
}


//No matter what asynch function will always return a Promimse
// Here getDAta is a asynch function

async function getData(query) {
    const url = `http://www.omdbapi.com/?i=tt3896198&apikey=660da246&s=${query}`;
    let res = await fetch(url);
    let data = await res.json();
    // console.log(data);
    // append(data.Search)
    return data.Search;
}



function append(data) {
    if (!data) return;
    let container = document.getElementById("movies");
    container.innerHTML = "";

    data.forEach(function(el) {
        let img = document.createElement("img");
        img.src = el.Poster;

        let p = document.createElement("p");
        p.innerText = el.Title;

        let div = document.createElement("div");
        div.setAttribute("class", "movie");
        div.append(img, p);

        container.append(div);
    })
}