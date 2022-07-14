


let display = async (url)=>{
    let res = await fetch (url);
    let data = await res.json();

    return data;
};


let append = (data, container)=>{
    //what we need to append and where we need to append
    data.forEach(({image, title, price})=>{

        var box = document.createElement("div");

        let i = document.createElement("img")
        i.src = image;

        let t = document.createElement("h3");
        t.innerText = title;
        
        let p = document.createElement("p");
        p.innerText = price;

        box.append(i,t , p);
        container.append(box);
    })

}

export {display, append};