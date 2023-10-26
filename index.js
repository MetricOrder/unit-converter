
// 1 meter = 3.281 feet
// 1 liter = 0.264 gallon
// 1 kilogram = 2.204 pound

const userInput = document.querySelector("#input-field")
const inputBtn = document.querySelector("#input-btn")
let result = document.querySelector("#result")

inputBtn.addEventListener("click", function(){
     result.textContent = userInput.value
})


