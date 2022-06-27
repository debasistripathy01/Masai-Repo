var Data = JSON.parse(localStorage.getItem("data")) || [];


showProduct(Data);

function showProduct(details) {

    // document.querySelector("products_data").innerHTML = "";
    details.forEach(function(el, i) {
        // event.preventDefault();

        let box = document.createElement("div"); // create and append this box 

        let image = document.createElement("img");
        image.src = el.image;

        let name = document.createElement("p");
        name.innerText = el.name;


        let brand = document.createElement("p");
        brand.innerText = el.brand;


        let price = document.createElement("p");
        price.innerText = el.price;

        let button = document.createElement("button");
        button.innerText = "Remove Product";
        button.addEventListener("click", function() {
            removeElem(elem, i);
        });
        button.style.cursor = "pointer";

        box.append(image, name, brand, price, button);

        document.getElementById("products_data").append(box);
    });
}

function removeElem(elem, i) {
    Data.splice(i, 1);

    showProduct(Data);
    window.location.reload();
    localStorage.setItem("products_data", JSON.stringify(Data));
}