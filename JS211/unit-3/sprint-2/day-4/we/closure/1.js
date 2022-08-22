//closure related to functions
//nested functions
//there has to be dependacny

function greet() {
    let n = "raj";

    return function() {
        console.log(n);
    }
}
console.log(greet());


let x = greet()


//debouncing

let id;

function debounce(func, delay) {
    if (id) {
        clearTimeout(id);
    }
    id = setTimeout(function() {
        func();
    }, delay);
}