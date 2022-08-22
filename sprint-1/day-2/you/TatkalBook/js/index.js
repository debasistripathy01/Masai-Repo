

// Confirm || waiting
// resolved || rejected

//train :- 100
// 100 seats are booked :- waiting ticket 1



let waiting = 106;
let seats = 100;


setInterval(()=>{
    waiting--;
    console.log(waiting);
    alert("Your ticket is cancelled");
}, 3000);

let id;

let submit=()=>{

    let name  = document.getElementById("name").value;

    let user_waiting = waiting + 1;
    let p = new Promise((res,rej)=>{
        id = setInterval(()=>{
            if(user_waiting<= seats){
                clearInterval(id);
                res("Your TIcket Has been COnfirmed");
                window.location.href="ticket.html"

            }else{
                rej("Waiting");
                alert("YOur ticket is not confirmed yet")
            }
        }, 3000);
        
    });
    p.then((res)=>{
        alert(`${name}${res}`);

    }).catch((error)=>{
        console.log(error);
        alert(`${name}${res}`)
    });
};


// within every Minute every ticket will be cancelled

// when his waiting number is 100 or below 100

// Take name, seat NO, input from User and Register 
// Booking Ticket 

//Book a seat ---> 106;

