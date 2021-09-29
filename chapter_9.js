// Array Management (join, concat)

// Declare array variable
const arrayNumber = [0,1,2,3,4,5]
const a1 = [100,200]
const a2 = [300,400]
console.log(arrayNumber)
// Join example
const joinResult = arrayNumber.join()
console.log(joinResult)
// Concat Example
const concatResult = arrayNumber.concat(6,7,8,9,10)
console.log(concatResult)
// Join example with array
const joinResultArray = arrayNumber.join(a1)
console.log(joinResultArray)
// Concat Example with array
const concatResultArray = arrayNumber.concat(a2)
console.log(concatResultArray)

