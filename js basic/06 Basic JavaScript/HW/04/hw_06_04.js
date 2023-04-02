// task 04

// Use While
let i = 0;
while (i < 3) {
    let newStudent = prompt('Insert name for while!');
    newStudent = newStudent.trim();
    if (newStudent) 
        {
            alert(`while -->> Hello, ${newStudent}!`)
        }
    i += 1
    }

// Use While do
let var_i = 0;
    do {
        let newStudent = prompt('Insert name for while do!');
    newStudent = newStudent.trim();
    if (newStudent) 
        {
            alert(`while do -->> Hello, ${newStudent}!`)
        }
    var_i += 1
    } while (var_i < 3)