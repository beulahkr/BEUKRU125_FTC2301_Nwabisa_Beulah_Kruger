const rent = 400;
const tax = 12;
const food = 51.7501;
const salary = 800;
const transport = 10.2;
const hourOfDay = 00;
const minuteOfDay = 00;

// Only change below this line
let taxAsDecimal;
let startingAfterTax;
let balance;
if ((hourOfDay === 0) && (minuteOfDay === 0)&&(hourOfDay != null)&&(minuteOfDay != null)) {
    
     taxAsDecimal = tax / 100;
    startingAfterTax = salary - (salary * taxAsDecimal);
    console.log(startingAfterTax)
     balance = startingAfterTax - transport - food - rent;
}

	
console.log('R', balance.toFixed(2));