// function fn(){
//     console.log(`Hi my name is ${this.person}`);//Hi my name is ananya
//     console.log(this);//obj
//     function abc()
//     {
//         console.log(this.person);//window//undefined

//     }
//     abc();
// }
// let obj = {
//     person:'Ananya',
//     func:fn
// }
// obj.func();

/*above problem is either solved by bind or arrow fn*/

//////////////////////////bind

//let ret = function.bind(argument);
//ret is a function
//ret ka jo this hota h that becomes equal to the passed argument


// function fn(){
//     console.log(`Hi my name is ${this.person}`);//Hi my name is ananya
//     console.log(this);//obj
//     function abc()
//     {
//         console.log(this.person);//obj

//     }
//     let rf = abc.bind(this);
//     rf();
// }
// let obj = {
//     person:'Ananya',
//     func:fn
// }
// obj.func();



///////////////////////////////Arrow FN

//apna this apne lexically superior(parent) function k barabar laga dete h 
function fn(){
    console.log(`Hi my name is ${this.person}`);//Hi my name is ananya
    console.log(this);//obj
   let abc = ()=>{
    console.log(this.person);//obj//Ananya
   }
    
    abc();
}
let obj = {
    person:'Ananya',
    func:fn
}
obj.func();



