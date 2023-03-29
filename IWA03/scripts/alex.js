// alex.js

const firstnameA = "Alex"
const surnameA = "Naidoo"
const roleA = "Head of Marketing"
export{roleA}

const displayA= firstnameA + " " + surnameA + " (" + roleA + ")"
document.querySelector('[data-key="alex"]').innerText = displayA