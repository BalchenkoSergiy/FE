//  Task 01
// 1. string
let variable1 = 'Coffee';
console.log('Original value is -->', variable1, '<-- Original Data type -->', typeof(variable1), '<--');

console.log('New type of variable1 is --> ', typeof String(variable1), '<-- New value is -->', String(variable1), '<--');
console.log('New type of variable1 is --> ', typeof Number (variable1), '<-- New value is -->', Number (variable1), '<--');
console.log('New type of variable1 is --> ', typeof Boolean(variable1), '<-- New value is -->', Boolean(variable1), '<--');

// 2. number
let variable2 = 5;
console.log('Original value is -->', variable2, '<-- Original Data type -->', typeof(variable2), '<--');

console.log('New type of variable2 is --> ', typeof String(variable2), '<-- New value is -->', String(variable2), '<--');
console.log('New type of variable2 is --> ', typeof Number(variable2), '<-- New value is -->', Number(variable2), '<--');
console.log('New type of variable2 is --> ', typeof Boolean(variable2), '<-- New value is -->', Boolean(variable2), '<--');

// 3. boolean
let variable3 = false;
console.log('Original value is -->', variable3, '<-- Original Data type -->', typeof(variable3), '<--');

console.log('New type of variable3 is --> ', typeof String(variable3), '<-- New value is -->', String(variable3), '<--');
console.log('New type of variable3 is --> ', typeof Number(variable3), '<-- New value is -->', Number(variable3), '<--');
console.log('New type of variable3 is --> ', typeof Boolean(variable3), '<-- New value is -->', Boolean(variable3), '<--');

// 4. null - empty value, Uncknown
let variable4 = null;
console.log('Original value is -->', variable4, '<-- Original Data type -->', typeof(variable4), '<--');

console.log('New type of variable4 is --> ', typeof String(variable4), '<-- New value is -->', String(variable4), '<--');
console.log('New type of variable4 is --> ', typeof Number(variable4), '<-- New value is -->', Number(variable4), '<--');
console.log('New type of variable4 is --> ', typeof Boolean(variable4), '<-- New value is -->', Boolean(variable4), '<--');

// 5. undefined - Value vas not initialized
let variable5;
console.log('Original value is -->', variable5, '<-- Original Data type -->', typeof(variable5), '<--');

console.log('New type of variable5 is --> ', typeof String(variable5), '<-- New value is -->', String(variable5), '<--');
console.log('New type of variable5 is --> ', typeof Number(variable5), '<-- New value is -->', Number(variable5), '<--');
console.log('New type of variable5 is --> ', typeof Boolean(variable5), '<-- New value is -->', Boolean(variable5), '<--');

// 6. object
let variable6 = {
    favoriteDrink: 'Coffee',
    numberOfCups: 5,
    isColdDrink: true
};
console.log('Original value is -->', variable6, '<-- Original Data type -->', typeof(variable6), '<--');

console.log('New type of variable6 is --> ', typeof String(variable6), '<-- New value is -->', String(variable6), '<--');
console.log('New type of variable6 is --> ', typeof Number(variable6), '<-- New value is -->', Number(variable6), '<--');
console.log('New type of variable6 is --> ', typeof Boolean(variable6), '<-- New value is -->', Boolean(variable6), '<--');

// 7. bigint
let variable7 = BigInt (100);
console.log('Original value is -->', variable7, '<-- Original Data type -->', typeof(variable7), '<--');

console.log('New type of variable7 is --> ', typeof String(variable7), '<-- New value is -->', String(variable7), '<--');
console.log('New type of variable7 is --> ', typeof Number(variable7), '<-- New value is -->', Number(variable7), '<--');
console.log('New type of variable7 is --> ', typeof Boolean(variable7), '<-- New value is -->', Boolean(variable7), '<--');
    
// 8. symbol
let variable8 = Symbol ('id');
console.log('Original value is -->', variable8, '<-- Original Data type -->', typeof(variable8), '<--');

console.log('New type of variable8 is --> ', typeof String(variable8), '<-- New value is -->', String(variable8), '<--');
console.log('New type of variable8 is --> ', typeof Number(variable8), '<-- New value is -->', Number(variable8), '<--');
console.log('New type of variable8 is --> ', typeof Boolean(variable8), '<-- New value is -->', Boolean(variable8), '<--');