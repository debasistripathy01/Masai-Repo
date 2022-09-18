

var arr2 = [];
// let ArticlesArr = JSON.parse(localStorage.getItem("newsData"))|| [];
async function main(){
    let allData =[];
    let morePagesAvailable = true;
    let url = "https://jsonmock.hackerrank.com/api/articles"
    try{
        let currentPage  =0;
        while(morePagesAvailable){
            currentPage++;
            let res = await fetch(`${url}?page=${currentPage}`);
            let {data, total_pages} = await res.json();
            data.forEach(e => allData.unshift(e));
            morePagesAvailable = currentPage < total_pages;
        }
        // return allData
            // ArticlesArr.push(new_data);
            // console.log("data :", new_data)
        

    
        DisplayData(allData);
        console.log("data :", allData);
        // for(let t in arr){
        //     console.log("data of arr : ", ...arr[t]);
        // }

    }catch(error){
        console.log(error)
    }
}

main();




function DisplayData(element){
    
    let container = document.getElementById("articles")
    container.innerHTML=null;

    element.forEach((el)=>{

        let box = document.createElement("div")
        box.id = "box"

        let title = document.createElement("p");
        title.innerText = el.title;

        let img = document.createElement("img");
        img.src = el.url;

        let author = document.createElement("p");
        author.innerText = el.author;

        let numComments = document.createElement("p");
        numComments.innerText = el.num_comments;

        box.append(img, title, author, numComments);
        container.append(box);
    });
}
