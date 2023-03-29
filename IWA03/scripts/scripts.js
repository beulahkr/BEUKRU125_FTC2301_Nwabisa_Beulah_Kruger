// scripts.js

// import company form 'configuration'
// import year form 'configuration'

// const message = '© ' + company + ' (' + year + ')'
// document.querySelector('footer').innerText = message

import { company } from "./configuration.js";
import { year } from "./configuration.js";

const message = ('© ' + company + year);
document.querySelector("footer").innerText = message;

// The original code did not work for the following reasons:
// 1. the import function for both variables was incorrectly formatted,
//    the desired variable (company or year) should be inside curly braces and the word "from"
//    was spelled incorrectly
// 2. the declaration of the message variable was also incorrect as all the
// included text should be in brackets 
// 3. the query selector was mostly correct but the ('footer') should have double quotations