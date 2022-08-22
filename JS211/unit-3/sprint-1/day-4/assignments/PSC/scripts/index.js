function student(n, c, u, b, i) {
    this.name = n;
    this.course = c;
    this.unit = u;
    this.batch = `FT-Web-${b}`;
    this.image = i;
}


function StudentData(e) {

    let form = document.getElementById("form");
    let name = form.name.value;
    let course = form.course.value;
    let unit = form.Unit.value;
    let batch = form.batch.value;
    let image = form.img.value;

    let s1 = new Student(name, course, unit, batch, image)

    let data = JSON.parse(localStorage.getItem("student")) || [];


    localStorage.setItem("student", JSON.stringify(data))

    data.push(s1);
}

function calculate() {

    let data = JSON.parse(localStorage.getItem("student")) || [];
    let arr = [];

    let obj = {};

    for (var i = 0; i < data.length; i++) {
        if (!obj[data[i].batch]) {
            obj[data[i].batch] = 0;
        }
    }
    for (var i = 0; i < data.length; i++) {
        obj[data[i].batch]++;
    }
}