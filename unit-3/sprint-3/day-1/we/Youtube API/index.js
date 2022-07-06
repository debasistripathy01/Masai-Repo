//https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=avengers&key=[AIzaSyCJG_sX9B93J-W_HVkl0I_Xo6l1nj6F_ps]
//  'https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=avengers&key=[YOUR_API_KEY]' \
////https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=avengers&key=[YOUR_API_KEY]


const API_key = "AIzaSyCJG_sX9B93J-W_HVkl0I_Xo6l1nj6F_ps";
let container = document.getElementById("container");

let search = () => {
    let query = document.getElementById("query").value;

    getData(query);
}

// let query = document.getElementById("query").value;

let getData = async(query) => {
    try {
        let url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${query}&key=${API_key}`


        let res = await fetch(url);
        let data = await res.json();

        console.log(data.items);
        append(data.items);
        // return data.items;
    } catch (err) {
        console.log("error");
    }
}

getData();

let append = (data) => {
    // container.innerHTML = "";
    container.innerHTML = "";
    data.forEach((el) => {
        //snippet --> title
        const {
            id: {
                videoId
            },
        } = el;
        // snippet ---> thumbnails ----> images
        let box = document.createElement("div");
        box.setAttribute("id", "cards");

        let img = document.createElement("img");
        img.src = el.snippet.thumbnails.medium.url;
        // img.addEventListener("click", () => {
        //     PlayVideo(el.id)
        // })


        let h3 = document.createElement("h3");
        h3.innerText = el.snippet.title;
        h3.setAttribute("id", "title")


        // let button = document.createElement("button");
        // button.addEventListener("click", () => {
        //     PlayVideo(el.id)
        // });
        // button.append(img);

        box.onclick = () => {
            PlayVideo(el.id);
        }

        box.setAttribute("class", "video");

        box.append(img, h3);

        container.append(box);
    });
};

var dataArr = [];
const PlayVideo = (elem) => {
    let anything = elem.videoId
        // console.log(x);
    dataArr.push(anything);
    localStorage.setItem("video", JSON.stringify(dataArr));
    window.location.href = "video.html";
}


// let saveData = (el) => {
//         let vidId = el.videoId;
//         console.log(vidId);
//         // console.log("video", el);
//         dataArr.push(vidId);
//         localStorage.setItem("video", JSON.stringify(dataArr));
//         window.location.href = "video.html";

//     }
// console.log(video);