// function add(...numbers){
//     let total =0;
//     for (const num of numbers){
//         total+=num;
//     }
//     console.log(total);

// };
// add(1,2,3,4,5);

// const obj ={
//     name: " Jahin",
//     age:25,
//     address:"Dhaka",
//     occupation:"Dev"
// }

// const {name:myname, ...remaining}=obj;
// console.log(remaining);

function something(one, ...rem){
    console.log(one, rem);
};
console.log(something("first", 1,2,3,4,5,));