let marks = [10,20,30 ,40 ,50,99, 55,3 ,44, 53 ];

// let max = marks[0];

// for (let i =0; i<marks.length ; i++){
//     if(max <marks[i]){
//         max=marks[i];
//     }
// }
// console.log(max)


// let sum =0 ;
// for (mark of marks){
//     sum += mark;
// }
// console.log(sum/marks.length);

let reMarks = [];
for (let i = marks.length-1; i>=0; i--){
    reMarks.push(marks[i]);
}
console.log(reMarks)