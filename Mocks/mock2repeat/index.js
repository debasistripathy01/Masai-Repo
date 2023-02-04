


let new_data;
const DisplayData = async()=>{
    let url = "https://www.balldontlie.io/api/v1/players";
    try{

        let res =  await fetch(url);
         let data = await res.json();
        // console.log(data.data);
        new_data = data.data
        showData(new_data)
        console.log(new_data)
        // console.log(new_data[0].team.abbre)
    }catch(err){
        console.log(err)
    }


}

DisplayData()

const showData = (new_data)=>{
    let container = document.getElementById("container");
    container.innerHTML  =null;

    new_data.forEach((el, index)=>{

        let box = document.createElement("div");
        box.setAttribute("class", "playerNames");

        let img = document.createElement("img");
        img.setAttribute("class", "image");
        img.src= "https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png" 



        let name = document.createElement("p");
        name.setAttribute("class", "name");
        name.innerText=el.first_name + el.last_name

        // let lastName = document.createElement("p");
        // lastName.setAttribute("class", "lastName");
        // lastName.innerText=el.last_name

        

        let position = document.createElement("p");
        position.setAttribute("class", "position");
        position.innerText=el.position

        let btn = document.createElement("button");
        btn.innerText = "Details";
        btn.addEventListener("click", ()=>{
            submitNamesBtn(el);
        });


        box.append( img, name,btn);
        container.append(box);
    });
}


function submitNamesBtn(el){
    localStorage.setItem("namesOfPlayer", JSON.stringify(el))||[];

}


// document.getElementById("container").innerText = data
