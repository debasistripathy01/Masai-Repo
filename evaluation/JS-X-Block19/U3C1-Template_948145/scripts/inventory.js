



let main=()=>{
    let Data = JSON.parse(localStorage.getItem("data"))||[];
    Display(Data);
}


let Display=(Data)=>{
    let container = document.getElementById("products_data")

    container.innerHTML = null;
    Data.forEach(({Brand, Name, Price,  Image_url}, index) => {
        let box = document.createElement("div");

        let img = document.createElement("img");
        img.src = Image_url;
        img.setAttribute("class", "image_pic")

        let brand = document.createElement("h2");
        brand.innerText = Brand;

        let name = document.createElement("h3");
        name.innerText = Name;

        let price = document.createElement("h4");
        price.innerText =Price;

        let btn = document.createElement("button");
        btn.innerText = "Remove Product";
        btn.id = "remove_product";

        btn.onclick=()=>{
            remove(index);
        }


        box.append(img, brand, name, price, btn);
        container.append(box);
        
    });
};

main();

let remove = (id)=>{
    let Data = JSON.parse(localStorage.getItem("data"));
    Data = Data.filter((el, index)=>{
        return index !== id;
    });
    localStorage.setItem("data", JSON.stringify(Data));
    Display(Data);
}