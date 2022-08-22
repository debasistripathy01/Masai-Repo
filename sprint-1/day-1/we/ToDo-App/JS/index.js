let toDOList = document.getElementById("toDoList");
let inputValues = document.getElementById("input");
let submitBtn = document.getElementById("submitBtn");

let toDoArr =  JSON.parse(localStorage.getItem("list_toDo")) || [];

function Display(data){
    let container = document.getElementById("container");
    container.innerHTML = "";

    for (el of toDoArr){

        let box = document.createElement("div");

        let boxText = document.createTextNode(el);

        let taskLink = document.createElement("p");
        taskLink.setAttribute("href", "#");

        let pos = toDoArr.indexOf(el)
        taskLink.setAttribute("onclick", "Delete ("+ pos +")" )

        let btn1 = document.createTextNode("Delete");



        taskLink.appendChild(btn);

        box.appendChild(boxText);
        box.appendChild(taskLink);
        container.appendChild(box);
    };

}

Display();

submitBtn.onclick = addTODo;

function addTODo(){
    let boxText = inputValues.value;

    toDoArr.push(boxText);
    inputValues.value= "";
    Display();
    saveToLocalStorage();
}



function Delete(pos){
    toDoArr.splice(pos, 1);
    Display();
    saveToLocalStorage();
}

function saveToLocalStorage(){
    localStorage.setItem("list_toDo", JSON.stringify(toDoArr))
}