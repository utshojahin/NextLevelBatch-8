const weight = Number(process.argv[2]);
const height = Number(process.argv[3]);

function calculateBMI(weight, height) {
   const bmi = weight / (height * height);

   if (bmi < 18.5) {
      return `BMI: ${bmi.toFixed(2)} - Underweight`;
   } else if (bmi < 25) {
      return `BMI: ${bmi.toFixed(2)} - Normal`;
   } else if (bmi < 30) {
      return `BMI: ${bmi.toFixed(2)} - Overweight`;
   } else {
      return `BMI: ${bmi.toFixed(2)} - Obese`;
   }
}

console.log(calculateBMI(weight, height));