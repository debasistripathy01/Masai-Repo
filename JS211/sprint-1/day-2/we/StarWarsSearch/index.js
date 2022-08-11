// BAckend of StarWar character Searches


let url = "https://swapi.dev/api/people/?format=json";





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

async function DisplayData(){
    let query = document.getElementById("navSearch").value;
    try{
        let res = await fetch(`${url}&search=${query}`);
        let data = await res.json();

        let new_data = data.results;
        console.log("data :", new_data);
        // console.log("data : ", data);

        
        if(new_data !== undefined){
            displayMovies(new_data);
        }
    }
    catch(error){

    }
}

function DisplayData(data){
    
}