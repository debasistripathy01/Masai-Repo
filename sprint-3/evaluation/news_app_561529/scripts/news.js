


let data = JSON.parse(localStorage.getItem("news_data"))||[];
displayNews(data);


function displayNews(data){

    let container = document.getElementById("detailed_news");
    container.innerHTML = null;

    data.forEach((elem)=>{
        let box = document.createElement("div");
        box.setAttribute("class", "box");

        let image = document.createElement("img");
        image.src = elem.urlToImage;

        let title = document.createElement("h3");
        title.innerText = elem.title;


        let desc = document.createElement("h4");
        desc.innerText = elem.description;


        box.append(image, title, desc);
        container.append(box);
    });
}