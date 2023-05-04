// johannes.js

const firstname = "Johannes"
const surname = "Potgieter"
const role = "Intern"
export{role}

const display= firstname + " " + surname + " (" + role + ")"
document.querySelector('[data-key="johannes"]').innerText = display