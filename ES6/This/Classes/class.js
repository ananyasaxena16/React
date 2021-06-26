// class abc{
//     constructor(name, age){ //data member idhar define hote h 
//         this.name = name;
//         this.age = age;
//     }
//     sayHi()
//     {
//         console.log('hello');
//         console.log(this.name);
//     }
// }
// //by default classes k andar use strict laga hota h 
// let obj = new abc('Ananya', 20);
// console.log(obj);
// //obj.sayHi();  
// let ret = obj.sayHi;
// ret();//problem use strict activated th aur this gya th undefined to error aajayega because refernce th function ka


/*Solutioon of above problem by bind*/
class abc{
    constructor(name,age)
    {
        this.name=name;
        this.age=age
        this.sayHello = this.sayHi.bind(this)
    }

    sayHi()
    {
        console.log('Hello');
        console.log(this);
        console.log(this.name);
    }

}

let obj = new abc('Tushar',22);
console.log(obj);
obj.sayHello();
let btn = document.querySelector('button');
btn.addEventListener('click',obj.sayHello);


//////////////////////////////////Arrow Function


// class abc{
//     constructor(name,age)
//     {
//         this.name=name;
//         this.age=age
//     }
//     sayHi=()=>
//     {
//         console.log('Hello');
//         console.log(this);
//         console.log(this.name);
//     }
// }

// let obj = new abc('Tushar',22);
// console.log(obj);
// obj.sayHi();
// let btn = document.querySelector('button');
// btn.addEventListener('click',obj.sayHi);




///////////////////////////////////////////////////////////////


// class abc{
//     constructor(name,age)
//     {
//         this.name=name;
//         this.age=age
//     }

//     sayHi()
//     {
//         console.log('Hello');
//         console.log(this);
//         console.log(this.name);
//     }

// }

// let obj = new abc('Tushar',22);
// console.log(obj);
// // let ret = obj.sayHi;
// // ret();

// setTimeout(obj.sayHi,1000);