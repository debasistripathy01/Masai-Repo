
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
    

}


// let id;

// function debounceSearch(func, delay){
//     if(event.target.)
// }