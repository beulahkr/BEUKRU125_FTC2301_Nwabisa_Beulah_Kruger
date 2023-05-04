// configuration.js

const company = 'ACME Inc.'
const year = 2022

export { company }
export { year }

//this code was mostly correct but was lacking export which means that the scripts.js
//  document could not access those variables.