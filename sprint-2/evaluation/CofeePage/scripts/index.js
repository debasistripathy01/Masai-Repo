async function main(){

    let url = "https://masai-mock-api.herokuapp.com/coffee/menu"

    try{
        let res = await fetch(url)
        let data = await res.json()
        console.log(data.menu.data)
        getData(data.menu.data)
    }
    catch(err){
        console.log(err)
    }
}

// async function main(){
//     let search = document.getElementById("search").value;

//     try{
//         let res = await fetch(`${url}${KEY}&s=${search}`);
//         let data = await res.json();

//         let new_data = data.Search;
        
//         // console.log("data :", new_data);

        
//         if(new_data !== undefined){
//             moviesArr = new_data;
//             displayMovies(new_data);
            
//         };
//     }
//     catch(error){
//         console.log(error);
//     }
// }




main()

function getData(product){

    let addData = JSON.parse(localStorage.getItem("coffee")) || []
    let length = addData.length
    document.getElementById("coffee_count").innerText = length;

    product.forEach(function(el){

        let menu = document.getElementById("menu")
        let div = document.createElement("div")

        let image = document.createElement("img")
        image.src = el.image

        let title = document.createElement("h3")
        title.innerText = el.title
        title.style.color = "gold"

        let price  =document.createElement("h3")
        price.innerText = el.price

        let btn = document.createElement("button")
        btn.setAttribute("id","add_to_bucket")
        btn.innerText = "Add To Bucket"
        btn.addEventListener('click',function(){
            addFun(el)
        })

        div.append(image,title,price,btn)
        menu.append(div)
    })

    function addFun(el){
        addData.push(el)
        localStorage.setItem("coffee",JSON.stringify(addData))
        alert("Jod diya gaya h")
        window.location.reload()
    }
}