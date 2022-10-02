function navbar ( length = 0 ) {

    let caerArr = JSON.parse(localStorage.getItem("cart"))

    if(caerArr){
        length =caerArr.length;
    }


    return`<div>
    <h1>
        <a href="./index.html">E-kart</a>
    </h1>
</div>
<div>
    <ul>
        <li>
            <a href="./index.html">Home</a>
        </li>
        <li>
            <a href="./signup.html">Signup</a>
        </li>
        <li>
            <a href="./login.html">Login</a>
        </li>
        <li>
            <a href="./product.html">Products</a>
        </li>
        <li>
            <a href="./cart.html">Cart</a>
        </li>
    </ul>
</div>`

}

//Creating Function that returns html

//export default fn 



export default navbar;


