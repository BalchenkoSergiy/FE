// task 07

const clientName = prompt('Insert Your name please')
let clientPassword = ''
let checkLength = false

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
                    console.log(`Details (Lengt check):
                    1. clientName: ${clientName}
                    2. clientPassword: ${clientPassword}
                    3. clientPasswordLenght: ${clientPassword.length}`)

                    alert(`Error! your password length need to have lenth between 3 and 20 symbols!`) 
                }
        }

    let varCoursor = 0
    let varEndPoint = clientPassword.length - 1
    let checkSymbol = false

    while (checkSymbol == false && varCoursor <= varEndPoint) 
        {
            console.log(`Details (CamelCase check):
            1. varCoursor: ${varCoursor}
            2. varEndPoint: ${varEndPoint}
            3. clientPasswordLenght: ${clientPassword.length}
            4. clientPassword: ${clientPassword}
            5. Check symbol: ${clientPassword[varCoursor]}`)

            if (clientPassword[varCoursor] === clientPassword[varCoursor].toUpperCase()) 
                {
                    console.log(`Check symbol: DONE`)
                    checkSymbol = true

                }

            varCoursor += 1
        }
    

//    else if (clientSpentForAllTime + orderAmount >= 301 && clientSpentForAllTime + orderAmount <= 500) 
//        {
//            discount = 20
//            alert(`Congratulation ${clientName}, your discount is ${discount}%!`)
//            orderAmount = (orderAmount / 100) * 80 
//            alert(`Your orderAmount is ${orderAmount}!`)
//            clientSpentForAllTime = clientSpentForAllTime + orderAmount
//            console.log(`${clientName} spent for all time after counting: ${clientSpentForAllTime}`)
//
//            console.log(`Details:
//            1. clientName: ${clientName}
//            2. orderAmount: ${orderAmount}
//            3. clientSpentForAllTime: ${clientSpentForAllTime}
//            4. discount: ${discount}`)
//        }
//    else if (clientSpentForAllTime + orderAmount > 500) 
//        {
//            discount = 30
//            alert(`Congratulation ${clientName}, your discount is ${discount}%!`)
//            orderAmount = (orderAmount / 100) * 70 
//            alert(`Your orderAmount is ${orderAmount}!`)
//            clientSpentForAllTime = clientSpentForAllTime + orderAmount
//            console.log(`${clientName} spent for all time after counting: ${clientSpentForAllTime}`)
//
//            console.log(`Details:
//            1. clientName: ${clientName}
//            2. orderAmount: ${orderAmount}
//            3. clientSpentForAllTime: ${clientSpentForAllTime}
//            4. discount: ${discount}`)
//        }
//    else
//        {
//            discount = 0
//
//            console.log(`Details:
//            1. clientName: ${clientName}
//            2. orderAmount: ${orderAmount}
//            3. clientSpentForAllTime: ${clientSpentForAllTime}
//            4. discount: ${discount}`)
//        }


//let orderAmount =  Number((prompt(`How much money ${clientName} spent today?`)).trim())
//console.log(`orderAmount: ${orderAmount}`)
//console.log(`type of orderAmount: ${typeof(orderAmount)}`)
//let clientSpentForAllTime = 0
//let discount = 0
//console.log(`clientSpentForAllTime before counting: ${clientSpentForAllTime}`)
//
//while (isNaN(orderAmount) == true || orderAmount == 0) {
//    alert(`Hi you need to insert only numbers. Please try againe.`)
//    orderAmount =  Number((prompt(`How much money ${clientName} spent today?`)).trim())
//    console.log(`orderAmount: ${orderAmount}`)
//}
//
//
//if (orderAmount > 0){
//    if (clientSpentForAllTime + orderAmount >= 100 && clientSpentForAllTime  + orderAmount <= 300) 
//        {
//            discount = 10
//            alert(`Congratulation ${clientName}, your discount is ${discount}%!`)
//            orderAmount = (orderAmount / 100) * 90 
//            alert(`Your orderAmount is ${orderAmount}!`)
//            clientSpentForAllTime = clientSpentForAllTime + orderAmount
//            console.log(`${clientName} Spent for all time after counting: ${clientSpentForAllTime}`)
//
//
//            console.log(`Details:
//            1. clientName: ${clientName}
//            2. orderAmount: ${orderAmount}
//            3. clientSpentForAllTime: ${clientSpentForAllTime}
//            4. discount: ${discount}`)
//        }
//    else if (clientSpentForAllTime + orderAmount >= 301 && clientSpentForAllTime + orderAmount <= 500) 
//        {
//            discount = 20
//            alert(`Congratulation ${clientName}, your discount is ${discount}%!`)
//            orderAmount = (orderAmount / 100) * 80 
//            alert(`Your orderAmount is ${orderAmount}!`)
//            clientSpentForAllTime = clientSpentForAllTime + orderAmount
//            console.log(`${clientName} spent for all time after counting: ${clientSpentForAllTime}`)
//
//            console.log(`Details:
//            1. clientName: ${clientName}
//            2. orderAmount: ${orderAmount}
//            3. clientSpentForAllTime: ${clientSpentForAllTime}
//            4. discount: ${discount}`)
//        }
//    else if (clientSpentForAllTime + orderAmount > 500) 
//        {
//            discount = 30
//            alert(`Congratulation ${clientName}, your discount is ${discount}%!`)
//            orderAmount = (orderAmount / 100) * 70 
//            alert(`Your orderAmount is ${orderAmount}!`)
//            clientSpentForAllTime = clientSpentForAllTime + orderAmount
//            console.log(`${clientName} spent for all time after counting: ${clientSpentForAllTime}`)
//
//            console.log(`Details:
//            1. clientName: ${clientName}
//            2. orderAmount: ${orderAmount}
//            3. clientSpentForAllTime: ${clientSpentForAllTime}
//            4. discount: ${discount}`)
//        }
//    else
//        {
//            discount = 0
//
//            console.log(`Details:
//            1. clientName: ${clientName}
//            2. orderAmount: ${orderAmount}
//            3. clientSpentForAllTime: ${clientSpentForAllTime}
//            4. discount: ${discount}`)
//        }
//}