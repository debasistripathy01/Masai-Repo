// The items should be stored in local storage with key :- “items”
// API :- https://grocery-mock-api.herokuapp.com/items

let grocerryArr =[];


async function getItems() {
    let url = "https://grocery-mock-api.herokuapp.com/items";
    try {
        let res = await fetch(`${url}`);
        let Data = await res.json();

        let new_data = Data.data;

        
        if(new_data !== undefined){
            grocerryArr = new_data;
            DisplayData(new_data);
            
        };
        // console.log(typeof(new_data))
        console.log("ALl data :", new_data);
    } 
    catch (error) {
        console.log(error);
    };
}
getItems();

let addData = JSON.parse(localStorage.getItem("items"))||[];

function DisplayData(new_data){
    

    

    const container = document.getElementById("items");
    container.innerHTML = null;
    new_data.forEach((elem, index)=>{
        let box = document.createElement("div");
        box.setAttribute("class","item");

        let Img = document.createElement("img");
        Img.src = elem.image;

        let name = document.createElement("p");
        name.innerText = elem.name;

        let price = document.createElement("p");
        price.innerText = elem.price;

        

        let btn = document.createElement("button")
        btn.setAttribute("id","add_to_cart")
        btn.innerText = "Add To Cart"
        btn.addEventListener('click',function(){
            addFun(elem, index);
        })

        box.append(Img,name,price, btn);
        container.append(box);
    });
}


let length= addData.length;
console.log(length);
document.getElementById("item_count").innerText = +length;

function addFun(el){
    addData.push(el)
    localStorage.setItem("items",JSON.stringify(addData))
    alert("Grocerry has been added");
    
    window.location.reload()
}



// // var wallet_balance = document.getElementById("wallet");
// // wallet_balance.innerText = 700;
// // let count = 700;
// // let total_prpice = 0;

// function AddToCart(ele) {
//     // wallet_balance.innerText = count + ele.price;
//     // total_prpice = total_prpice + ele.price;
//     //count = count + ele.price;
//     groceryArr.push(ele);
//     localStorage.setItem("items", JSON.stringify(groceryArr));
//     // console.log(total_prpice);
// }