const leoName = 'Leo'
const leoSurname = 'Musvaire'
const leoBalance = '-9394'

const sarahName = 'Sarah'
const sarahSurname = 'Kleinhans'
const sarahBalance = '-4582.21000111'

const divider = '----------------------------------'

// Only change below this line
const sBalance = (parseInt(sarahBalance)) * -1
const lBalance = (parseInt(leoBalance)) * -1
const owed = lBalance + sBalance
const leo = leoName + " " + leoSurname + " (Owed: " + "R " + lBalance.toFixed(2)
    + ")"
const sarah = sarahName + " " + sarahSurname + " (Owed: " + "R " + sBalance.toFixed(2)
+ ")"

console.log(leo + "\n" + sarah + "\n\n" + divider + "\n" 
+ "\t" + "Total amount owed: R " + owed + "\n" + divider)
