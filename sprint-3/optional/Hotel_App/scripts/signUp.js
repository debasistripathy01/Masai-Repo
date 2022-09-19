let form = document.getElementById("form");


document.getElementById("sign_up").addEventListener("click", signUp);

var userData = JSON.parse(localStorage.getItem("users")) || [];

function signUp(e) {
    e.preventDefault();

    let userRegistrationData = {
        Name: document.getElementById("name").value,
        Email: document.getElementById("email").value,
        Password: document.getElementById("password").value
    }
    if (userRegistrationData.Email === document.getElementById("email").value && userRegistrationData.Password === document.getElementById("password").value ) {
        localStorage.setItem("users", JSON.stringify(userRegistrationData))
        alert("signup is successful");
        window.location.href="./login.html";
    } 
}