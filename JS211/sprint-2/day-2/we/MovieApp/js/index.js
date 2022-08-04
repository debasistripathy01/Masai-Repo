
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
                alert("No such Movie in the List");
                noMovieFound();
            }
            else{
                console.log(data);
                Display(data.Search);
            }
        }catch(err){
            console.log(err)
        }
    }
}

// let id;

// function debounceSearch(func, delay){
//     if(event.target.)
// }

let noMovieFound=()=>{
    let searchReasult = document.getElementById("movieSearchResults");
    searchReasult.innerHTML = null;
    searchReasult.append(MovieError());

}

let MovieError = ()=>{
    let card = document.createElement("div");
    card.classList = "MovieCard";
    card.style.width = "20px";

    let img = document.createElement("img");
    img.classList = "errorImage";
    img.src = "https://knowyourmeme.com/photos/28712-funny-error-messages";

    let bodyCard = document.createElement("div");
    bodyCard.classList = "body-card";

    let title = document.createElement("h3");
    title.innerText = "Movie Not Fount (-_-)"

    bodyCard.append(title);
    card.append(img,bodyCard);
    return card;
}
let id;
let debounceSearchFunction = (func, delay)=>{
    if(event.target === null ){
        let searchTerm = document.getElementById("SearchTerm");
        let movieSearchResult = document.getElementById("movieSearchResults");
        movieSearchResult.innerHTML = null;
        return;
    }
    if(id){
        clearTimeout(id);

    }
    else{
        id = setTimeout(()=>{
            func();
        }, delay);
    };
}

let normalSearchBtn = document.getElementById("normalSearch");
normalSearchBtn.addEventListener("click", ()=>{
    normalSearchFunction(elem);
})

function normalSearchFunction(elem){
    let normalSearchFunction = document.getElementById("normalSearch");
    let anyName = normalSearchFunction.value;
    if(elem){
        setTimeout(()=>{
            elem.blur();
        }, 1000);
        normalSearchFunction.value =null;
       
    }
    movieSearchRequest(anyName);

}

let navBarSearch  = document.getElementById("searchBtnNavbar");
navBarSearch.addEventListener("click", (event)=>{
    navBarSearchFunction(event);
})

function navBarSearchFunction(elem, event){
    if(event === true){
        event.preventDefault();

    }
    let navBarSearchInput  =  document.getElementById("search")
    let description = navBarSearchInput.value;
    if(elem===true){
        setTimeout(()=>{
            elem.blur();
        }, 1000);
        navBarSearch.value = null;
    }
    movieSearchRequest(description);
}


// Sample 

// {
//     "Title": "The Avengers",
//     "Year": "2012",
//     "imdbID": "tt0848228",
//     "Type": "movie",
//     "Poster": "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
//     "rating": "8.0"
// },
// {
//     "Title": "Avengers: Endgame",
//     "Year": "2019",
//     "imdbID": "tt4154796",
//     "Type": "movie",
//     "Poster": "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
//     "rating": "8.4"
// },