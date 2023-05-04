// script.js


const root1 = document.querySelector('[data-key="order1" ]')
const biscuits1 = document.querySelector('[data-key="order1"] .biscuits .count')
const donuts1= document.querySelector('[data-key="order1" ] .donuts .count')
const pancakes1= document.querySelector('[data-key="order1" ] .pancakes .count')
const status1= document.querySelector('[data-key="order1" ] .status ')

const root2 = document.querySelector('[data-key="order2" ]')
const biscuits2 = document.querySelector('[data-key="order2"] .biscuits .count')
const donuts2= document.querySelector('[data-key="order2" ] .donuts .count')
const pancakes2= document.querySelector('[data-key="order2" ] .pancakes .count')
const status2= document.querySelector('[data-key="order2" ] .status ')

const root3 = document.querySelector('[data-key="order3" ]')
const biscuits3 = document.querySelector('[data-key="order3"] .biscuits .count')
const donuts3= document.querySelector('[data-key="order3" ] .donuts .count')
const pancakes3= document.querySelector('[data-key="order3" ] .pancakes .count')
const status3 = document.querySelector('[data-key="order3" ] .status ')

biscuits1.textContent = root1.dataset.biscuits
biscuits2.textContent = root2.dataset.biscuits
biscuits3.textContent = root3.dataset.biscuits

donuts1.textContent = root1.dataset.donuts
donuts2.textContent = root2.dataset.donuts
donuts3.textContent = root3.dataset.donuts

pancakes1.textContent = root1.dataset.pancakes
pancakes2.textContent = root2.dataset.pancakes
pancakes3.textContent = root3.dataset.pancakes

status1.textContent = root1.dataset.delivered == "true" ? "Delivered" : "Pending Delivery"
status2.textContent = root2.dataset.delivered == "true" ? "Delivered" : "Pending Delivery"
status3.textContent = root3.dataset.delivered == "true" ? "Delivered" : "Pending Delivery"

// 1-biscuits= 1-root.biscuits,
// 1-donuts = 1-root.donuts,
// 1-pancakes = 1-root.pancakes,
// 1-status = 1-root.status ? Delivered : Pending

// 2-biscuits= 2-root.biscuits,
// 2-donuts = 2-root.donuts,
// 2-pancakes = 2-root.pancakes,
// 2-status = 2-root.status ? Delivered : Pending

// 3-biscuits= 3-root.biscuits,
// 3-donuts = 3-root.donuts,
// 3-pancakes = 3-root.pancakes,
// 3-status = 3-root.status ? Delivered : Pending