let arr =[0,1,2,3,4,5];
let index = 3;
//I have to insert no 10 at 3rd index
//I have to make this immutatable

/*let narr=[];
for(let i = 0; i<index;i++)
{
    narr[i] = arr[i];

}
narr.push(10);
for(let i = index; i<arr.length; i++)
{
    narr.push(arr[i]);
}
console.log(arr);
console.log(narr);
*/
//narr=[arr.slice(0,index), 10, arr.slice(index, arr.length)];//here arrays k andar arrays aaraha th
//console.log(narr);
narr=[...arr.slice(0,index), 10, ...arr.slice(index, arr.length)];//use of spread for taking an array as separation of elements 

console.log(narr);



//we use this spread operator because we need it in react as to cause immutable changes
