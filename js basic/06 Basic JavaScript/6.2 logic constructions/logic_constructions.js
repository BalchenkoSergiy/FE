// if
const isFronEndDeveloper = true;

if (isFronEndDeveloper) {
    console.log('Congratulation! You are FrontEnd Developer!')
} else {
    console.log('You are not FrontEnd Developer')
}

// if else
const closingTime = 8;
const currentTime = 9;

if (currentTime > closingTime) {
    console.log('Store is closed')
} else {
    console.log('Store is open, WELCOME!')
}

const developerJobType = 'Front-End';

if (developerJobType === 'Front-End') {
    console.log ('2000$')
} else if (developerJobType ==='Back-End') {
    console.log ('1500$')
} else if (developerJobType ==='Full-Stack') {
    console.log ('3500$')
}  else {
    console.log('Not Accepted')
}


// switch case

switch (developerJobType) {
    case 'Front-End': 
        console.log ('2000$');
        break;
    case 'Back-End': 
        console.log ('1500$');
        break;
    case 'Full-Stack': 
        console.log ('3500$');
        break;
    default:
        console.log('Not Accepted')
}

// ? : (По факту це заміна if else)
const favoriteDrink = 'Coffee'
const message = favoriteDrink === 'Coffee' 
    ? 'Your favorite drink is Coffee' 
    : 'You don`t like coffee'

console.log('message -->>', message)