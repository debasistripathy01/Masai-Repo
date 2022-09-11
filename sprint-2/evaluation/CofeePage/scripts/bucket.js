let bucketData = JSON.parse(localStorage.getItem("coffee")) || [];
console.log(bucketData)

let total = bucketData.reduce(function(sum,el){
    return sum +Number(el.price)
},0)
console.log(total)

document.getElementById("total_amount").innerText=total;

bucketData.forEach(function(el,i){

    let bucket = document.getElementById("bucket")
    let div = document.createElement("div")

    let image = document.createElement("img")
    image.src = el.image

    let title = document.createElement("h3")
    title.innerText = el.title
    title.style.color = "gold"
    

    let price  =document.createElement("h3")
    price.innerText = el.price

    let btn = document.createElement("button")
    btn.setAttribute("id","remove_coffee")
    btn.innerText = "remove"
    btn.addEventListener('click',function(){
        removeFun(el,i)
    })
    div.append(image,title,price,btn)
    bucket.append(div)
})

function removeFun(el,i){
    bucketData.splice(i,1)
    localStorage.setItem("coffee",JSON.stringify(bucketData))
    window.location.reload()
}