// FOR
    /* 
        for (початкове значення; умова; крок) {

         }
    */

for (let i = 0; i <= 10; i += 1) {
    console.log('(1) i = ', i)
}

for (let i = 10; i >= 0; i -= 1) {
    console.log('(2) i = ', i)
}

// WHILE
    /*
        while (умова) {
            код
        }
    */
let i = 0
while (i < 10) {
    console.log('(3) i = ', i)
    i += 1
}

// DO WHILE
    /*
        do {
            код
        } while (умова)
    */
let dec = 0
do {
    console.log('(4) dec = ', dec)
    dec += 1
} while (dec <= 5)