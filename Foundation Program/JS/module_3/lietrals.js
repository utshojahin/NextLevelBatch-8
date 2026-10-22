let price = 500;
let quantity =3;
console.log(`total price ${price * quantity} tk`);

function getDiscount(price){
    return price*0.1;
}
console.log( `you saved ${getDiscount(price)}\ntotal price is ${(price*quantity)-getDiscount(price)}`);