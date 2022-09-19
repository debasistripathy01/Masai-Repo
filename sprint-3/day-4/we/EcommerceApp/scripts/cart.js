import navbar from "../components/navbar.js";


function renderCartLength(cart){

    let length = cart.length;

    let container = document.querySelector("#navbar");
    container.innerHTML = navbar(length);

}





let cartArray = JSON.parse(localStorage.getItem("cart"));
renderCartLength(cartArray);

append(cartArray);
totalPrice()




function append(data){

    let container = document.querySelector("#cartProducts__div");

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
        cartButton.innerText = "Remove Item"

        cartButton.style.backgroundColor = "teal"
        button.style.backgroundColor = "red"
        mainDiv.style.border = "1px solid white"
        mainDiv.style.paddingBottom = "1rem"

        cartButton.addEventListener("click" ,() =>{
            handleRemoveFromCart(el)
        })

        //Event listenee
        // button.addEventListener("click" , buyButtonClick )
        // cartButton.addEventListener("click" , () =>{
        //     handleAddToCart(el);
        // } )


        imageDiv.append(image);
        buttonDiv.append(button , cartButton);
        contentDiv.append(categoryP , priceP , buttonDiv);
        mainDiv.append(imageDiv , contentDiv);

        //Append
        container.append(mainDiv);
    })


}


function handleRemoveFromCart (data) {
    console.log(data)

    cartArray = cartArray.filter((el)=>{
        if(el.id != data.id){
            return el;
        }
    })

    localStorage.setItem("cart" , JSON.stringify(cartArray));

    append(cartArray);
    renderCartLength(cartArray)
    totalPrice()

    // console.log(cartArray);
}



function totalPrice(){
    //Access whats present in the cart
    let sum = 0;

    cartArray.map((el) =>{
        sum = sum + el.price
        console.log(el)
    })

    console.log(sum)

    //Catch the span 
    let span = document.querySelector("#totalPrice__span");


    //give text content to it
    span.innerText = sum;

}