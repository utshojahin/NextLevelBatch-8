let cart =["fruits","rice"];

let cart2=[...cart,"egg" , "milk"];
console.log(cart2);

const personalnfo={
    name: "Samad",
    age:22
};
const contactInfo={
    email:"Jahin@gmail.com",
    phone: "01989998989"
};

const fullInfo={
    ...personalnfo,
    ...contactInfo,
    zip:6000
}
console.log(fullInfo);