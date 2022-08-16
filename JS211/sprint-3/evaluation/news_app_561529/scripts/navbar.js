let navbar = ()=>{
    return `<input type="search" id="search_box">
    <button onclick="debounceSearchFunc(DisplayData,1000)" id="enter">Enter</button>
    <div id="country_code">
    <button id="in">India</button>
    <button id="us">USA</button>
    <button id="ch">China</button>
    <button id="uk">UK</button>
    <button id="nz">New Zealand</button>
    </div>`;
}

export default navbar;










