// Store the wallet amount to your local storage with key "amount";
// document.getElementById("add_to_wallet").addEventListener("click", addToWalletFunc);


if(!localStorage.getItem("amount")){
    localStorage.setItem("amount", JSON.stringify(0));
    document.getElementById("wallet").innerText = 0;
}else{
    let data = JSON.parse(localStorage.getItem("amount"));
    document.getElementById("wallet").innerText = data;
}



// let amountArr = JSON.parse(localStorage.getItem("Amount"))||[];




let addToWalletFunc=()=>{
    let amount = document.getElementById("amount").value;
    let data = JSON.parse(localStorage.getItem("amount"));

    let newAmount = Number(data) + Number(amount);
    console.log(newAmount);

    document.getElementById("wallet").innerText = newAmount;
    localStorage.setItem("amount", JSON.stringify(newAmount));
    window.location.reload();
}


// let sum = 0;
// let arr =amountArr||[];
// document.getElementById("wallet").innerHTML = `${amountArr[amountArr.length-1]}`
// function addToWalletFunc(el){

//     // let amnt = document.getElementById("wallet").value
//     let addedAmount = document.getElementById("amount").value
//     if(amountArr.length >=0){
//         for(var i=0; i < amountArr.length; i++){
//             sum = amountArr[amountArr.length-1] +(+addedAmount);
//         }
//     }
//     else if(amountArr.length ===undefined ){
//         for(var i=0; i < amountArr.length; i++){
//             sum +=  +(+addedAmount);
//         }
//     }

    
//     arr.push(sum);
//     localStorage.setItem("Amount", JSON.stringify(arr));
//     window.location.reload();
    
// }

// // console.log(obj);
// console.log(amountArr);
// // console.log(sum);

