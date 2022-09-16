document.getElementById("form").addEventListener("submit", submitUser);

var userData = JSON.parse(localStorage.getItem("users")) || [];

function submitUser(el) {
    el.preventDefault();

    var email = document.querySelector("email").value;
    var password = document.querySelector("password").value;

    if (userData.Email === el.email && userData.Password === el.password) {
        alert("Login successful!");
        window.location.href = "./checkout.html"
    } else if (userData.Password !== el.password) {
        alert("Wrong credentials");
    } else if (userData.Email !== el.email) {
        alert("User doesn't exist, Sign Up")
    }
}