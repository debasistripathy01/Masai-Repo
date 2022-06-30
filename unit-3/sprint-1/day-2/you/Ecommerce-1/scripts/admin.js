let array = JSON.parse(localStorage.getItem("products")) || [];



function Products(p, c, i, pri, g, s) {
    this.Product = p
    this.Category = c
    this.Image_url = i
    this.Price = p
    this.Gender = g
    this.Sold = s
}


function Data(e) {
    e.preventDefault();

    let form = document.getElementById("form");

    let Product = document.getElementById("name").value;

    let Category = document.getElementById("category").value;
    let Image_url = document.getElementById("imgae").value;
    let Price = document.getElementById("price").value;
    let Gender = document.getElementById("gender").value;
    let Sold = document.getElementById("sold").value;

    let Prod = new Products(Product, Category, Image_url, Price, Gender, Sold);
    array.push(Prod);
    localStorage.setItem("products", JSON.stringify(array));
}