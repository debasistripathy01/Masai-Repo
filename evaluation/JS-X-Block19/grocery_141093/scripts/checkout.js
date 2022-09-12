/*
Alerts 
0 seconds : Your order is accepted 
3 seconds : Your order is being Packed 
8 seconds : Your order is in transit  
10 seconds : Your order is out for delivery 
12 seconds : Order delivered
*/


let submit_data = document.getElementById("submit").addEventListener("click", function(){
    submitData();
});


let id;
function submitData(el,delay) {
    if(id){
        clearTimeout(id);
    }
    alert("Your order is confirmed");

    id = setTimeout(function(){
        confirm1(el);
    }, 3000);
    id = setTimeout(function(){
        confirm2(el);
    }, 8000);
    id = setTimeout(function(){
        confirm3(el);
    }, 10000);
    id = setTimeout(function(){
        confirm4(el);
    }, 12000);
}

function confirm1(el) {
    alert("Your order is being Packed");
    // window.location.reload();
}

function confirm2(el) {
    alert("Your order is in transit");
    // window.location.reload();
}

function confirm3(el) {
    alert("Your order is out for delivery");
    // window.location.reload();
}

function confirm4(el) {
    alert("Order delivered");
    window.location.reload();
}