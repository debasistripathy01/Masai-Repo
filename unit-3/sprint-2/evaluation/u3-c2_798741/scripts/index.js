let url = "https://grocery-masai.herokuapp.com/items";

async function getItems() {
    try {
        let resolve = await fetch(url);
        let items = await resolve.json();
        DisplayData(items.data);
        console.log(items.data);
    } catch (error) {
        console.log(error);
    }
}
getItems();

let groceryArr = JSON.parse(localStorage.getItem("cart_items")) || [];



DisplayData(groceryArr);

function DisplayData(items) {

    let container = document.getElementById("groceries");
    container.innerHTML = "";

    items.forEach(function(el) {
        let cards = document.createElement("div");
        cards.className = "item";

        let image = document.createElement("img");
        image.src = el.image;

        let name = document.createElement("p");
        name.innerText = el.name;

        let price = document.createElement("p");
        price.innerText = el.price;

        let button = document.createElement("button");
        button.innerText = "Add to Cart";
        button.id = "add_to_cart";
        button.addEventListener("click", function() {
            AddToCart(el);
        });

        cards.append(image, name, price, button);
        container.append(cards);
    });
    //let box = document.createElement("div");
}
var wallet_balance = document.getElementById("wallet");
wallet_balance.innerText = 700;
let count = 700;
let total_prpice = 0;

function AddToCart(ele) {
    wallet_balance.innerText = count + ele.price;
    total_prpice = total_prpice + ele.price;
    //count = count + ele.price;
    groceryArr.push(ele);
    localStorage.setItem("cart_items", JSON.stringify(groceryArr));
    console.log(total_prpice);
}