function append() {
    totalData.innerHTML = "";
    let data = JSON.parse(localStorage.getItem("student")) || [];

    let totalData = document.getElementById("container")
    data.forEach(function(elem) {
        e.preventDefault();

        let box = document.createElement("div");

        let image = document.createElement("img");
        image.src = elem.image
        let name = document.createElement("p")
        name.innerText = elem.name;

        let course = document.createElement("p");
        course.innerText = elem.course;

        let unit = document.createElement("p");
        unit.innerText = elem.Unit;

        let batch = document.createElement("p");
        batch.innerText = elem.batch
        let div = document.createElement("div");

        let btn = document.createElement("button");
        btn.innerText = "Remove";
        btn.setAttribute("click", function() {
            remove(elem);
        })

        box.append(image, name, course, unit, batch, btn);
        totalData.append(box);
    })

    function remove(elem) {
        let data = JSON.parse(localStorage.getItem("student")) || []
        let newData = data.filter(function(index, i) {


            if (i === index) {
                let trash = JSON.parse(localStorage.getItem("trash"))
                trash.push(elem);
                localStorage.setItem('trash', JSON.stringify(trash))
            } else {
                return i !== index;
            }

            return i !== elem;
        });
        localStorage.setItem("student", JSON.stringify(newData));
    }
}