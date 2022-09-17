//  url = "https://masai-mock-api.herokuapp.com/hotels/search?city=${query}"



let q = "";

let search = async() => {
    let query = document.getElementById("query").value;
    let items = showData(query);
    q = query;
    display(items);
    showData(query)
}

let display = async(query) => {
    try {
        let url = `https://masai-mock-api.herokuapp.com/hotels/search?city=${query}`;
        let res = await fetch(url);
        let items = await res.json();
        console.log(items);
        display(items);
    } catch (err) {
        console.log(err);
    }
}

showData();
let hotelsDataArr = [];

// image, title, price, rating, ac/non-ac status and a book now button

// displayData()

function display(items) {
    let container = document.querySelector("hotels_list")
    container.innerHTML = "";

    items.forEach(function(element) {
        let box = document.createElement("div");
        box.id = "hotels"

        let image = document.createElement("img");
        image.src = elem.Images;

        let title = document.createElement("p");
        title.innerText = elem.Title;

        let price = document.createElement("p");
        price.innerText = elem.Price;

        let rating = document.createElement("p");
        rating.innerText = elem.Rating;

        let status = document.createElement("p");
        status.innerText = elem.Ac;

        let button = document.createElement("button");
        button.innerText = "Book Now";
        button.addEventListener("click", function() {
            showData(elem);

        });
        box.onclick = () => {
                saveData(el.id);
            }
            // box.setAttribute("id", "hotel")

        box.append(image, title, price, rating, status, button);
        container.append(box);


    })

}

var dataArr = [];

function showData(el) {
    let data = el.items;

    dataArr.push(data);
    localStorage.setItem("hotelsData", JSON.stringify(dataArr));
    window.location.reload();
}

let sort = async() => {
    let data = await showData(q);
    data = data.sort((a, b) => {
        return a.price - b.price;
    });
    display(data);
}