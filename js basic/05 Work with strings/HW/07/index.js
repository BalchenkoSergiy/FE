// HW 06/05

const userText = (prompt('Insert your text please')).trim();
const wordFromText = (prompt('Insert word from userText')).trim();
const indexOfWord = Number (userText.indexOf(wordFromText))

console.log(`Result string: ${userText.slice(0, indexOfWord)}`)
alert(`Result string: ${userText.slice(0, indexOfWord)}`)