const API_key = "AIzaSyCJG_sX9B93J-W_HVkl0I_Xo6l1nj6F_ps";


//https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=avengers&key=[AIzaSyCJG_sX9B93J-W_HVkl0I_Xo6l1nj6F_ps]
//  'https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=avengers&key=[YOUR_API_KEY]' \


let search = () => {
    let query = document.getElementById("query").value;

    getData(query);
}

let getData = async(query) => {
    let url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${query}&key=${API_key}`


    let res = await fetch(url);
    let data = await res.json();

    console.log(data);
    return data.items;
}

let append = (data) => {
    let container = document.getElementById("container");
    container.innerHTML = "";
    data.forEach((el) => {
        //snippet --> title
        // snippet ---> thumbnails ----> images

        let img = document.createElement("img");
        img.src = el.snippet.thumbnails.medium.url;

        let h3 = document.createElement("h3");
        h3.innerText = el.snippet.title

        let box = document.createElement("div");
        box.onclick = () => {
            saveData(el);
        }
        box.setAttribute("class", "video");
        box.append(img, h3);

        container.append(box);
    });
}

let saveData = () => {
    localStorage.setItem("video", JSON.stringify(data))
}