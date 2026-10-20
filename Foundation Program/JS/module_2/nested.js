let user ={
    name : "Shafayat",
    age: 25,
    address:{
        city:"Rajshahi",
        area:"upashahar",
        zipcode : 6000
    }
}

let entry = Object.entries(user);
console.log(entry[0][0]);

let student = [
    {
        id : 101,
        name : "Jahin"
    },
     {
        id : 102,
        name : "Mahin"
    },
     {
        id : 103,
        name : "Kahin",
        address:{
            area : "ECB",
            thana: "cant"

        }
    }
]
console.log(student[2].address.thana);