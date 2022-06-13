// All the Code for the Rejected page goes here

let studentRejected = JSON.parse(localStorage.getItem("admission-rejected"));

// let admittedStuArr =

let studentInfoArr = JSON.parse(localStorage.getItem("rejectStudentArr")) || [];

displayData(studentRejected);

function displayData(elem) {
    elem.forEach(function(elem) {
        let tr = document.createElement("tr");

        var td1 = document.createElement("td");
        td1.innerText = elem.Name;

        var td2 = document.createElement("td");
        td2.innerText = elem.Email;

        var td3 = document.createElement("td");
        td3.innerText = elem.course;

        var td4 = document.createElement("td");
        td4.innerText = elem.gender;

        var td5 = document.createElement("td");
        td5.innerText = elem.PhoneNo;

        tr.append(td1, td2, td3, td4, td5);
        document.querySelector("tbody").append(tr);
    });
    localStorage.setItem("rejectedStudentArr", JSON.stringify(studentRejected));
}