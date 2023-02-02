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


const data = document.getElementById("container");
const DisplayData =(array)=>{
    
    
    // const container = document.getElementById("container");
    const container = document.createElement("container");
    array.forEach((ele)=>{
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
        btn.addEventListener("click", ()=>{
            const Box = document.createElement("div");
            Box.setAttribute("class","Box" )
            Box.append(box)

        })


        btn.innerText = "Details"


        // let hide = document.createElement("button");



        box.append(postId, name, comments, btn);
        container.append(box)
    });

    var count =1;
    for(var i=0; i < array.length; i++){
        var item = document.createElement("div");
        item.setAttribute("id", "scrollDiv")
        item=container;
        data.appendChild(item)
    }


    
}


const onClicking=()=>{
    const Box = document.createElement("div");

}



const wholeCard = document.getElementById("container");        
// const posts  =(array)=>{
//     var count =1;
//     for(var i=0; i <500; i++){
        
        
//         wholeCard.appendChild(DisplayData(array));
//     }   
// }




data.addEventListener('scroll', function () {
    if (data.scrollTop + data.clientHeight >= data.scrollHeight) {
        newlist();
    }
});


// posts(array)
