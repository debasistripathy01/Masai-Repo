
import navbar from "../components/navbar.js";
let cart = JSON.parse(localStorage.getItem("cart")) || [];



function renderCartLength(cart){
    let length = cart.length;

    let container = document.querySelector("#navbar");
    container.innerHTML = navbar(length);

}

renderCartLength(cart)













//We have to make net req
async function getData () {
    try{
    let api = await fetch(`https://fakestoreapi.com/products`);
    let data = await api.json();
    append(data);
    console.log("Data")
    console.log(data);
    }
    catch(err){
        console.log(err);
        let div = document.querySelector("#product__div");
        let h1 = document.createElement("h1");
        h1.textContent = "Some error from server"
        div.append(h1);
    
    }
}

getData();


function append(data){

    let container = document.querySelector("#product__div");

    container.innerHTML = null;

    data.map((el) =>{
        //Creating html element
        let mainDiv = document.createElement("div");
        let imageDiv = document.createElement("div");
        let contentDiv = document.createElement("div");
        let image = document.createElement("img");
        let categoryP = document.createElement("p");
        let priceP = document.createElement("p");
        let buttonDiv = document.createElement("div");
        let button = document.createElement("button");
        let cartButton = document.createElement("button");


        //Sttributes or value
        image.src = el.image
        categoryP.innerText = el.category
        priceP.innerText = el.price
        button.innerText = "BUY";
        cartButton.innerText = "Add to Cart"

        cartButton.style.backgroundColor = "teal"
        button.style.backgroundColor = "red"
        mainDiv.style.border = "1px solid white"
        mainDiv.style.paddingBottom = "1rem"

        //Event listenee
        button.addEventListener("click" , buyButtonClick )
        cartButton.addEventListener("click" , () =>{
            handleAddToCart(el);
        } )


        imageDiv.append(image);
        buttonDiv.append(button , cartButton);
        contentDiv.append(categoryP , priceP , buttonDiv);
        mainDiv.append(imageDiv , contentDiv);

        //Append
        container.append(mainDiv);
    })


}




function buyButtonClick () {
    // alert("Buy")

    setTimeout(() =>{
        alert("Succesfully added to cart");
        setTimeout(()=>{
            alert("Payment Done");
            setTimeout(() =>{
                alert("Order delivered");
            }, 2000)
        }, 3000)
    }, 2000)
}



function handleAddToCart (data) {
    console.log(data)
    // alert("Item added")

    let flag = false;
    //before pushiong we need to check if it already present 
    cart.map((el) =>{
        if(el.id == data.id){
            flag = true;
        }
    })

    if(flag){
        alert("Already added")
        return;
    }



    cart.push(data);

    localStorage.setItem("cart" , JSON.stringify(cart));
    renderCartLength(cart);
    alert("Data added to cart")

}
