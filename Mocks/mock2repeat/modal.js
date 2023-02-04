const modal = document.getElementById("myModal");
const btn = document.getElementById("myBtn");
const span = document.getElementsByClassName("close")[0];
let playerData = JSON.parse(localStorage.getItem("namesOfPlayer"))||[];
// console.log(playerData)
btn.onclick = function() {
  modal.style.display = "block";
  DisplayData(playerData)
// console.log(playerData.forEach((el)=> {el.name}))
    // console.log(playerData.first_name)
    // for(var keys in playerData){
    //    console.log(keys, playerData[keys])
    // }
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}



const DisplayData=(playerData)=>{

    let modal_container = document.getElementById("modal_container");
        modal_container.innerHTML=null


        let box = document.createElement("div");
        box.setAttribute("class", "modal_playerNames");

        let img = document.createElement("img");
        img.setAttribute("class", "modal_image");
        img.src= "https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png" 



        let name = document.createElement("p");
        name.setAttribute("class", "modal_name");
        name.innerText="Name : "+playerData.first_name + playerData.last_name


        let position = document.createElement("p");
        position.setAttribute("class", "modal_position");
        position.innerText="Position : "+playerData.position
        
        
        // Team Details Div 
        let teamBox = document.createElement("div");
        teamBox.setAttribute("class", "modal_teamBox");
        teamBox.innerText="Team Details"


        // Team Details Data 
        let {abbreviation, city, conference, division, full_name}=playerData.team
        let abbr = document.createElement("p");
        abbr.setAttribute("class", "modal_abbreviation");

        abbr="Abbr : "+abbreviation

    let cit = document.createElement("p");
        cit.setAttribute("class", "modal_city");
        cit.innerText="city: "+city

        let confe = document.createElement("p");
        confe.setAttribute("class", "modal_conference");
        confe.innerText="Conf : "+


        // div.setAttribute("class", "modal_division");
        // div.innerText="Div : "+division

        // let fullName = document.createElement("p");
        // fullName.setAttribute("class", "modal_fullName");
        // fullName.innerText=full_name


        // teamBox.appendChild(abbreviation, city, conference, division, fullName)
        teamBox.append(abbreviation, city, conference, division, full_name);

        box.append( img, name, position);
        modal_container.append(box, teamBox);

}