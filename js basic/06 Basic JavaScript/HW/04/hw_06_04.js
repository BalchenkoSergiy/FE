// task 04

//for (let i = 0; i < 3; i += 1) 
//    {
//        let newStudent = prompt('Введите имя нового студента!');
//        newStudent = newStudent.trim();
//        if (newStudent) 
//            {
//                alert(`Добро пожаловать, ${newStudent}!`)
//            }
//    }


let i = 0;
while (i < 3) {
    let newStudent = prompt('Введите имя нового студента!');
    newStudent = newStudent.trim();
    if (newStudent) 
        {
            alert(`while -->> Hello, ${newStudent}!`)
        }
    i += 1
    }







//let questionOne = confirm('JavaScript appeared in 1995?')
//
//if (questionOne == true) {
//    console.log('Correct!')
//    } else {
//        console.log('Incorrect!')
//        }
//
//let questionTwo = confirm('Is the JavaScript specification called ECMAScript?')
//
//if (questionTwo == true) {
//    console.log('Correct!')
//    } else {
//        console.log('Incorrect!')
//        }
//
//let questionThree = confirm('JavaScript was created in 1 month?')
//
//if (questionThree == true) {
//    console.log('Correct!')
//    } else {
//        console.log('Incorrect!')
//        }
//
//















//let correctAnswers = 0
//let incorrectAnswers = 0
//
//let first_question = prompt('How much is 2+2?')
//
//if (Number(first_question)  === 4) {
//    console.log('Correct!')
//    correctAnswers += 1
//} else {
//    console.log('Incorrect!')
//    incorrectAnswers += 1
//}
//
//let second_question = prompt('How much is 2*2?')
//
//if (Number(second_question)  === 4) {
//    console.log('Correct!')
//    correctAnswers += 1
//} else {
//    console.log('Incorrect!')
//    incorrectAnswers += 1
//}
//
//let third_question = prompt('How much is 5-3-1?')
//
//if (Number(third_question)  === 1) {
//    console.log('Correct!')
//    correctAnswers += 1
//} else {
//    console.log('Incorrect!')
//    incorrectAnswers += 1
//}
//
//let forth_question = prompt('How much is 10-2-1+5?')
//
//if (Number(forth_question)  === 12) {
//    console.log('Correct!')
//    correctAnswers += 1
//} else {
//    console.log('Incorrect!')
//    incorrectAnswers += 1
//}
//
//let fifth_question = prompt('How much is 2+2*2?')
//
//if (Number(fifth_question)  === 6) {
//    console.log('Correct!')
//    correctAnswers += 1
//} else {
//    console.log('Incorrect!')
//    incorrectAnswers += 1
//}
//
//alert(`Test is finished! Correct answers -> ${correctAnswers}, Incorrect answers -> ${incorrectAnswers}`)