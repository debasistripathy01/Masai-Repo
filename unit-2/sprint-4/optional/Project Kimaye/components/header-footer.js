function header() {
    return `   <div id="container">
    <div id="sign-div">
        <div id="topinfo">
            <div id="sign-name">Sign in</div>
            <div id="closein">Close</div>
        </div>
        <div id="details">
            <label for="">Email Address</label><br>
            <input type="text"><br><br>
            <label for="">Password</label><br>
            <input type="text"><br><br>
            <p id="passtag">Lost Your Password?</p>

            <button id="loginbtn">Login</button><br><br>
            <button class="socialbtnfb">Sign in with Facebook <img src="https://w7.pngwing.com/pngs/69/315/png-transparent-computer-icons-facebook-inc-logo-facebook-blue-text-rectangle.png" alt="" class="social"></button><br><br>


            <button class="socialbtng">Sign in with Google <img src="https://cdn0.iconfinder.com/data/icons/free-social-media-set/24/google-plus-512.png" alt="" class="social"></button>


            <img src="https://icon-library.com/images/user-login-icon/user-login-icon-2.jpg" alt="" class="loginicon">
            <h4 style="margin-left:135px;">Not Account yet?</h4>

            <div class="text">
                Welcome to Kimaye! Help us with a few details to know you better as you take the journey of enjoying our safe and tasty fruits.
            </div>
            <div>
                <button id="accbtn">Create An Account</button>
            </div>


        </div>
    </div>
    <div id="signupdiv">
        <div id="topinfo">
            <div id="sign-name">Sign in</div>
            <div id="closeup">Close</div>
        </div>
        <br>
        <div id="details">
            <button class="socialbtnfb">Sign in with Facebook <img src="https://w7.pngwing.com/pngs/69/315/png-transparent-computer-icons-facebook-inc-logo-facebook-blue-text-rectangle.png" alt="" class="social"></button><br><br>
            <button class="socialbtng">Sign in with Google <img src="https://cdn0.iconfinder.com/data/icons/free-social-media-set/24/google-plus-512.png" alt="" class="social"></button>
            <br><br>
            <label for="">First Name</label>
            <br>
            <input type="text" id="fname">
            <br><br>
            <label for="">Last Name</label>
            <br>
            <input type="text" id="lname">
            <br><br>
            <label for="">Email Address</label>
            <br>
            <input type="text" id="email">
            <br><br>
            <label for="">Password</label>
            <br>
            <input type="text" id="password">
            <br><br>
            <button id="registerbtn">Register</button>
            <hr>
            <br>
            <img src="https://icon-library.com/images/user-login-icon/user-login-icon-2.jpg" alt="" class="loginicon">
            <h4 style="margin-left:135px;">Not Account yet?</h4>
            <div id="text">
                Welcome to Kimaye! Help us with a few details before you begin enjoying our safe and tasty fruits.
            </div>
            <br><br>
            <button id="sign-login">Login</button>
            <br><br><br>

        </div>



    </div>
    <div id="top">
        <p>Currently available in Mumbai & Delhi | Same day delivery available</p>
    </div>
    <div id="down">
        <div id="navbar">
            <div id="shop">SHOP </div>
            <div id="learn">LEARN </div>
            <div>GROW </div>
        </div>
        <div id="kimaye_image">
            <img src="https://cdn.shopify.com/s/files/1/0449/5225/6667/files/website-logo_400x.png?v=1596288204" alt="">
        </div>
        <div id="search_login_bag_icon">
            <div>
                <img src="https://cdn1.iconfinder.com/data/icons/hawcons/32/698956-icon-111-search-512.png" alt="" class="search-icon">
            </div>
            <div>
                <img src="https://cdn2.vectorstock.com/i/1000x1000/08/56/user-profile-login-or-access-authentication-icon-vector-28920856.jpg" alt="" class="left_nav" id="login">
            </div>
            <div>
                <a href="cart.html">
                    <img src="https://cdn3.vectorstock.com/i/1000x1000/31/72/line-shopping-bag-icon-on-white-background-vector-17683172.jpg" alt="" class="left_nav"></a>
            </div>
        </div>


    </div>
    <div id="dropdowndiv">
        <div id="popupdiv">
            <div class="toggledisp">
                <p>ALL FRUITS</p>
                <a href="fresh-cuts.html">
                    <p>FRESH CUTS</p>
                </a>
                <p>FRESH COMBOS</p>
                <p>GIFTS BY KIMAYE</p>
                <p>GRAPES FAMILY</p>
                <p>KIMAYE RETURN and REPLACEMENT</p>
                <p>FRUITS SUBSCRIPTION</p>
                <p>COMMUNITY BUYING</p>
            </div>
        </div>
        <div id="popupdivsec">
            <div class="toggledispsec">
                <p>OUR STORY</p>
                <p> WHY KIMAYE</p>
                <p>TRACEABILITY</p>
                <p>BEYOND FRUITS</p>

            </div>
        </div>
    </div>
</div>`
}



function footer() {
    return `<footer>
    <div id="container">
    <div id="footer">
        <div>
            <h4>FAQ'S</h4>
            <h4>Contact Us</h4>
            <h4>Shipping & Return Policy</h4>
            <h4>Terms & Conditions</h4>
            <h4>Privacy Policy</h4>
        </div>
        <div>
            <div>
                <h4>Follow us on</h4>
                <div id="social_media_image">
                    <div>
                        <img src="https://cdn.shopify.com/s/files/1/0449/5225/6667/files/fb-icon.png?v=1599571756" alt="">
                    </div>
                    <div>
                        <img src="https://cdn.shopify.com/s/files/1/0449/5225/6667/files/insta-icon.png?v=1599571756" alt="">
                    </div>
                    <div>
                        <img src="https://cdn.shopify.com/s/files/1/0449/5225/6667/files/twitter-icon.png?v=1599571756" alt="">
                    </div>
                </div>
            </div>
        </div>
        <hr>

    </div>
    <div>
        <p>Copyrigth© All rights Reserved</p>
    </div>
</div>
</footer>`
}

export { header, footer }