//store the products array in localstorage as "data"


document.getElementById("product_form").addEventListener("submit", mySubmission);

var arr = JSON.parse(localStorage.getItem("data")) || [];

function conFile(b, n, p, i) {
    this.brand = b;
    this.name = n;
    this.price = p;
    this.image = i;
}

function mySubmission(e) {
    e.preventDefault();

    let brand = product_form.product_brand.value;
    let name = product_form.product_name.value;
    let price = product_form.product_price.value;
    let image = product_form.product_image.value;

    let store = new conFile(brand, name, price, image);

    arr.push(store);

    localStorage.setItem("data", JSON.stringify(arr));
    console.log(arr);


}