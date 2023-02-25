// Task 03

let ageOfPerson1 = 18;
let ageOfPerson2 = '20';
ageOfPerson2 = 18
console.log('ageOfPerson2', ageOfPerson2, typeof(ageOfPerson2));

let nameOfAnimal1 = null;
let nameOfAnimal2 = 'Charlie';
nameOfAnimal2 = 'Charlie';
console.log('nameOfAnimal2', nameOfAnimal2, typeof(nameOfAnimal2));

const bestProgramingLanguage1 = 'JavaScript'
const bestProgramingLanguage2 = 'Java'
console.log('We can`t reidentify const type of variable');
console.log('bestProgramingLanguage1 = ', bestProgramingLanguage1, typeof(bestProgramingLanguage1));
console.log('bestProgramingLanguage2 = ', bestProgramingLanguage2, typeof(bestProgramingLanguage2));


let initialValue1;
let initialValue2 = 0;
initialValue2 = initialValue1;
console.log('initialValue2', initialValue2, typeof(initialValue2));

var isJavaScriptProgrammwe1 = true;
let isJavaScriptProgrammwe2 = false;
console.log('var - is not recomended type of variable, it`s to old');
isJavaScriptProgrammwe2 = isJavaScriptProgrammwe1
console.log('isJavaScriptProgrammwe2', isJavaScriptProgrammwe2, typeof(isJavaScriptProgrammwe2));


let helloText1 = 'Hello!';
let helloText2 = 'Hello again!';
helloText2 = 'Hello!';
console.log('helloText2', helloText2, typeof(helloText2));
