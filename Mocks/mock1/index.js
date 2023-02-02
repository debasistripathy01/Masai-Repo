// API = https://jsonplaceholder.typicode.com/comments

let array;


const getItems =async()=>{


    const url = "https://jsonplaceholder.typicode.com/comments";

    try{

        let res = await fetch(url);
        let data = await res.json();
        
        // DisplayData(data.map({el})=>el);
        let array = data.map(({name, email, body})=>(name, email, body))
// console.log(array.length);
DisplayData(data)
    }catch(err){
        console.log(err)
    }
}

getItems();
const container = document.getElementById("container");
const DisplayData =(array)=>{
    
    


    array.forEach((ele, index)=>{
        let box = document.createElement("div");


        box.setAttribute("class","item");

        let postId = document.createElement("p");
        postId.innerText = ele.id

        let name = document.createElement("p");
        name.innerText = ele.name;

        let comments = document.createElement("p");
        comments.innerText = ele.body;

        

        let btn = document.createElement("button")
        btn.setAttribute("id","clickOnit")
        btn.innerText = "Details"


        box.append(postId, name, comments, btn);
        container.append(postId, name, comments, btn)
    });

    
}


const posts  =(array)=>{
    var count =1;

    // for(var i=0; i < array.length; i++){

    //     var item = document.createElement('div');
    //     item.id="list"

    //     container.appendChild(item);
    // }   
}




data.addEventListener('scroll', function () {
    if (data.scrollTop + data.clientHeight >= data.scrollHeight) {
        newlist();
    }
});


newlist();
