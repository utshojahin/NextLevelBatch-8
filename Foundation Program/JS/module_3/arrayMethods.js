let fruits = ["Apple","Banana","Mango","Jackfruit"];

// let NewFruits = fruits.forEach((f,idx) => {
//     console.log(`${idx+1} -> ${f}`);
// });

// let NewFruits2 = fruits.map((f,inx)=>{
//     return `${f} -> ${inx}`;
// })

// console.log(NewFruits2);

// let newFruits3=fruits.map((f,idx)=>{
//     return f.length<5?"yes":"No";
// })
// console.log(newFruits3);
// const newF1= fruits.filter((f)=>f.length>5);
// const newF= fruits.find((f)=>f.length>5);
// console.log(newF);
// console.log(newF1);

// let findFr=fruits.includes("Mango");
// console.log(findFr);

// let student=[
//     {name:"Jahin",marks:85},
//     {name:"Mahin",marks:86},
//     {name:"Sahin",marks:55},

// ]

// let studentsCheck=student.some((s)=>s.marks>80);
// let studentEvery= student.every((s)=> s.marks>40);
// console.log(studentEvery);
// console.log(studentsCheck);


let products=[
    {title:"Mouse",price:500,inStock:true},
    {title:"Keyboard",price:600,inStock:true},
    {title:"Monitor",price:8000,inStock:true},
    {title:"Headphone",price:500,inStock:false},
];

// let totalPrice = products.reduce((acc, current)=>{
//     return (acc+=current.price);

// },0);
// console.log(totalPrice);

// let sorted =[10,30,40,55, 65, 67].sort((a,b)=>a-b);
// let sorted2 =[10,30,40,55, 65, 67].sort((a,b)=>b-a);
// console.log( sorted , sorted2);

// let Sorted = products.sort((a,b)=> b.price-a.price);
// console.log(Sorted);

let estPrice = products.filter((p)=>p.inStock==true).reduce((acc, current)=>{
    return (acc+current.price);
},0);

console.log(estPrice);