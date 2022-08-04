
let KEY = "660da246";
let url  = "http://www.omdbapi.com/?i=tt3896198&apikey="
let anyhting = "N/A"

let fetchID =async(imdbID) => {
    let query = `${url}${KEY}&i=${imdbID}`;
    try{
        let response = await fetch(query);
        let rating = await response.json();
        if(rating.imdbRating !== anyhting){
            return rating.imdbRating;
        }
    }
    catch(err){
        console.log(err)
    }
}

let Display= (data) =>{
    let searchResult = document.getElementById("searchReasult")
    searchResult.innerHTML = "";

    if(data.length === 1 && data[0].Poster == anyhting){
        
        return noMovieFound();

        data.forEach((el)=>{
            fetchID(el.imdbID).then((res)=>{
                if(el.Poster !== anyhting){
                    let col = document.createElement("div");
                    el.rating = res;
                    searchResult.append(MovieCard(el))
                }
            }).catch((error)=>{
                console.log(error)
                return noMovieFound();
            });
        });
    }
}

function MovieCard(data){
    let card = document.createElement("div");
    card.setAttribute("class", "movieCard");
    card.style.width = "20px";

    let img = document.createElement("img");
    img.setAttribute("class", "movieImage");
    img.src = data.Poster;

    let movieCardBody = document.createElement("div");
    movieCardBody.classList = "movieBody";

    if(data.rating >= 8.5){
        let recommend = document.createElement("div");
        recommend.classList = "recommendPosition";
        recommend.innerText = "Recommended Movie";
        card.append(recommend);
    }

    let title = document.createElement("h3");
    title.innerText = data.Title;

    let desc = document.createElement("p");
    desc.classList = "movieDescription";

    let year = document.createElement("p");
    year.classList ="year";
    year.innerText = data.year;


    let ratings = document.createElement("p");
    ratings.classList = "ratings";
    if(data.rating !== undefined){
        ratings.innerText = `IMDb ratings : ${data.rating}/10`;
    }
    else{
        ratings.innerText = `IMDb ratings : 0/10`
    }
    desc.append(year);
    movieCardBody.append(title, desc, ratings);
    card.append(movieCardBody, img);


}


let movieSearchRequest = async(name)=>{
    let SearchTerm = document.getElementById("SearchTerm");
    SearchTerm.innerText = `The Movie that we found based on your search results : ${name}`;

    if(name === null){
        return alert("Enter the Movie Name");
    }
    else{
        let query = `${url}&s=${name}`;
        // let query = `http://www.omdbapi.com/?i=tt3896198&apikey=${KEY}&s=${name}`
        try{
            let res = await fetch(query);
            let data = await res.json();

            if(data.res !== false){
                alert("NO such Movie in the List");
                noMovieFound();
            }
        }catch(err){

        }
    }
}

// let id;

// function debounceSearch(func, delay){
//     if(event.target.)
// }