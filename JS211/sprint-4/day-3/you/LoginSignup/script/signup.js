
import navbar from "../component/navbar.js";

document.getElementById("nav").innerHTML = navbar();


const url = "https://calm-badlands-50809.herokuapp.com/api/Signup";

let submit_Btn = document.getElementById("submit");
submit_Btn.onclick = (event)=>{
    register(event);
    // window.location.reload();
};

let register = async(e) =>{
    e.preventDefault();

    let data = {
        name : document.getElementById("name").value,
        email : document.getElementById("email").value,
        password : document.getElementById("psswd").value,
        userName : document.getElementById("userName").value,
        Number : document.getElementById("num").value,
        Description : document.getElementById("desc").value
    };

    console.log(data);

    let res = await fetch(url,{
        method : "POST",
        body : JSON.stringify(data),
        headers : {
            "Content-Type" : "application/json",
        },
    });
    let result = await res.json();

    console.log(res);
};

