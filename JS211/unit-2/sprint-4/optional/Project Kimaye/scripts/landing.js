//top slide show images---->
let image_array = [];

let slideshow_image = document.querySelector("#image");

let url1 = "https://cdn.shopify.com/s/files/1/0449/5225/6667/products/dbe751de-009c-4454-a3f1-42375be8bb15.png?v=1614859367";

image_array.push(url1);

let url2 = "https://cdn.shopify.com/s/files/1/0449/5225/6667/products/c54118d4-fe2a-4805-aa25-777c029932ee.png?v=1614327346";

image_array.push(url2);

let url3 = "https://cdn.shopify.com/s/files/1/0449/5225/6667/products/Mahashivratri-Combo-cover.progressive.jpg?v=1645619337";

image_array.push(url3);

let url4 = "https://cdn.shopify.com/s/files/1/0449/5225/6667/files/fruit_box.png?v=1600179109";

image_array.push(url4);

let url5 = "https://cdn.shopify.com/s/files/1/0449/5225/6667/products/1_3311b3de-1a38-4175-8e8c-ac9577ec85df-min.progressive.jpg?v=1614324760";

image_array.push(url5);
console.log(image_array)
let i = 1;
setInterval(function() {
    if (i === image_array.length) {
        i = 0;
    }
    slideshow_image.src = image_array[i];
    i = i + 1;
}, 4000)

//witness journey slideshow----->


let image_array1 = [];

let slideshow_image1 = document.querySelector("#journy-slideshow-image");

let url6 = "https://cdn.shopify.com/s/files/1/0449/5225/6667/files/secret-1_guetzli-min.jpg?v=1614755149";

image_array1.push(url6);

let url7 = "https://cdn.shopify.com/s/files/1/0449/5225/6667/files/secret-2_guetzli-min.jpg?v=1622009925";

image_array1.push(url7);

let url8 = "https://cdn.shopify.com/s/files/1/0449/5225/6667/files/secret-3_guetzli-min.jpg?v=1614755148";

image_array1.push(url8);

let url9 = "https://cdn.shopify.com/s/files/1/0449/5225/6667/files/secret-4_guetzli-min.jpg?v=1622009925";

image_array1.push(url9);

let url10 = "https://cdn.shopify.com/s/files/1/0449/5225/6667/files/secret-5_guetzli-min.jpg?v=1622009925";

image_array1.push(url10);

console.log(image_array1)


let j = 1;
setInterval(function() {
    if (j === image_array1.length) {
        j = 0;
    }
    slideshow_image1.src = image_array1[j];
    j = j + 1;
}, 3000)

// scrolling functionallty in x -direction----->


let cont = document.getElementById("slide-div");
document.getElementById("scrollleftbtn").addEventListener("click", () => {
    scroll("slide-div", "left");

    // cont.scrollLeft-=1420;
});

document.getElementById("scrollrightbtn").addEventListener("click", () => {
    scroll("slide-div", "right");

    //cont.scrollLeft+=1420;
});

function scroll(id, direction) {
    //  console.log('enterrint')
    if (direction === "left") {
        console.log("enetr")
        cont.scrollLeft -= 1420;
        cont.style.scrollBehaviour = "smooth"
    } else {
        cont.scrollLeft += 1420
    }
    let sl = setInterval(() => {
        let scrollAmount = 0;
        if (direction == "left") {
            cont.scrollLeft -= 1420;
            cont.style.scrollBehaviour = "smooth"
        } else {
            cont.scrollLeft += 1420
        }
        scrollAmount += 1420;
        if (scrollAmount >= 1420) {
            clearInterval(sl);
        }
    }, 100);
}