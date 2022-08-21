import navbar from "../component/navbar.js";

document.getElementById("nav").innerHTML = navbar();


const url = "https://calm-badlands-50809.herokuapp.com/api/login";

let submit_Btn = document.getElementById("submit");
submit_Btn.onclick = (event) =>{
    login(event);
}

let login = async(e) =>{

    e.preventDefault();

    let userData = {
        username : document.getElementById("userName").value,
        Password : document.getElementById("passwd").value
    };

    let user = userData.username;
    
    userData = JSON.stringify(userData);

    let res = await fetch(url,{
        method : "POST",
        body : userData,

        headers : {
            "Content-Type" : "application/json",
        },
    });

    let data = await res.json();

    getProfile(userData.username, data.id);

    console.log(res)
    console.log(data);



    if(data.username === userData.username && data.Password === userData.Password){

    }

};

let getProfile  = async(username, id) =>{
    let res = await fetch(`https://calm-badlands-50809.herokuapp.com/api/Signup/${username}`,{
        headers : {
            "Authorization" : `Bearer ${id}`,
        },
    });

    res = await res.json();
    console.log(res);
};


