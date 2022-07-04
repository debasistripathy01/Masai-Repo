let cartItemsArr = JSON.parse(localStorage.getItem("cart_items")) || [];


let total_cart_price = document.querySelector("cart_total");

function totalPriceOfCart(Data) {
    let AllPrice = [];
    let len = Data.length;
    // AllPrice.push(+(data.price));
    let sum = 0
    for (var i = 0; i < Data.length; i++) {
        sum += Data[i].price;
    }
    // total_cart_price.innerText = data.sum.value;
    console.log(sum);
    return sum;
}
displayCart(cartItemsArr);
// total_cart_price.innerText = data.sum.value;
total_cart_price.innerText = totalPriceOfCart(cartItemsArr).value;

function displayCart(cartData) {
    let container = document.getElementById("cart");
    container.innerHTML = "";
    cartData.forEach(function(el, index) {

        let box = document.createElement("div");


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
    localStorage.setItem("cart_items", JSON.stringify(cartItemsArr));
    window.location.reload();
}