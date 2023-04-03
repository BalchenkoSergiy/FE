// task 07

const clientName = prompt('Insert Your name please')
let orderAmount =  Number((prompt(`How much money ${clientName} spent today?`)).trim())
console.log(`orderAmount: ${orderAmount}`)
console.log(`type of orderAmount: ${typeof(orderAmount)}`)
let clientSpentForAllTime = 0
let discount = 0
console.log(`clientSpentForAllTime before counting: ${clientSpentForAllTime}`)

while (isNaN(orderAmount) == true || orderAmount == 0) {
    alert(`Hi you need to insert only numbers. Please try againe.`)
    orderAmount =  Number((prompt(`How much money ${clientName} spent today?`)).trim())
    console.log(`orderAmount: ${orderAmount}`)
}


if (orderAmount > 0){
    if (clientSpentForAllTime + orderAmount >= 100 && clientSpentForAllTime  + orderAmount <= 300) 
        {
            discount = 10
            alert(`Congratulation, your discount is ${discount}%!`)
            orderAmount = (orderAmount / 100) * 90 
            alert(`Your orderAmount is ${orderAmount}!`)
            clientSpentForAllTime = clientSpentForAllTime + orderAmount
            console.log(`clientSpentForAllTime after counting: ${clientSpentForAllTime}`)


            console.log(`Details:
            1. clientName: ${clientName}
            2. orderAmount: ${orderAmount}
            3. clientSpentForAllTime: ${clientSpentForAllTime}
            4. discount: ${discount}`)
        }
    else if (clientSpentForAllTime + orderAmount >= 301 && clientSpentForAllTime + orderAmount <= 500) 
        {
            discount = 20
            alert(`Congratulation, your discount is ${discount}%!`)
            orderAmount = (orderAmount / 100) * 80 
            alert(`Your orderAmount is ${orderAmount}!`)
            clientSpentForAllTime = clientSpentForAllTime + orderAmount
            console.log(`clientSpentForAllTime after counting: ${clientSpentForAllTime}`)

            console.log(`Details:
            1. clientName: ${clientName}
            2. orderAmount: ${orderAmount}
            3. clientSpentForAllTime: ${clientSpentForAllTime}
            4. discount: ${discount}`)
        }
    else if (clientSpentForAllTime + orderAmount > 500) 
        {
            discount = 30
            alert(`Congratulation, your discount is ${discount}%!`)
            orderAmount = (orderAmount / 100) * 70 
            alert(`Your orderAmount is ${orderAmount}!`)
            clientSpentForAllTime = clientSpentForAllTime + orderAmount
            console.log(`clientSpentForAllTime after counting: ${clientSpentForAllTime}`)

            console.log(`Details:
            1. clientName: ${clientName}
            2. orderAmount: ${orderAmount}
            3. clientSpentForAllTime: ${clientSpentForAllTime}
            4. discount: ${discount}`)
        }
    else
        {
            discount = 0

            console.log(`Details:
            1. clientName: ${clientName}
            2. orderAmount: ${orderAmount}
            3. clientSpentForAllTime: ${clientSpentForAllTime}
            4. discount: ${discount}`)
        }
}