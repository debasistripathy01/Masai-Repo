
let id;

let url1 = "https://masai-api.herokuapp.com/hotels/search?city=goa";
let url2 = "https://masai-api.herokuapp.com/hotels/search?city=mumbai"
let data;
let HotelsDataArr = [];

let query = document.getElementById("query").value

let main = async()=>{
    let res = await fetch(url1);
// let url = `https://masai-api.herokuapp.com/hotels/search?city=${query}`;
    
        if(query==="goa"){
            res = await fetch("https://masai-api.herokuapp.com/hotels/search?city=goa");
        }
        if(query==="mumbai"){
            res = await fetch("https://masai-api.herokuapp.com/hotels/search?city=mumbai");
        }
        data = await res.json();

        console.log("data : ", data.hotels);

        if(data.hotels !==undefined){
            displayData(data.hotels)
        }
}



// let hotelsDataArr = [];

// let q = "";
// let query = document.getElementById("query").value;
// let search = async() => {
    
//     let items = showData(query);
//     q = query;
//     // display(items);
//     showData(query)
// }

// search();

// let showData = async() => {

//     try {
//         let url = `https://masai-api.herokuapp.com/hotels/search?city=${query}`;
//         let res = await fetch(url);
//         let items = await res.json();
//         // let new_data = items.hotels;
//         console.log(items.hotels);
//         display(new_data);
//     } catch (err) {
//         console.log(err);
//     }
// }

// showData();


// // image, title, price, rating, ac/non-ac status and a book now button

// // displayData()

function displayData(items) {
    let container = document.getElementById("hotels_list")
    container.innerHTML = null;

    items.forEach(function(elem) {
        let box = document.createElement("div");
        box.id = "hotels"

        let image = document.createElement("img");
        image.src = elem.Images.one;

        let image2 = document.createElement("img");
        image2.src = elem.Images.two;

        let title = document.createElement("p");
        title.innerText = elem.Title;

        let price = document.createElement("p");
        price.innerText = elem.Price;

        let rating = document.createElement("p");
        rating.innerText = elem.Rating;

        let status = document.createElement("p");
        status.innerText = "AC : "+" " + elem.Ac;

        let button = document.createElement("button");
        button.innerText = "Book Now";
        button.addEventListener("click", function() {
            showData(elem);

        });
        // box.onclick = () => {
        //         saveData(el.id);
        //     }
        //     box.setAttribute("id", "hotel")

        box.append(image, image2, title, price, rating, status, button);
        container.append(box);


    })

}

var dataArr = [];

function showData(el) {
    // let data = el.items;

    dataArr.push(el);
    localStorage.setItem("hotelsData", JSON.stringify(dataArr));
    window.location.reload();
}



let sort = async() => {

    // let data = showData(q);
    let data = data.sort((a, b) => {
        return a.price - b.price;
    });
    displayData(data);
}


let debounceSearchFunction = (main, delay)=>{
    if(id){
        clearTimeout(id);
    }

        id= setTimeout(()=>{
            main();
        }, 2000);
    
};