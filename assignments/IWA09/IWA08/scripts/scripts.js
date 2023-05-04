const leoName = 'Leo Musvaire'
const leoNumber = '2'
const leoStreet = 'Church St.'
const leoPostal = '3105'
const leoBalance = '-10'

const sarahName = 'Sarah '
const sarahSurname = 'Kleinhans'
const sarahBalance = '-4582.21000111'
const sarahNumber = '13'
const sarahStreet = 'William Close'
const sarahPostal = '0310'

// Only change below this line

const leo = {
	fullname : leoName, //name was not a good variable name 
	balance : leoBalance,
    id: '47afb389-8014-4d0b-aff3-e40203d2107f',// id is better stored as a string as the values do not change
    //and it is confusing combination of numbers, letters and characters
	age : 24,
	address : {
		number : leoNumber,
		street : leoStreet,
		postalcode : leoPostal
	}
}

const sarah = {
    fullname : sarahName + sarahSurname,
    age : 62,
    id : '6b279ae5-5657-4240-80e9-23f6b635f7a8',
    balance : sarahBalance,
    address : {
        number : sarahNumber,
        street : sarahStreet,
        postalcode : sarahPostal
    }
}
console.log(leo, leo.address.postalcode) //original code did not use the correct syntax here
console.log(sarah, sarah.address.postalcode)//and was not referencing the objects correctly