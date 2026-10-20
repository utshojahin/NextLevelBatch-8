function isValidPrice(price){
    return typeof price === "number" && price>0;
}
function isValidEmail(email){
    return email.includes("@")&& email.includes(".");
}
function calculateDiscount(price,discountPercent){
    if(!isValidPrice(price)){
        return 0;
    }
    let discountAmount = (price * discountPercent)/100;
    return price - discountAmount;
}
function calculateFinalBill(price, vatPercentage=15){
    let vat = (price*vatPercentage)/100;
    return price + vat;
}
function formatBDT(amount){
    return `${amount.toFixed(2)} BDT`;
}
function capitalized(str){
    if(!str)return "";
    return str.charAt(0).toUpperCase() + str.slice(1);
}
function processingOrder(user, itemPrice , discountCode){
    console.log(`-------processing order for ${capitalized(user.name)}-------`);
    if(!isValidEmail(user.email)){
        console.log("invalid user email");
        return;
    }
    let currentPrice = itemPrice;
    if(discountCode=="NLB"){
        currentPrice = calculateDiscount(itemPrice, 20);
    }
    let totalBill = calculateFinalBill(currentPrice);
    console.log("Final Amount to pay " , formatBDT(totalBill));
}

let user1 ={
    name: " Jahin",
    email:"juthso2@gmail.com",

};
processingOrder(user1,2000,"NLB");