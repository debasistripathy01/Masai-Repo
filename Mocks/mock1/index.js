// // API = https://jsonplaceholder.typicode.com/comments

// let array;
let limit = 10;
    let page = 1;
    let post= 1;
    
    const extraData = ()=>{
        setTimeout(()=>{
            page++
            getData()
        },200)
    }

    const getData = async ()=>{
        try{
          const res =  await fetch(`https://jsonplaceholder.typicode.com/comments?_limit=${limit}$_page=${page}`)
          const data =  await res.json()

        //   / const getItems =async()=>{



            //     const url = "https://jsonplaceholder.typicode.com/comments";
            
            //     try{
            
            //         let res = await fetch(url);
            //         let data = await res.json();
                    
            //         // DisplayData(data.map({el})=>el);
            //         let array = data.map(({name, email, body})=>(name, email, body))
            // // console.log(array.length);
            //     DisplayData(data)
          data.forEach((el,ind)=>{
            const show = `
            <div id="posts">
                <h2 id="post_id">${post++}</h2>
                <p id="post_body">Name:-${el.name}</p>
                <p id="post_body">Body:-${el.body}</p>
            </div>
            `
            post++
            cont.insertAdjacentHTML("beforeend",show)
        })
       


    }catch(err){
        console.log(err)
    }
}


// getData()
//     const getAnother = ()=>{
//         setTimeout(()=>{
//             page++
//             getData()
//         },200)
//     }
// // getItems();


// // const data = document.getElementById("container");
// const DisplayData =(array)=>{
    
    
//     // const container = document.getElementById("container");
//     const container = document.createElement("container");
//     container.setAttribute("id", "mainDiv")
//     array.forEach((ele, index)=>{

//             const show = `
//             <div id="posts">
//                 <h2 id="post_id">${post++}</h2>
//                 <p id="post_body">Name:-${el.name}</p>
//                 <p id="post_body">Body:-${el.body}</p>
//                 <button onClick= id="post_body">Details</button>
//             </div>
//             `
//             cont.insertAdjacentHTML("beforeend",show)
//         })

//         let btn = document.createElement("button")
//         btn.setAttribute("id","clickOnit")
//         btn.addEventListener("click", ()=>{
//             const Box = document.createElement("span");
//             Box.setAttribute("class","Box" )
//             Box.append(box)

//         })


//         btn.innerText = "Details"


//         // let hide = document.createElement("button");



//         box.append(postId, name, comments, btn);
//         container.append(box)
//         data.insertAdjacentElement("beforeend",box)


    
// }

// let limit = 10;
//     let page = 1;
//     let post= 1;
//     const getData = ()=>{
//         setTimeout(()=>{
//             page++
//             getItems()
//         },200)
//     }

//     window.addEventListener("scroll",()=>{
//         const {scrollHeight,scrollTop,clientHeight} = document.documentElement
//         if(scrollTop+clientHeight>=scrollHeight){
//             getData()
//         }
//     })


// data.addEventListener('scroll', function () {
//     if (data.scrollTop + data.clientHeight >= data.scrollHeight) {
//         newlist();
//     }
// });


const cont = document.getElementById("container");
    
    
    
    extraData()
    window.addEventListener("scroll",()=>{
        const {scrollHeight,scrollTop,clientHeight} = document.documentElement
        if(scrollTop+clientHeight>=scrollHeight){
            extraData()
        }
    })
