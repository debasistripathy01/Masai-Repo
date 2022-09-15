

// - This page should have a search bar.
// - When user types in particular breed, images of that breed should be displayed on browser.
// - Use this API


// let url = "https://dog.ceo/api/breed/{breedname}/images"

let PuppyArr =[];

async function main(){
    let breedname = document.getElementById("search").value;
    console.log(breedname);
    try{
        let res = await fetch(`https://dog.ceo/api/breed/${breedname}/images`);
        let data = await res.json();

        let new_data = data.message;
        
        // console.log(typeof(new_data))
        console.log("data :", new_data.length);

        if(new_data !== undefined){
            PuppyArr = new_data;
            displayPuppy(PuppyArr);
            
        };
    }
    catch(error){
        console.log(error);
    }
}


function displayPuppy(new_data){
    let container = document.getElementById("puppy");
    container.innerHTML  =null;

    new_data.forEach((el)=>{

        let box = document.createElement("div");
        box.setAttribute("class", "puppyImages");

        let image = document.createElement("img");
        image.src = el;
        // btn.addEventListener("click", ()=>{
        //     submitNamesBtn(el);
        // });
        box.append(image);
        container.append(box);
    });
}

let id;
let debounceSearchFunc=(main, delay)=>{
    if(id){
        clearTimeout(id);
    }
    id = setTimeout(()=>{
        main();
    }, 2000);
    
}