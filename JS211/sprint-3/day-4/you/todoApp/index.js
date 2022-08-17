
//GET 
//Base URL

//ENd Point:- /todo(room)


window.addEventListener("load",()=>{
    getData();
});

let getData=async()=>{
    // let res =  await fetch("https://calm-badlands-50809.herokuapp.com/api/todo");
    let res = await fetch("http://localhost:3000/api/todo");
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
        removeBtn.innerText = "Remove";
        
        div.append(h3,p,toggleBtn,removeBtn);
        container.append(div);
    });
    
};




//CRUD == Create (POST), Read (GET), UPdate (PUT & PATCH), Delete(DELETE);

let addToDo = async ()=>{
    let todo = document.getElementById("todo").value;

    let data = {
        title : todo,
        status : false,
        id : Date.now()
    };

    let res = await fetch("http://localhost:3000/api/todo",{
        method:"POST",
        body : JSON.stringify(data),
        headers : {
            "Content-Type" :"application/json",
        }
    });

    document.getElementById("todo").innerHTML=null
    getData();

    res = res.json();
    console.log(res);

}



function deleteToDo(){

}
function toggleToDo(){

}



