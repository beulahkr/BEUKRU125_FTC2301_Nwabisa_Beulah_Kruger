const leoName = 'Leo'
const leoSurname = 'Musvaire'
const leoBalance = '-9394'

const sarahName = 'Sarah'
const sarahSurname = 'Kleinhans'
const sarahBalance = '-4582.21000111'

const divider = '----------------------------------'

// Only change below this line
const sBalance = (parseFloat(sarahBalance)) * -1
const lBalance = (parseFloat(leoBalance)) * -1


const owed = (lBalance + sBalance).toFixed(2)
const thousand = owed / 1000;
const hundred = owed % 1000;

console.log(thousand + "," + hundred)

const leo = leoName + " " + leoSurname + " (Owed: " + "R " + lBalance.toFixed(2)
    + ")"
const sarah = sarahName + " " + sarahSurname + " (Owed: " + "R " + sBalance.toFixed(2)
+ ")"

