// Use deployed URL.

// document.getElementById("submit").addEventListener("click", submitFunc());

// function submitFunc(){
    // window.location.reload();
    // document.getElementById("form").innerHTML = null;
// }

function prodData(event){
    retrieveData(event);
}


window.addEventListener("load",()=>{
    retrieveData();
});


const url = "https://calm-badlands-50809.herokuapp.com/api/Products";

let retrieveData= async()=>{
    let res = await fetch("https://calm-badlands-50809.herokuapp.com/api/Products");
    let data = await res.json();
    
    DisplayData(data);
    console.log(data);
}


let id;

let DisplayData =(data)=>{

    // Receive all the data here 

     //  "name", "price", "description", "delivery" & "image" respectively.

     let container = document.getElementById("container");
     container.innerHTML = null;

     data.forEach(({name, price, description, delivery, image, id})=>{

        let box = document.createElement("div");
        box.setAttribute("class", "item");


        let Name = document.createElement("h3");
        Name.innerText = name;
        
        let Price = document.createElement("p");
        Price.setAttribute("class", "product_price");
        Price.innerText = +price; 


        let Desc = document.createElement("p");
        Desc.innerText = description;

        let Delivery = document.createElement("p");
        Delivery.setAttribute("class", "product_delivery");
        Delivery.innerText = delivery;

        let Image = document.createElement("img");
        Image.src = image;

        let RemoveBtn = document.createElement("button");
        RemoveBtn.setAttribute("class", "remove_item");
        RemoveBtn.innerText = "Remove";
        RemoveBtn.onclick=()=>{
            removeItem(id);
        };

        let updatePriceBtn = document.createElement("button");
        updatePriceBtn.setAttribute("class", "update_price");
        updatePriceBtn.innerText = "Update Price";
        updatePriceBtn.onclick(()=>{
            editBtn(id);
        });

        box.append(Name, Price, Desc, Delivery, Image);
        container.append(box);

     });
}


let addProduct = async()=>{

    let Name = document.getElementById("name").value;
    let Price  = document.getElementById("price").value;
    let Description = document.getElementById("description").value;
    // let Date  = document.getElementById("").value;
    let Delivery = document.getElementById("delivery").value;
    let Image = document.getElementById("image").value;
    // "name", "price", "description", "delivery" & "image" respectively.

    let data = {
        name : Name,
        price : Price,
        description : Description,
        delivery : Delivery,
        image : Image,
        id : Date.now()
    };

    let res = await fetch(`https://calm-badlands-50809.herokuapp.com/api/Products`,{
        method : "POST",
        body : JSON.stringify(data),
        headers : {
            "Content-Type" : "application/json",
        }
    });

    document.getElementById("form").innerHTML = null;
    retrieveData();

    res = res.json();
    console.log(res);
}




//update 


let removeItem = async(id)=>{
    let res = await fetch(`https://calm-badlands-50809.herokuapp.com/api/Products/${id}`,{
        method : "DELETE",
        headers : {
            "Content-Type" : "application/json",
        },
    });
    retrieveData();
};

let filter = async()=>{
    let value = document.getElementById("filter").value;

    let res = await fetch(`https://calm-badlands-50809.herokuapp.com/api/Products?status=${value}`);

    res = res.json();
    DisplayData(res);
}


let sort = async()=>{
    let value = document.getElementById("sort").value;
    let res = await fetch(`https://calm-badlands-50809.herokuapp.com/api/Products?_sort=price&_order=${value}`);
    res = await res.json();
    DisplayData(res);
    console.log(res);
};


let edit = async(price)=>{
    let new_price = window.prompt("Enter Edit Price");

    let data = {price: new_price || data.price};

    let res = await fetch(`https://calm-badlands-50809.herokuapp.com/api/Products/${id}`,{
        method : "PATCH",
        body : JSON.stringify(data),
        headers : {
            "Content-Type" : "application/json",
        },
    });
    DisplayData();
};

