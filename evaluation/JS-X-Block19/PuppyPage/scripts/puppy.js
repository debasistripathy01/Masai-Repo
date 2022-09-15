


//API TO FETCH https://dog.ceo/api/breed/hound/images

let nameOfDogs = JSON.parse(localStorage.getItem("namesOfPuppy"))||[];
console.log(nameOfDogs);
async function getPuppydata(){
    // let url = `https://dog.ceo/api/breed/${nameOfDogs}/images`;

    try{
        let res  = await fetch(`https://dog.ceo/api/breed/${nameOfDogs}/images`);
        let Data = await res.json();

        let new_data = Data.message;

        // var keys = $.map(new_data, function(v, i){
        //     return i;
        // });

        console.log(new_data);

        // console.log("Data : ", new_data["message"]);
        // console.log(typeof(new_data));

        if(new_data!==undefined){
            // var keys = Object.keys(new_data);
            

            DisplayData(new_data);
        }

    }
    catch(error){
        console.log(error);
    };
}

getPuppydata();


function DisplayData(new_data){

    let container = document.getElementById("container");
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