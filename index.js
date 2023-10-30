
// 1 meter = 3.281 feet
// 1 liter = 0.264 gallon
// 1 kilogram = 2.204 pound

const userInput = document.querySelector("#input-field")
const inputBtn = document.querySelector("#input-btn")
const feetConv = document.querySelector("#feet")
const gallonConv = document.querySelector("#gallon")
const poundConv = document.querySelector("#pound")


inputBtn.addEventListener("click", function(){
     feetConv.textContent = `${userInput.value} metric meters = ${userInput.value * 3.281.toFixed(3)} imperial feet.`
     gallonConv.textContent = `${userInput.value} metric liters = ${userInput.value * 0.264.toFixed(3)} imperial gallons.`
     poundConv.textContent = `${userInput.value} metric kilograms = ${userInput.value * 2.204.toFixed(3)} imperial pounds.`
})