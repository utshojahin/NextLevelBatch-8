// let age = 18;

// if(age>=18){
//     console.log("voter");
// }else{
//     console.log("not a voter");
// }


let marks = 38;

if (marks >= 80){
    console.log("A+");
}else if(marks >= 70){
    console.log("A");
}else if(marks >= 60){
    console.log("A-");
}else if(marks >= 50){
    console.log("pass");
}else{
    console.log("fail");
}

switch(marks){
    case marks >=80:
    console.log("A+");
    break;

    case marks >=70:
    console.log("A");
    break;

    case marks >=60:
    console.log("A-");
    break; 

    case marks >=50:
    console.log("Pass");
    break;

    default :
    console.log("fail");
    break;
}

// ternery  condition ? true : false;

let age = 44;

age >= 18 ? console.log("voter") : console.log("not a voter");