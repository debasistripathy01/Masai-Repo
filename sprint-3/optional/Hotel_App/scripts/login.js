document.getElementById("form").addEventListener("submit", submitUser);

var userData = JSON.parse(localStorage.getItem("users")) || [];

function submitUser(el) {
    el.preventDefault();

    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    if (userData.Email === email && userData.Password === password) {
        alert("Login successful!");
        // document.getElementById("NAME").innerText = userData.Name;
        window.location.href = "./index.html";
    } else if (userData.Password !== password) {
        alert("Wrong credentials");
    } else if (userData.Email !== email) {
        alert("User doesn't exist, Sign Up")
        window.location.href="./signup.html";
    }
}