


// API KEY TO CHECK :- "https://dog.ceo/api/breeds/list/all"


// - On page load display names of all breeds of dogs in form of cards.
// - On click of any breed name redirect to `puppy.html` and display all images of that particular breed using this api.

let pupppyArr = [];


async function getPuppy(){
    let url = "https://dog.ceo/api/breeds/list/all";

    try{
        let res  = await fetch(`${url}`);
        let Data = await res.json();

        let new_data = Data.message;

        // var keys = $.map(new_data, function(v, i){
        //     return i;
        // });
        // console.log("Data : ", new_data["message"]);
        // console.log(typeof(new_data));

        if(new_data!==undefined){
            var keys = Object.keys(new_data);
            
            pupppyNames = keys;
            DisplayData(pupppyNames);
        }
        console.log(keys);
    }
    catch(error){
        console.log(error);
    };
}

getPuppy();


function DisplayData(new_data){

    let container = document.getElementById("names");
    container.innerHTML  =null;

    new_data.forEach((el)=>{

        let box = document.createElement("div");
        box.setAttribute("class", "puppyNames");

        let btn = document.createElement("button");
        btn.innerText = el;
        btn.addEventListener("click", ()=>{
            submitNamesBtn(el);
        });


        box.append(btn);
        container.append(box);
    });
}


function submitNamesBtn(el){
    localStorage.setItem("namesOfPuppy", JSON.stringify(el.value));
    window.location.href="./puppy.html";
}



