// let button = document.createElement("button");
// button.innerTex  t = "ADD";
// button.onclick =()=>{
//     alert("Something");
// }

// let properties ={
//     text : "ADD",
//     onClick : ()=>{}
// }

let root  = document.getElementById("root");
let count =0;

//Component
function Button(properties){
    const {text, onClick} = properties;
    let button = document.createElement("button");
    button.innerText = text; 
    button.onclick = onClick;  
    
    return button;
}


let Header = (properties)=>{
    const {text, level}  = properties;

    let header = document.createElement(`h2${level}`); // TO make it more dynnamic to do H1 H2 H3 H4 etc
    header.innerText = text;

    return header;
}

const header = Header({
    text : `Counter : ${count} `,
    level : 1, 
})


 

/// ADD Button
//counter : 0, //h1 tag
//ADD // Reduce

let addBtn = Button({
    text : "ADD",
    onClick : ()=>{
        alert("Button clicked");
        count++;
    }, 
});


let reduceBtn = Button({
    text : "REDUCE",
    onClick : ()=>{
        alert("Button reduce clicked")
        count--;
    },
}) 

root.append(addBtn, reduceBtn, header);



// Hooks :-