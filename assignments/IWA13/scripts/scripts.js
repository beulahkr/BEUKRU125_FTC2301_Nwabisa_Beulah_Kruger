let state = 'idle'
let user = null
let calculated = '1'

// Only allowed to change below


logCalc= () => { 
   let  isString = typeof calculated == 'string' 
   let  calculatedAsNumber = isString ?  parseInt(calculated) : calculated
   calculated++
}

 calcUser= () => {
  logCalc()
  if (calculated > 2) user = 'John'
  if (calculated > 2) state = 'requesting'
  if (calculated > 3) state = 'idle'
}

checkUser = () => {
	
		console.log(`User: ${user} (${calculated})`)
	
}

// Only allowed to change code above

checkUser()
calcUser()

checkUser()
calcUser()

checkUser()
calcUser()

checkUser()
calcUser()

checkUser()
calcUser()
