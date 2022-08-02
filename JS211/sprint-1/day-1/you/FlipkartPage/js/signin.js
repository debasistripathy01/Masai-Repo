document.querySelector("#form").addEventListener("submit", formSubmit);

var userData = JSON.parse(localStorage.getItem("userDataBase"));

function formSubmit(event) {
    event.preventDefault();
    var email = document.querySelector("#mail").value;
    var Password = document.querySelector("#passwd").value;

    for (var i = 0; i < userData.length; i++) {
        console.log(userData[i].mail, userData[i].passwd);
        if (userData[i].mail === email && userData[i].passwd === Password) {
            alert("login successful")
            window.location.href = "homepage.html"

        } else {
            alert("Wrong ID or Password");

        }
    }
}