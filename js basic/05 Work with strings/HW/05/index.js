// HW 05/05

const userString = (prompt('Insert your text please')).trim();
let startSliceIndex = (prompt('Insert your startSliceIndex please')).trim();
startSliceIndex = Number(startSliceIndex)

let endSliceIndex = (prompt('Insert your endSliceIndex please')).trim();
endSliceIndex = Number(endSliceIndex)


console.log(`Origin string: ${userString}`)
console.log(`Result string: ${userString.slice(startSliceIndex, endSliceIndex)}`)

alert(`Result string: ${userString.slice(startSliceIndex, endSliceIndex)}`)