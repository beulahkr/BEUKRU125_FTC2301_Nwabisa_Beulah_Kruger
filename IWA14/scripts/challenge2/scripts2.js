
const add = (a, b) =>  a + b

const multiply = (a, b) =>  a * b // did not have const declaration which made these functions buggy

function internal() {
    const added = add(this.internal.a, this.internal.b) //calls add function for values given in the object
    const multiplied = multiply(added, this.internal.c)// same for multiply
	console.log(multiplied)                    //logs the value
}

// Not allowed to change below this

const example1 = {
	internal: {
		a: 2,
		b: 4,
		c: 8,
	},
    add,
    
	multiply,
  calculate: internal
}

const example2 = {
	internal: {
		a: 2,
		b: 2,
		c: 3,
	},
	add,
	multiply,
  calculate: internal
}

example1.calculate()
example2.calculate()