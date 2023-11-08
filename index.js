
// 1 meter = 3.281 feet
// 1 liter = 0.264 gallon
// 1 kilogram = 2.204 pound

const userInput = document.querySelector("#input-field")
const inputBtn = document.querySelector("#input-btn")
const feetConv = document.querySelector("#feet")
const gallonConv = document.querySelector("#gallon")
const poundConv = document.querySelector("#pound")

inputBtn.addEventListener("click", function(){
     feetConv.innerHTML = `<h2>${userInput.value} meters = ${(userInput.value * 3.281).toFixed(3)} feet | ${userInput.value} feet = ${(userInput.value / 3.281).toFixed(3)} meters </h2>`
     gallonConv.innerHTML = `<h2>${userInput.value} liters = ${(userInput.value * 0.264).toFixed(3)} gallons | ${userInput.value} gallons = ${(userInput.value / 0.264).toFixed(3)} liters.</h2>`
     poundConv.innerHTML = `<h2>${userInput.value} kilograms = ${(userInput.value * 2.204).toFixed(3)} pounds | ${userInput.value} pounds = ${(userInput.value / 2.204).toFixed(3)} kilograms.</h2>`
})



inputBtn.addEventListener("click", render)









// const conversions = [
//      document.querySelector("#feet"),
//      document.querySelector("#gallon"),
//      document.querySelector("#pound")
// ]

// function render(){
//      let convDOM = ""
//      for (let i = 0; i < conversions.length; i++){
//           convDOM += 
//           `<h2> ${userInput.value} meters = ${(userInput.value*3.281).toFixed(3)} feet </h2>`
//           // `<h2> ${userInput.value} liters = ${(userInput.value*0.264).toFixed(3)} gallons </h2>`
//           // `<h2> ${userInput.value} kilograms = ${(userInput.value*2.204).toFixed(3)} pounds </h2>`
//      }
//      conversions.textContent = convDOM  
// }