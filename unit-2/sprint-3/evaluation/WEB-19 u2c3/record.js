// fill in javascript code here

//--------------------------------//

document.querySelector("form").addEventListener("submit", MySubmission);

function MySubmission() {
    event.preventDefault();

    var name = document.querySelector("#name").value;

    var EmployeeId = document.querySelector("#employeeID").value;

    var department = document.querySelector("#department").value;

    var experience = document.querySelector("#exp").value;

    var email = document.querySelector("#email").value;

    var mob_num = document.querySelector("#mbl").value;


    var tr = document.createElement("tr");
    var td1 = document.createElement("th");
    td1.innerText = name;

    var td2 = document.createElement("th");
    td2.innerText = EmployeeId;

    var td3 = document.createElement("th");
    td3.innerText = department;

    var td4 = document.createElement("th");
    td4.innerText = experience;

    var td5 = document.createElement("th");
    td5.innerText = email;

    var td6 = document.createElement("th");
    td6.innerText = mob_num;


    var td7 = document.createElement("th");
    if (experience > 5) {
        // console.log("Senior");
        td7.innerText = "Senior";
    } else if (experience > 2 && experience <= 5) {
        // console.log("Junior");
        td7.innerText = "Junior";
    } else if (experience <= 1) {
        // console.log("Fresher");
        td7.innerText = "Fresher";
    }



    var td8 = document.createElement("th");
    td8.innerText = "Delete";
    td8.addEventListener("click", deleteFunction);
    td8.style.backgroundColor = "red";
    td8.style.cursor = "pointer";


    tr.append(td1, td2, td3, td4, td5, td6, td7, td8);
    document.querySelector("tbody").append(tr);


    function deleteFunction() {
        console.log(event.target.parentNode.remove());
    }

    //Delete FUnction here. Right? (>_<)

}