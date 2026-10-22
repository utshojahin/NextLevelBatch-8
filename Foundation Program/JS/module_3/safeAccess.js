// optional chaining ?
let user1={
    name:"Rahim",
    address:{
        city:"dhaka"
    }
};

let user2={
    name:"Karim",

}
console.log(user1.address.city);
console.log(user2?.address?.city);

// nulish collescing ??

console.log(user2?.address?.address??"Rajshahi");
