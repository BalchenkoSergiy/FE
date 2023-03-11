// HW 05/04

const userName = ((prompt('Insert your Name please')).toUpperCase()).trim();
let userAge = (prompt('How old are you?')).trim();
userAge = Number(userAge)
console.log(`My name is ${userName}, I am ${userAge}`)

alert(`My name is ${userName}, I am ${userAge}`)