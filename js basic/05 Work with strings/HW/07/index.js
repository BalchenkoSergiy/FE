// HW 06/05

const  javaScriptDescription = 'JavaScript — мультипарадигменный язык программирования. Поддерживает объектно-ориентированный, императивный и функциональный стили. Является реализацией спецификации ECMAScript. JavaScript обычно используется как встраиваемый язык для программного доступа к объектам приложений.'
const stringCenter = Math.floor(javaScriptDescription.length / 2)

//4
console.log(`Result string: ${(javaScriptDescription.slice(0, stringCenter))} + ${(javaScriptDescription.slice(0, stringCenter))}  + ${(javaScriptDescription.slice(0, stringCenter))}`)

//5
let tempString = (javaScriptDescription.slice(0, stringCenter)) + (javaScriptDescription.slice(0, stringCenter))  + (javaScriptDescription.slice(0, stringCenter))
const tempStringCenter = Math.floor(tempString.length / 2)
console.log(`tempStringCenter: ${tempString[tempStringCenter]}`)

//1
console.log(`Original string: ${javaScriptDescription}`)
console.log(`Result string: ${javaScriptDescription.slice(0, stringCenter)}`)

//2
console.log(`Result string: ${(javaScriptDescription.slice(0, stringCenter)).replaceALL('a', 'A')}`)

//3
console.log(`Result string: ${(javaScriptDescription.slice(0, stringCenter)).replaceALL(' ', '')}`)