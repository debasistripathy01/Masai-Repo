
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



// let id;

// function debounceSearch(func, delay){
//     if(event.target.)
// }