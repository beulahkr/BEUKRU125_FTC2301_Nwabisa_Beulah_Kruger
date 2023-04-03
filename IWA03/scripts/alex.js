// alex.js

const firstname = "Alex"
const surname = "Naidoo"
const role = "Head of Marketing"
export{role}

const display= firstname + " " + surname + " (" + role + ")"
document.querySelector('[data-key="alex"]').innerText = display