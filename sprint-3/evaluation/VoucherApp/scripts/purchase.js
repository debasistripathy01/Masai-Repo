
let userData = JSON.parse(localStorage.getItem("user"));
if(!userData){
    window.location.href="./index.html";
}

let purchasedVoucher = JSON.parse(localStorage.getItem("purchase"));

if(purchasedVoucher ===undefined){
    window.location.href = "./index.html";

}

DisplayData(userData);

function DisplayData(userData){
    let container = document.getElementById("purchased_vouchers");
    container.innerHTML = null;

    document.getElementById("wallet_balance").innerText = `${userData.amount}`

    userData.forEach((el)=>{
        let box = document.createElement("div");
        box.setAttribute("class", "box");

        let image = document.createElement("img")
        image.src = el.image;

        let Price = document.createElement("p");
        Price.innerText = el.price

        let Name = document.getElementById("p");
        Name.innerText = el.name;

        box.append(image, Name, Price)
        container.append(box);
    })
}