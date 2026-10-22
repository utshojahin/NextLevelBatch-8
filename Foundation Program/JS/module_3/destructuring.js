const student ={
    name : "Jahin",
    age : 25,
    address: "Dhaka"
}

const oldName = student.name;
const {age, name , address} = student;

console.log(name);

const student2={
    name : "Mahin",
    age : 25,
    address: {
        city : "Dhaka",
        zip:1206
    }
}
const {name:stdName ,address:{zip,city}}=student2;

console.log(stdName);

const arr=["Apple", "Mango","Banana"];
const [first, second , third]= arr;
const [, second2 , ]= arr;
console.log(third);
console.log(second2);

const student3={
    name : "Mahin",
    age : 25,
    address: {
        city : "Dhaka",
        zip:1206
    },
    hobbies:["Garderning", "Painting"]
}
const {name:stdName2, address:{city:ci},hobbies:[fisrthobbiy]}=student3;

console.log(fisrthobbiy);
console.log(ci);