//customer info, could have user input here 
let country = 'RSA'
let customers = 1

//items and their prices
let shoes = 300
let toys = 100
let shirts = 150
let batteries = 35
let pens = 5


let shipping = 0
let total = 0


const BANNED_WARNING = 'Unfortunately we do not ship to your country of residence'
const FREE_WARNING = 'Free shipping only applies to single customer orders'

if (customers === 0) {
    console.log(FREE_WARNING)
}

if (country === 'RSA') {
    shipping = 400
}
else if (country === 'NAM') {
    shipping = 600
}
else if (country === 'NK') {
    console.log(BANNED_WARNING)
}
else {
    shipping = 800
}

total = shoes + (toys * 5) + (batteries * 2) + shipping

console.log("Total: ", total);