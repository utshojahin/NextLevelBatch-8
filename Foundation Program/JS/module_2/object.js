let user={
    name : "Jahin",
    age :25,
    address: "Dhaka"}
delete user.address;
user.address = "Madaripur";
user.address = {
    city: "Madaripur",
    area : "Sadar"
}
console.log(Object.keys(user));
console.log(Object.values(user));
console.log(Object.entries(user));