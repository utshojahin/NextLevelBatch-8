"use strict";
// optional , default and rest parameters (..arg)
const contactName = (firstName, lastName) => {
    if (!lastName) {
        return firstName;
    }
    return firstName + " " + lastName;
};
const greeting = (greeting = "Jahin", fullname) => {
    console.log(greeting + " " + fullname);
};
greeting("Mir");
const sum = (...numbers) => {
    return numbers.reduce((total, sum) => total + sum, 0);
};
sum(1, 2, 3, 4, 5);
const logUserAction = (...args) => {
    const [name, age] = args;
    console.log(name + "is" + age);
};
logUserAction("Jahin", 122, false);
