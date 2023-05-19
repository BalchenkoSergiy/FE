// Task 01
let health = prompt('Введите число параметра "здоровье" для персонажа')

if ((health <= 0) || (health.type == undefined)) {
        console.log(`Value: ${health}`)
        console.log(`Type: ${health.type}`)
        alert('Параметр "здоровье" должен быть больше нуля!')
    } 
else 
    {
        console.log(`Value: ${health}`)
        console.log(`Type: ${health.type}`)
        alert(`Параметр "здоровье" равен ${health}`);
    }