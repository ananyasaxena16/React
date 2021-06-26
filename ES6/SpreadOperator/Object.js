const state ={
    name:'Ananya',
    address:{
        city:'London',
        country:{
            countryName:'UK',
            countryCode:'UK06'
        }
    }
}

//I need to change this object immutably
/*let copy=state;
copy.name ='alexander';
console.log(state);
console.log(copy);*/
//both have a reference of the same object in heap 
//refernce copy 


//spread operator


/*let copy = {...state}//isne alag object bna diya heap m 
//copy.name ='Alexander';//ye isme dono m change nahi hoga

//***********************------------This is known as shallow copy
// Shallow in this context means that for any given object that is spread,
// the uppermost level of the new variable is a new object containing the values of the original object , 
// but at a new reference
// Any lower level or nested objects however will keep pointing to their original references.******************-----


copy.address.city='Delhi'//isse dono m change hoga as object k andar object h to refernced h agla nested object
console.log(copy);
console.log(state);

//how to protect it 
(do level mein memory change hojaye
    )*/
let copy = {...state, address:{...state.address} };//humne address ki bhi copy bna di 
copy.address.city='delhi';
console.log(copy);
console.log(state);
//copy m address m change aaya because ab object k andar object ko bhi spread operator laga diya

let copy2 = {...state, address:{...state.address, country:{...state.address.country}} };//humne address ki bhi copy bna di 
copy2.address.country.countryCode='delhi06';
console.log(copy2);
console.log(state);
//@2 level hogyi spreading 




