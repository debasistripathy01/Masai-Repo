// All the JS Code for the Add Students Page Goes Here
document.querySelector("#form").addEventListener("click", myInfo);


let objectArr = JSON.parse(localStorage.getItem("admission")) || [];


function myInfo() {
    event.preventDefault();

    let infObject = {
        Name: document.querySelector("#name").value,
        Email: document.querySelector("#email").value,
        PhoneNo: document.querySelector("#phone").value,
        gender: document.querySelector("#gender").value,
        course: document.querySelector("#course").value
    }

    objectArr.push(infObject);

    // console.log(objectArr);
    localStorage.setItem("admission", JSON.stringify(objectArr));

}