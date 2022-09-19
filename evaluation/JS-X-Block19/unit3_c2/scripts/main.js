
let form = document.getElementById("form");

let Data =  JSON.parse(localStorage.getItem("user"))||[];

// form.addEventListener("submit", ()=>{
//     submitInfo();
// })


function submitInfo(){
    // event.preventDefault();
    
    let name = form.name.value;
    let email = form.email.value;
    let address = form.address.value;
    let amount = form.amount.value;

    let UserData = {
        name, 
        email,
        address,
        amount
    };
    localStorage.setItem("user", JSON.stringify(UserData));
    window.location.href = "voucher.html";
    
}

// console.log(Data);