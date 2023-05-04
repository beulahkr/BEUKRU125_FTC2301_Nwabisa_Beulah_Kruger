//customer info, could have user input here 
let country = 'USA'
let customers = 1

//items and their prices
let shoes = 300
let toys = 100
let shirts = 150
let batteries = 35
let pens = 5


let shipping = 0
let total = 0
let currency = 'R'

const BANNED_WARNING = 'Unfortunately we do not ship to your country of residence'
const FREE_WARNING = 'Free shipping only applies to single customer orders'

//converts rands to dollars
function randToDollar(price) {
    return  price * 0.056;
}

//issues warning if customer does not quaalify for free shipping
if (customers != 1) {
    console.log(FREE_WARNING)
}

//calculate total before shipping (need to check if order is over R1000 to qualify)
total = shoes + (toys * 5) + (batteries * 2) 

if (country === 'RSA') {
    if (customers == 1 && total >= 1000)
    {
        shipping = 0; 
    }
    else {
        shipping = 400;  
    }
   
}
else if (country === 'NAM') {
    currency = '$'
    if (customers == 1 && total >= 1000)
    {
        shipping = 0; 
    }
    else {
        shipping = 600;   
    }
   
}
else if (country === 'NK') {
    console.log(BANNED_WARNING)
}
else {
     
    currency = '$'                          //using US Dollars for all international 
                                            //shipping outside RSA and NAM
    if (customers == 1 && total >= 1000)
    {
        shipping = 0; 
    }
    else {
        shipping = randToDollar(800); //converts shipping value to dollars as 
                                      // it is added outside this function   
    }
    total = randToDollar(total);

}


// Output as a string the total with the correct currency to two decimal places
console.log("Total: " + currency + (total + shipping).toFixed(2));