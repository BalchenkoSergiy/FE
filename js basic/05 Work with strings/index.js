// Work with STRINGs

const name1 = 'Serhii'
const name2 = "Serhii"
const name3 = `Serhii`

console.log(name1)
console.log(name2)
console.log(name3)

// Concatenation
const name = 'Serhii'
const profession = 'JavaScript - Developer'

const allinfo = name + ' ' + profession
console.log('AllInfo -->',allinfo)

const allinfo2 = `${name} ${profession}`
console.log('AllInfo2 -->',allinfo2)

//Length of string
const programmingLanguage = 'JavaScript'
console.log('Length of programmingLanguage -->', programmingLanguage.length)

// Getting symbol from string
const programmingLanguage2 = 'Python'
console.log('Getting 1 symbol from  programmingLanguage2-->', programmingLanguage2[0])

// toUpperCase, toLowerCase
const animal = 'Lion'
console.log('Upper for animal -->', animal.toUpperCase())
console.log('Lower for animal -->', animal.toLowerCase())

// Search symbols: indexOf, includes
const text = 'My favourite language is JavaScript'
console.log('indexOf for text -->', text.indexOf('Java')) // 25
console.log('indexOf for text -->', text.indexOf('q')) // -1
console.log('indexOf for text -->', text.indexOf('My')) // 0

const text2 = 'My favourite language is Python'
console.log('includes for text2 -->', text2.includes('Py')) //true
console.log('includes for text2 -->', text2.includes('Оф')) //false

// Slice, Substring
const text3 = 'My favourite language is English'
console.log('Slice for text3-->', text3.slice(1, 5)) // y fa
console.log('Slice for text3-->', text3.slice(3, 7)) // favo
console.log('Slice for text3-->', text3.slice(3)) // favourite language is English

const text4 = 'My favourite language is Ukrainian'
console.log('Slice for text3-->', text4.substring(1, 3)) // y
console.log('Slice for text3-->', text4.substring(1, 5)) // y fa
console.log('Slice for text3-->', text4.substring(3, 7)) // favo

// Replace, ReplaceALL
console.log('Replace for text -->', text.replace('Script', '')) // My favourite language is Java
console.log('Replace for text -->', text.replace('Script', '123')) // My favourite language is Java123
console.log('Replace for text -->', text.replace('a', 'A')) // My fAvourite language is JavaScript

// console.log('Replace for text -->', text.replaceALL('a', 'A')) // My fAvourite language is JavaScript

// repeat
console.log('repeat for text -->', text.repeat(2)) // My favourite language is JavaScriptMy favourite language is JavaScript

// trim - delete spaces
const nameOfUser = prompt ('What is your name?')
console.log (nameOfUser)
console.log ('trim for nameOfUser -->', nameOfUser.trim()) //Serhii - (Without spaces around)
