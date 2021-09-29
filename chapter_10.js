// push add value at last index
// pop remove value at last index
// unshift add value at first index
// shift remove value at first index

const number = [1,2,3,4,5]
console.log("Default")
console.log(number)
number.push(...[6,7]) // push with Array (by using '...' According chapter 6)
number.push(8)
console.log("Push")
console.log(number)
number.pop()
console.log("Pop")
console.log(number)
number.unshift(555)
console.log("Unshift")
console.log(number)
number.shift()
console.log("Shift")
console.log(number)
