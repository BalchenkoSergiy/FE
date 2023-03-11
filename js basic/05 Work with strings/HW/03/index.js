// HW 05/02

const myName = 'Serhii'
const  programmingLanguage = 'JavaScript'
const  courseCreatorName = 'unknown'
const  reasonText = 'It`s my dream'
const  numberOfMonth = 1

let myInfoText = `Всем привет! Меня зовут, ${myName}. Сейчас я изучаю язык программирования
${programmingLanguage.toUpperCase()} на курсе по ${programmingLanguage.toUpperCase()} у ${courseCreatorName}.
Я хочу стать веб-разработчиком, потому что ${reasonText}. До этого я изучал(а)
${programmingLanguage.toUpperCase()} ${numberOfMonth} месяцев. Я уверен(а), что пройду данный курс до
конца!`

console.log(myInfoText)
console.log('Length -->>',myInfoText.length)
console.log('First symbol -->>',myInfoText[0])

console.log('Last symbol -->>',myInfoText[myInfoText.length - 1])