let userData = JSON.parse(localStorage.getItem("user"))||[];


// let API_KEY = "https://masai-vouchers-api.herokuapp.com/api/vouchers"



if(userData ==undefined){
    alert("Fillup Information")
    window.location.href="./index.html";
}

let wallet = 0;
let new_data;
async function data(){
    let url = "https://masai-vouchers-api.herokuapp.com/api/vouchers";

    try{
        let res = await fetch(url);
        let data = await res.json();
        new_data = data;

    }
    catch(error){
        console.log(error);
    }
    // console.log("data :", data[0]);
        console.log("data : ", new_data[0].vouchers[0].name);

        if(new_data!==undefined){
            DisplayData(new_data[0].vouchers);
        }

    wallet = userData.amount;
    document.getElementById("wallet_balance").innerText = `${wallet}`;
}

data();


function DisplayData(new_data){

    let container =document.getElementById("voucher_list");
    container.innerHTML=null;

    new_data.forEach((el, index)=>{
        let box = document.createElement("div");
        box.setAttribute("class", "voucher");


        let Img = document.createElement("img");
        Img.src = el.image;

        let Name = document.createElement("p");
        Name.innerText = el.name;

        let Price = document.createElement("p");
        Price.innerText = el.price;

        let Btn = document.createElement("button");
        Btn.innerText = "Add Voucher";
        Btn.addEventListener("click", (el)=>{
            submitBtn(el, index);
        })

        box.append(Img, Name, Price, Btn);
        container.append(box);
    })
};

let sum = 0;
let dataArr=[];
function submitBtn(el, index){
    
    let userData = JSON.parse(localStorage.getItem("user"))||[];
    let Data = userData.splice(el,index)
    dataArr.push(Data);
    console.log(dataArr);
    // wallet= userData.amount - (+el.amount);

    
    
    // if(wallet > 0){
    //     document.getElementById("wallet").innerText = `${wallet}`;
    //     let userData = JSON.parse(localStorage.getItem("user"));
    //     userData.amount = wallet;
    //     localStorage.setItem("user", JSON.stringify(userData));
    //     alert("Hurray! Purchase Successful");
    //     window.location.href = "purchase.html";
    // }
    // else{
    //     alert("Sorry! Insufficient Balance");
    // }
}