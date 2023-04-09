// task 08

const clientName = prompt('Insert Your name please')
let clientPassword = ''
let checkLength = false
let checkSymbol = false
let varCoursor = 0
let varEndPoint = clientPassword.length - 1

while (checkLength == false)
    {
        clientPassword = prompt('Insert Your password please')
        if (clientPassword.length >= 3 && clientPassword.length <= 20) 
            {
                console.log(`Details (Length check):
                1. clientName: ${clientName}
                2. clientPassword: ${clientPassword}
                3. clientPasswordLenght: ${clientPassword.length}`)
                alert(`Congratulation ${clientName}, your password length is ${clientPassword.length}!`) 
                checkLength = true        
            }
        else
            {
                console.log(`Details (Length check):
                1. clientName: ${clientName}
                2. clientPassword: ${clientPassword}
                3. clientPasswordLenght: ${clientPassword.length}`)
                alert(`Error! your password length need to have lenth between 3 and 20 symbols!`) 
            }
    }
console.log(`Finished check password length`)
console.log(`************************************************`)
console.log(`************************************************`)
console.log(`Start check CamelCase letters`)

while (checkSymbol == false && Number(varCoursor) != Number(varEndPoint)) 
    {
        console.log(`************************************************`)
        console.log(`Started check CamelCase letters`)
        if (clientPassword[varCoursor] === clientPassword[varCoursor].toUpperCase())
            {
                console.log(`Symbol is: ${clientPassword[varCoursor]}`)
                console.log(`Symbol is UpperCase = true`)
                checkSymbol = true
            }
        else
            {
                console.log(`Symbol is: ${clientPassword[varCoursor]}`)
                console.log(`Symbol is UpperCase = false`)
                console.log(`****************************************`)
                if ((clientPassword.length - 1) != varCoursor)
                    {
                        varCoursor += 1
                    }
                else if ((clientPassword.length - 1) == varCoursor)
                    {
                        console.log(`No UpperCase in your Password`)
                        clientPassword = prompt('Insert Your password again please')
                        varCoursor = 0
                    }
                else
                    {
                        checkSymbol = true
                    }
            } 
    }