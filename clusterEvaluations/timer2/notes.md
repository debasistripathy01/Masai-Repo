
1. Difference between Props and State.


Props are used to pass data from one component to another.  Props stands for Properties which are basic attributes passed onto the component. Props are properties of the child elements.
The state is a type os status for data storage for temporary basis. It changes everytime we re-render anything. We use useState hook to create Rendering or state managing process.


2. UseState in react. 




3. Create own map, filter, reducer and attach it to an array using Prototype chain.


//Create Own Array

function MyArray(){
    this.length =0;
    Object.definedProperties(this, "length",{
        value: 0,
        enumerable: false,
        writable: 0
    })
}

//push //pop //map
MyArray.prototype.pushm = function(elem){
    this[this.length] = elem;
    this.length++;
    return this.length;
}


//  Pop using Prototype Chain

var arr = new MyArray();
arr.push("Masai");
arr.push("School")


MyArray.prototype.pop = function(elem){
    var popelem = this.length
    delete this[this.length];
    return popelem
}

var array = [1,2,3,4];

// map function using Prototype
var res = [];
array.prototype.map= function(obj){
    for(index in this){
        if(this.hasOwnProperty(index)){
            return result.push(obj(this[index],this, this[index]))
        }
    }
}



arr.map((el)=>{
    console.log(el);
    return el*el;
})




// MAp function using Prototype CHain using for in Object

// For in loops through all the numerable properties of 

MyArray.prototype.map = function (elem){
    var mapArray = 
}






i). Filter inbuilt Definition: 
 var arr = [1,2,3,4];
 console.log(arr.filter(function(el){
   return el;
 }))
 console.log(arr.filter());

 ii). Map inbuilt Definition: 

 var arr = [1,2,3,4];
 var newArr = arr.map(function(el){
     el*4;
 })
 console.log(newArr);


 iii). 