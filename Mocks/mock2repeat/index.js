


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
        btn.id="myBtn"
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
    modal.style.display = "block";
    let playerData = JSON.parse(localStorage.getItem("namesOfPlayer"))||[];
    ModalData(playerData)
}

const modal = document.getElementById("myModal");
const btn = document.getElementById("myBtn");
const span = document.getElementsByClassName("close")[0];

// document.getElementById("container").innerText = data


// Modal HEre

span.onclick = function() {
    modal.style.display = "none";
  }
  
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
  
  
  
  const ModalData=(playerData)=>{
  
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
        //   teamBox.innerText="Team Details"
  
  
          // Team Details Data 
          let {abbreviation, city, conference, division, full_name}=playerData.team


          let h1 = document.createElement("p");
            h1.innerText = "Team Details"

          let abbr = document.createElement("p");
          abbr.setAttribute("class", "modal_abbreviation");
  
          abbr="Abbr : "+abbreviation
  
      let cit = document.createElement("p");
          cit.setAttribute("class", "modal_city");
          cit.innerText="city: "+city
  
          let confe = document.createElement("p");
          confe.setAttribute("class", "modal_conference");
          confe.innerText="Conf : "+conference
  
        var divisio = document.createElement("div")
        divisio.setAttribute("class", "modal_division");
        divisio.innerText = "Div : "+division
  
          let h3 = document.createElement("p");
          h3.setAttribute("class", "modal_fullName");
          h3.innerText="Full Name :"+full_name
  
  
          // teamBox.appendChild(abbreviation, city, conference, division, fullName)
          teamBox.append(h1, abbr, cit, confe, divisio, full_name);
  
          box.append( img, name, position,teamBox );
          modal_container.append(box);
  
  }