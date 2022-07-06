function sum() {
    let a = 5;

    return function() {
        console.log(a);
    }
}


let x = sum();

x();