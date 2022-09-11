// Each ticket will cost 100 Rupees
// If wallet amount is insufficient show alert "Insufficient Balance!";
// Else show "Booking successfull!" and adjust the wallet amount in real time



let amountArr = JSON.parse(localStorage.getItem("amount"));


document.getElementById("wallet").innerText = amountArr




function displayMovies(new_data){
    
    let container  = document.getElementById("movie");
    // container.innerHTML = null;

    let {Poster,Title, Year} = JSON.parse(localStorage.getItem("movie"));

        

        let title = document.createElement("p");
        title.innerText = Title;

        let saal = document.createElement("p");
        saal.innerText = Year;

        let image = document.createElement("img");
        image.src = Poster;

        // let btn  = document.createElement("button");
        // btn.innerText = "Book now";
        // btn.setAttribute("class","book_now");
        // btn.addEventListener("click", ()=>{
        //     BookNow(elem, index);
        // });
        
        container.append(image, title, saal);

}

displayMovies();

document.getElementById("confirm").addEventListener("click", confirmTicket);


function confirmTicket(el){
    
    let number  = document.getElementById("number_of_seats").value;
    let total = +number * 100;

    let wallet = +JSON.parse(localStorage.getItem("amount"));
    if(total > wallet){
        alert("Insufficient Balance");
    }else{
        let balance = wallet - total;
        localStorage.setItem("amount", JSON.stringify(balance));

        document.getElementById("wallet").innerText = balance;
        alert("Booking is Successful");
        
    }
    window.location.reload();

    // if(amountArr[amountArr.length-1] >= 100 && amountArr[amountArr.length-1]!== null){
    //     let numOfTickets = document.getElementById("number_of_seats").value;

    //     ticketValue += (+ numOfTickets)*100;
    //     updatedValue = amountArr[amountArr.length-1]-ticketValue;
    //     if(amountArr[amountArr.length-1] < ticketValue ){
    //         alert("Insufficient Balance !")
    //     } 
    //     amountArr.push(updatedValue);
        
    //     alert("Booking Successful!");
    //     window.location.reload();
    // }
    // else if(amountArr[amountArr.length-1] < 100){
    //     alert("Insufficient Balance !");
    // }
    // else{
    //     alert("Insufficient Balance !");
    // }
    // localStorage.setItem("Amount", JSON.stringify(amountArr));
}
// console.log(amountArr);
// console.log(moviesArr);
// console.log(updatedValue);