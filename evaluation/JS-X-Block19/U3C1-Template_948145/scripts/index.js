//store the products array in localstorage as "data"



document.getElementById("product_form").addEventListener("submit", submitDataFunc);

let NikeData = JSON.parse(localStorage.getItem("data")) ||[];

let form = document.getElementById("product_form")
// form.innerHTML = "";
function submitDataFunc(event){
    event.preventDefault();

    let Brand = form.product_brand.value;
    let Name = form.product_name.value;
    let Price = form.product_price.value;
    let Image_url  = form.product_image.value;

    let Data = new fileData(Brand, Name, Price, Image_url);

    NikeData.push(Data);
    localStorage.setItem("data", JSON.stringify(NikeData));
    window.location.reload();
}


function fileData(b, n, p, i){
    this.Brand = b;
    this.Name = n;
    this.Price = p;
    this.Image_url = i;
}