// task 06

const clientName = 'Igor'
let orderAmount = prompt('How much money client spent today?')
let clientSpentForAllTime = Number(orderAmount.trim())
let discount = 0

if (clientSpentForAllTime >= 100 && clientSpentForAllTime <= 300) 
    {
        discount = 10
        alert(`Congratulation, your discount is ${discount}%!`)
        orderAmount = (orderAmount / 100) * 90 
        alert(`Your orderAmount is ${orderAmount}!`)

    }
else if (clientSpentForAllTime >= 301 && clientSpentForAllTime <= 500) 
    {
        discount = 20
        alert(`Congratulation, your discount is ${discount}%!`)
        orderAmount = (orderAmount / 100) * 80 
        alert(`Your orderAmount is ${orderAmount}!`)
    }
else if (clientSpentForAllTime > 500) 
    {
        discount = 30
        alert(`Congratulation, your discount is ${discount}%!`)
        orderAmount = (orderAmount / 100) * 70 
        alert(`Your orderAmount is ${orderAmount}!`)
    }
else
    {
        discount = 0
    }