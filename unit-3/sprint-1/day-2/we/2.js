//24

//34

//43

//39

//   let array = [];
//   function Submit(e) {
//     e.preventDefault();

//     let form = document.getElementById('form');

//     let name = form.name.value;
//     let price = form.price.value;

//     let product = new EcommProducts(name, price);

//     array.push(product);

//   }

//   function EcommProducts(n, p) {
//     this.name = n;
//     this.price = p;

//     //xyz
//   }

//   //normaL function
//   function nikeProduct(n, t, p) {
//     let obj = {};
//     obj.name = n;
//     obj.type = t;
//     obj.price = p;

//     return obj;
//   }

//   let x = nikeProduct('shoe', 'sneaker', 2000);

//   //   console.log('x:', x);

//   //constructor function -

//   function nikeProductCF(n, t, p) {
//     this.name = n;
//     this.type = t;
//     this.price = p;
//   }

//   //new -> return
//   //this - {}

//   let y = new nikeProductCF('T-shirt', 'sport', '1999');
//   console.log('y:', y);

//call, apply , bind

let bedroom = {
    name: 'bedroom',
};

let lr = {
    name: 'living room',
};

let kitchen = {
    name: 'kitchen',

    cookfood: function(order, name) {
        console.log(`Serving ${order} in ${this.name}`);
    },
};

//serving maggie in bedroom ( bedroom.name )

//this -> kitchen

//this-> bedroom??

//this-> LR?

kitchen.cookfood('Maggie'); //87, 82, 83

kitchen.cookfood.call(lr, 'maggie', 'shubham');

kitchen.cookfood.apply(lr, ['maggie', 'shubham']);

kitchen.cookfood.call(bedroom, 'maggie');