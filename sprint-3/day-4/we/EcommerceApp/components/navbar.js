function navbar ( length = 0 ) {

    let caerArr = JSON.parse(localStorage.getItem("cart"))

    if(caerArr){
        length =caerArr.length;
    }


    return`<div class="navbar__div">
    <div>
        <h1>
            <a href="index.html">App Name</a>
        </h1>
    </div>

    <div>
        <ul>

            <li>
                <a href="index.html">Todo</a>
            </li>
            <li>
                <a href="product.html">Product</a>
            </li>
            <li>
                <a href="registration.html">Register</a>
            </li>
            <li>
                <a href="dog.html">Dogs</a>
            </li>

            <li>
                <h4>
                    <a href="cart.html" >Cart : ${length}</a>
                </h4>
            </li>
        </ul>
    </div>
</div>`

}

//Creating Function that returns html

//export default fn 



export default navbar;


