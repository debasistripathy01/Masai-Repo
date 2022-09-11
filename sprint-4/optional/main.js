


let data = document.getElementById("add_product");
data.onclick=()=>{
    alert("Clicked");
    registerData(event);
};

async function registerData(event){
    event.preventDefault();

    let form = {
        name : document.getElementById("name").value,
        price : document.getElementById("price").value,
        description : document.getElementById("description").value,
        delivery : document.getElementById("delivery").value,
        image : document.getElementById("image").value,
    };

    let form_data = JSON.stringify(form);

    let res = await fetch("https://calm-badlands-50809.herokuapp.com/api/Products",
    {
        method : "POST",
        body : form_data,
        headers : {
            "Content-Type": "application/json",
        }
    });
    console.log("response : ", res);
    window.location.reload();
}


let box = document.createElement("container");

async function display(){
    
}




