let navbar = ()=>{
    return `<input type="search" id="search_box" placeholder="Only Search Tesla or Twitter">

    <div id="country_code">
        <button id="in">India</button>
        <button id="us">USA</button>
        <button id="ch">China</button>
        <button id="uk">UK</button>
        <button id="nz">New Zealand</button>
    </div>`;
}

let sideBar = ()=>{
    return `<img src="" id="user_image" alt="" aria-placeholder="Imgae link">
        <h3 id="user_name"></h3>
        <h3 id="user_email"></h3>
        <h3 id="user_country"></h3>`
}

export {navbar, sideBar}










