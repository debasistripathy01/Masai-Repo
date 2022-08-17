
//GET 
//Base URL

//ENd Point:- /todo(room)


window.addEventListener("load",()=>{
    getData();
});

let getData=()=>{
    let res = await fetch("https://calm-badlands-50809.herokuapp.com/api/todo");
    let data = await res.json();
    renderDom(data);
    console.log(data);
};

let renderDom = (data)=>{
    //title
    //status
    //id
    //toggle button
    //Remove button

    let container = document.getElementById("container");
    container.innerHTML = null;
}

data.forEach(({title, id, status})=>{
    let div = document.createElement("div");
    let h3 = document.createElement("h3");
    let p = document.createElement("p");
    let toggleBtn = document.createElement("button");
    toggleBtn.onclick =()=>{
        toggleToDo(id)
    };
    
    let removeBtn = document.createElement("button");
    removeBtn.onclick=()=>{
        deleteToDo(id);
    };
    h3.innerText = title;
    p.innerText = status;
    toggleBtn.innerText = "Toggle";
    deleteToDo.innerText = "Remove";

    
})




