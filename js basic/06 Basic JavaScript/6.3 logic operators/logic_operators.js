// && (AND)
const userAge = 16
if (userAge > 5 && userAge <= 18) {
    console.log('User going to School')
}


const programingLanguage = 'JavaScript'
const experienceInYear = 2

if (programingLanguage  === 'JavaScript' && experienceInYear > 1) {
    console.log('Welcome to our Company')
}


// || (OR)
const currentHours = 10

if (currentHours  < 8 ||  currentHours  > 20) {
    console.log('We are closed, welcome back tomorrow!')
} else {
    console.log ('Welcome to our office')
}


const userNickname = null
const defaultNickname = 'User'
const nickname = userNickname || defaultNickname || 'noname'
console.log('nickname', nickname)

const finalNickname = userNickname && 'User real'
console.log('finalNickname', finalNickname) 

// ! (NOT)
const hasAccess = true
if (!hasAccess) {
    console.log('Access was dannied')
} else {
    console.log ('Access opened')
}


const answer = prompt('How old are you?')
if (!answer) {
    alert ('How old are you?')
} else {
    alert(`You are ${answer}`)
}38


// ?? (Оператор об'єднання з null) - Дуже схоже на OR
/*
    Для оператора || хибними значеннями являються: false, 0, '', NaN, undefined, null
    Для оператора ?? хибними значеннями являються: undefined, null
*/
console.log (false || 'Hello world')
console.log (false ?? 'Hello world')
