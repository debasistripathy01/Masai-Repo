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
    if (userRegistrationData.Email === document.querySelector("email").value) {
        alert("Same email is not allowed");
        window.location.reload();
    } else {
        alert("signup is successful");
        localStorage.setItem("users", JSON.stringify(userRegistrationData))
        window.location.reload();
    }
}