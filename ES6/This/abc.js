console.log(this);
//here, this is a window object which is by default in browser


var a=5;
console.log(a);
///we only need this for function calling.


function fn(){
    'use strict' //when used it causes the value of this when called without an object to be undefined.
    console.log(this);
}
let obj={
    name:'Ananya', 
    fon:fn

}
//fn();//undefines
//when it comes to functions the binding of this occurs at runtime it happens dynamically

//obj.fon();//Ananya

let rf = obj.fon;
rf();
//so window object is this in here