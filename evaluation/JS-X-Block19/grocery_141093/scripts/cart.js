


let cartItemsArr = JSON.parse(localStorage.getItem("items")) || [];


// console.log(cartItemsArr[0].price);

let total_cart_price = document.getElementById("cart_total");


let sum = 0


    let len = cartItemsArr.length;
    // AllPrice.push(+(data.price));
    
    for (var i = 0; i < len; i++) {
        sum += cartItemsArr[i].price;
    }

    
    // return +sum;

console.log(sum);

displayCart(cartItemsArr);
// total_cart_price.innerText = data.sum.value;
total_cart_price.innerText = sum;

function displayCart(cartData) {
    let container = document.getElementById("cart");
    container.innerHTML = "";
    cartData.forEach(function(el, index) {

        let box = document.createElement("div");
        box.setAttribute("class","item");

        let img = document.createElement("img");
        img.src = el.image;

        let name = document.createElement("p");
        name.innerText = el.name;

        let price = document.createElement("p");
        price.innerText = el.price

        let removeButton = document.createElement("button");
        removeButton.innerText = "Remove";
        removeButton.className = "remove";
        removeButton.addEventListener("click", function() {
            RemoveCartItems(el, index);
        });


        box.append(img, name, price, removeButton);
        container.append(box);

    });
}


function RemoveCartItems(el, index) {

    cartItemsArr.splice(index, 1);
    sum -= el.price;
    localStorage.setItem("items", JSON.stringify(cartItemsArr));
    window.location.reload();
}
