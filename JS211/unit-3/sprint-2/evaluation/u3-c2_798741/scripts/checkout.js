let submit_data = document.getElementById("submit").addEventListener("click", submitData);



function submitData() {
    alert("Your order is confirmed");
    window.location.reload()
    setTimeout(confirm1, 3000);
    setTimeout(confirm2, 8000);
    setTimeout(confirm3, 10000);
    setTimeout(confirm4, 12000);
}

function confirm1(ele) {
    alert("Your order is being Packed");
    window.location.reload();
}

function confirm2(ele) {
    alert("Your order is in transit");
    window.location.reload();
}

function confirm3(ele) {
    alert("Your order is out for delivery");
    window.location.reload();
}

function confirm4(ele) {
    alert("Order delivered");
    window.location.reload();
}