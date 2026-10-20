let student = {
    name: "Rahim",
    id: 102,
    marks:{
        bangla:75,
        english:82,
        math:90
    }
}
let totalMarks = 0;
let totalSubject=0;

for(const subject in student.marks){
    totalMarks+= student.marks[subject];
    totalSubject++;
}
console.log(totalMarks);
console.log(totalSubject);
let avg = totalMarks/totalSubject;
console.log(avg.toFixed(2))