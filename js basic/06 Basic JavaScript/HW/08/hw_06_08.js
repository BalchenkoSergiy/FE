// task 08

const clientName = prompt('Insert Your name please')
let clientPassword = prompt('Insert Your password please')
let checkLength = false
let checkSymbol = false
let checkNumber = false
let varCoursor = 0
let varEndPoint = clientPassword.length - 1

console.log(`Starting registration`)
console.log(`************************************************`)
console.log(`************************************************`)
console.log(`Start check Length`)

if (clientPassword !== '')
    {
        console.log(`************************************************`)
        console.log(`Started check Length`)
        if (checkLength == false)
            {
                if (clientPassword.length >= 3 && clientPassword.length <= 20) 
                    {
                        console.log(`Details (Length check):
                        1. clientName: ${clientName}
                        2. clientPassword: ${clientPassword}
                        3. clientPasswordLenght: ${clientPassword.length}`)
                        checkLength = true        
                    }
                else if (clientPassword.length < 3 && clientPassword.length > 20)
                    {
                        console.log(`Details (Length check):
                        1. clientName: ${clientName}
                        2. clientPassword: ${clientPassword}
                        3. clientPasswordLenght: ${clientPassword.length}`)
                    }
            }
    }
        
console.log(`Finished check Length`)
console.log(`checkLength = ${checkLength}`)
console.log(`************************************************`)
console.log(`************************************************`)
console.log(`Start check Numbers letters`)

//while (Number(varCoursor) != Number(varEndPoint)) 
while (varCoursor < (clientPassword.length)) 
    {
        console.log(`************************************************`)
        console.log(`Started check Number and CamelCase letters`)

        if (
        clientPassword[varCoursor] == 0 || 
        clientPassword[varCoursor] == 1 || 
        clientPassword[varCoursor] == 2 ||
        clientPassword[varCoursor] == 3 || 
        clientPassword[varCoursor] == 4 || 
        clientPassword[varCoursor] == 5 ||
        clientPassword[varCoursor] == 6 ||
        clientPassword[varCoursor] == 7 || 
        clientPassword[varCoursor] == 8 || 
        clientPassword[varCoursor] == 9
        )
        {
            checkNumber = true
        }
        else
        {if (
                clientPassword[varCoursor] === clientPassword[varCoursor].toUpperCase()
            )
            {
                checkSymbol = true
            }
        }

        console.log(`Details (Number check):
            1. clientName: ${clientName}
            2. clientPassword: ${clientPassword}
            3. client symbol: ${clientPassword[varCoursor]}
            4. clientPasswordLenght: ${clientPassword.length}`)
        varCoursor += 1
    }
    
console.log(`Finished check Number and CamelCase letters`)
console.log(`************************************************`)



console.log(`************************************************`)



console.log(`Details:
1. clientName: ${clientName}
2. clientPassword: ${clientPassword}

Results of cheking:
checkLength = ${checkLength}
checkSymbol = ${checkSymbol}
checkNumber = ${checkNumber}`)

alert(`clientName: ${clientName}; \nclientPassword: ${clientPassword}; \ncheckLength: ${checkLength}; \ncheckSymbol = ${checkSymbol}; \ncheckNumber = ${checkNumber}`)