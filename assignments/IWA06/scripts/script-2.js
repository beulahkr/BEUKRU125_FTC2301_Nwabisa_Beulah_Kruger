const rent = 400;
const tax = '8%';
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
    
     taxAsDecimal = parseInt(tax) / 100;
     startingAfterTax = salary - (salary * taxAsDecimal);
     console.log(startingAfterTax)
     balance = startingAfterTax - transport - food - rent;
}

	
console.log('R', balance.toFixed(2));  //does not return same value as specified on LMS (R274.46)
                                        // instead returns R242.05
// const rent = 400;
// const tax = '12%';
// const food = 51.7501;
// const salary = 800;
// const transport = 10.2;
// const hourOfDay = 00;
// const minuteOfDay = 00;


// if hourOfDay && (minuteOfDay !== null) && (hourOfDay == '00') && (minuteOfDay == '00') {
// 	const taxAsDecimal = tax / '100'
//   const startingAfterTax = salary * '1' - taxAsDecimal
// 	const balace = starting - transport - food - rent
// }
	
// console.log(balance.toFixed(3))