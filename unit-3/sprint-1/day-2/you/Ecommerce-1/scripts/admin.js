document.getElementById("form").addEventListener("submit", Data);

let array = JSON.parse(localStorage.getItem("Products")) || [];



function Product2(p, c, i, pri, g, s) {
    this.Product = p;
    this.Category = c;
    this.Image_url = i;
    this.Price = p;
    this.Gender = g;
    this.Sold = s;
}


function Data(e) {
    e.preventDefault();

    let form = document.getElementById("form");

    let Name = form.name.value;

    let Category = form.category.value;
    let Image_url = form.image.value;
    let Price = form.price.value;
    let Gender = form.gender.value;
    let Sold = form.sold.value;

    let Prod = new Product2(Name, Category, Image_url, Price, Gender, Sold);
    array.push(Prod);
    localStorage.setItem("Products", JSON.stringify(array));
}