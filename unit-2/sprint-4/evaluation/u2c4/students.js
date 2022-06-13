// All the Code for All Students Page Goes Here

studentDataLS = JSON.parse(localStorage.getItem("admission"));

let StudentArr = localStorage.getItem("admission") || [];
//let acceptStudentArr = localStorage.getItem("admission-accepted") || [];

//let rejectStudentArr = localStorage.getItem("admission-rejected") || [];

displayData(StudentArr);

function courseFilter() {
    var filterCourse = document.querySelector("#filter").value;


    if (filterCourse === "All") {
        var x = a.course.toUpperCase();
        var y = b.course.toUpperCase();

        StudentArr.sort(function(a, b) {
            if (x > y) {
                return -1;
            }
            if (x < y) {
                return 1;
            }
            return 0;
        });
        console.log(StudentArr);
        displayData(StudentArr);
    }
}

function displayData(data) {
    data.forEach(function(elem, index) {

        var tr = document.createElement("tr");

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

        var td6 = document.createElement("td");
        td6.innerText = "Accept";
        td6.style.backgroundColor = "green";
        td6.style.width = "20px";
        td6.style.height = "10px";
        td6.style.cursor = "pointer";
        // td6.style.margintop = "10px";
        td6.addEventListener("click", function() {
            acceptedStu(elem, index);
        });
        var td7 = document.createElement("td");
        td7.innerText = "Reject";
        td7.style.cursor = "pointer";
        td7.style.backgroundColor = "red";
        td7.style.width = "20px";
        td7.style.height = "10px";
        td7.addEventListener("click", function() {
            rejectedStu(elem, index);
        });

        tr.append(td1, td2, td3, td4, td5, td6, td7);
        document.querySelector("tbody").append(tr);
    });
    //localStorage.setItem("accepted-students", JSON.stringify(studentDataLS))
}

function acceptedStu(elem, index) {
    studentDataLS.splice(index, 1);
    localStorage.setItem("admission-accepted", JSON.stringify(StudentArr));
    window.location.reload();
}

function rejectedStu(elem, index) {
    studentDataLS.splice(index, 1);
    localStorage.setItem("admission-rejected", JSON.stringify(StudentArr))
    window.location.reload();
}