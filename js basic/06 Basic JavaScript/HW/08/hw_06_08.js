// task 08

const clientName = prompt('Insert Your name please')
let clientPassword = ''
let checkLength = false
let checkSymbol = false
let checkNumber = false
let varCoursor = 0
let varEndPoint = clientPassword.length - 1

console.log(`Starting registration`)
console.log(`************************************************`)
console.log(`************************************************`)
console.log(`Start check check Length`)

while (checkLength == false || checkSymbol == false || checkNumber == false || clientPassword == '')
    {
        console.log(`************************************************`)
        console.log(`Started check check Length`)
        while (checkLength == false)
            {
                clientPassword = prompt('Insert Your password please')
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
                        alert(`Error! your password length need to have lenth between 3 and 20 symbols!`)
                        clientPassword = prompt('Insert Your password please')
                        checkSymbol = false
                        checkNumber = false
                        
                        console.log(`Details (Length check):
                        1. clientName: ${clientName}
                        2. clientPassword: ${clientPassword}
                        3. clientPasswordLenght: ${clientPassword.length}`)
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
        console.log(`Finished check Length`)
        console.log(`************************************************`)
        console.log(`************************************************`)
        console.log(`Start check Numbers letters`)

        while (checkNumber == false && Number(varCoursor) != Number(varEndPoint)) 
            {
                console.log(`************************************************`)
                console.log(`Started check Number letters`)
                if  (
                        Number(clientPassword[varCoursor]) === 0 || 
                        Number(clientPassword[varCoursor]) === 1 || 
                        Number(clientPassword[varCoursor]) === 2 ||
                        Number(clientPassword[varCoursor]) === 3 || 
                        Number(clientPassword[varCoursor]) === 4 || 
                        Number(clientPassword[varCoursor]) === 5 ||
                        Number(clientPassword[varCoursor]) === 6 ||
                        Number(clientPassword[varCoursor]) === 7 || 
                        Number(clientPassword[varCoursor]) === 8 || 
                        Number(clientPassword[varCoursor]) === 9
                    )
                    {
                        console.log(`Symbol is: ${clientPassword[varCoursor]}`)
                        console.log(`Symbol is Number = true`)
                        checkNumber = true
                        console.log(`Details (Length check):
                        1. clientName: ${clientName}
                        2. clientPassword: ${clientPassword}
                        3. client symbol: ${clientPassword[varCoursor]}
                        4. clientPasswordLenght: ${clientPassword.length}`)
                    }
                else
                    {
                        console.log(`Symbol is: ${clientPassword[varCoursor]}`)
                        console.log(`Symbol is Number = false`)
                        console.log(`****************************************`)
                        if ((clientPassword.length - 1) != varCoursor)
                            {
                                varCoursor += 1

                                console.log(`Details (Length check):
                                1. clientName: ${clientName}
                                2. clientPassword: ${clientPassword}
                                3. client symbol: ${clientPassword[varCoursor]}
                                4. clientPasswordLenght: ${clientPassword.length}`)
                            }
                        else if ((clientPassword.length - 1) == varCoursor)
                            {
                                console.log(`No Numbers in your Password`)
                                alert(`Error! No Numbers in your Password!`)
                                clientPassword = prompt('Insert Your password again please')
                                varCoursor = 0
                                checkLength = false
                                checkSymbol = false

                                console.log(`Details (Length check):
                                1. clientName: ${clientName}
                                2. clientPassword: ${clientPassword}
                                3. client symbol: ${clientPassword[varCoursor]}
                                4. clientPasswordLenght: ${clientPassword.length}`)
                            }
                        else
                            {
                                checkNumber = true
                            }
                    } 
            }
        console.log(`Finished check Number letters`)
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
                        varCoursor = 0
                    }
                else
                    {
                        console.log(`Symbol is: ${clientPassword[varCoursor]}`)
                        console.log(`Symbol is UpperCase = false`)
                        console.log(`****************************************`)
                        if ((clientPassword.length - 1) != varCoursor)
                            {
                                varCoursor += 1
                                console.log(`Details (Length check):
                                1. clientName: ${clientName}
                                2. clientPassword: ${clientPassword}
                                3. client symbol: ${clientPassword[varCoursor]}
                                4. clientPasswordLenght: ${clientPassword.length}`)
                            }
                        else if ((clientPassword.length - 1) == varCoursor)
                            {
                                console.log(`No UpperCase in your Password`)
                                alert(`Error! No UpperCase in your Password!`)
                                clientPassword = prompt('Insert Your password again please')
                                varCoursor = 0
                                checkLength = false
                                checkNumber = false
                                console.log(`Details (Length check):
                                1. clientName: ${clientName}
                                2. clientPassword: ${clientPassword}
                                3. client symbol: ${clientPassword[varCoursor]}
                                4. clientPasswordLenght: ${clientPassword.length}`)
                            }
                        else
                            {
                                checkSymbol = true
                                console.log(`Details (Length check):
                                1. clientName: ${clientName}
                                2. clientPassword: ${clientPassword}
                                3. client symbol: ${clientPassword[varCoursor]}
                                4. clientPasswordLenght: ${clientPassword.length}`)
                            }
                    } 
            }
    }