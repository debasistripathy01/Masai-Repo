//Prototypal inheritance

var obj = {
    name: 'bike'
};

var obj2 = Object.create(obj);
console.log("boj2 :", obj2)

console.log("obj2 name :", obj2.name);


var family = {
    father: 'krishna',
    myFather() {
        console.log(this.father)
    }
}
var son = Object.create(family);
console.log(son.myFather())


function Person(n, a) {
    this.name = n
    this.age = a
}

// Person.prototype.city = "pune";

Person.prototype.city = function(c) {
    this.city = c
}



var person1 = new Person('raj', 23);

person1.city("mumbai");
console.log("person1 : ", person1);
// __proto__  points towards the original model


//--------hasOwnProperty()     Object.hasOwnProperty()

var a = 'rooni';

var b = Object.create(a)

b.age = 21;
b.hasOwnProperty("age");

console.log(b);

console.log(b.__proto__.__proto__.__proto__)


// wHat is a inheritance ?
// ANs - One object gets access to properties and methods of other objects

// What is a prototype?
// A blueprint
// An original object from which a new object is created.
// What is inheritance?
// In simple terms, inheritance is the concept of one thing gaining the properties or behaviors of something else.

// To say A inherits from B, is saying that A is a type of B.

// a Bird inherits from an Animal because a Bird is a type of Animal - it has characteristics of every other animal, but other features as well.

//  Why Inheritance?
// It allows us to borrow properties and function methods of one object on another object. ( Inheritance )