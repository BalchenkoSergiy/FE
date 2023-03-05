//  Task 04

// 1 - Error - NaN
console.log('1 ->>>', Number(' 1 2 3 4 5'));
// 2 - Error - NaN
console.log('2 ->>>', Number('1234 5'));
// 3 - 12345 - +++
console.log('3 ->>>', Number('12345'));
// 4 - '' - false
console.log('4 ->>>', String(false));
// 5 - false - +++
console.log('5 ->>>', Boolean(0000000));
// 6 - true - +++
console.log('6 ->>>', Boolean(0.0000001));
// 7 - none - undefined
console.log('7 ->>>', String(undefined));
// 8 - 10000 - NaN
console.log('8 ->>>', Number('100f'));
// 9 - 100 - +++
console.log('9 ->>>', Number('100'));
// 10 - 000001 - 1
console.log('10 ->>>', Number('000001'));