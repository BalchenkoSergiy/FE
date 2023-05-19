// Task 01
let health = prompt('Insert your value for "health" please')

if ((health <= 0) || (health.type == undefined)) {
        console.log(`Value: ${health}`)
        console.log(`Type: ${health.type}`)
        alert('Value needs to be more then 0!')
    } 
else 
    {
        console.log(`Value: ${health}`)
        console.log(`Type: ${health.type}`)
        alert(`The value of "health" is: ${health}`);
    }