// Destructuring Array

const countries = ["Thailand", "Canada"];

// Normal way
const normalA = countries[0]
const normalB = countries[1]
console.log("** Normal way to reach Array **")
console.log("normalA parameter: " + normalA)
console.log("normalB parameter: " + normalB)

// Destructuring
const [a,b] = countries;
console.log("** Destructuring Array 'countries' **")
console.log("a parameter: " + a)
console.log("b parameter: " + b)

// Destructuring Object

const snapty99 = {
    names : "sunny",
    age : 22,
    gender: "male"
}

// Normal way
const myName = snapty99.names
const myAge = snapty99.age
const myGender = snapty99.gender
console.log("** Normal way to reach Object **")
console.log(myName, myAge, myGender)

// Destructuring
const {names:testRenameParameter, age:age, gender:gender} = snapty99
console.log("** Destructuring Object 'snapty99'**")
console.log(testRenameParameter, age, gender)

/* Additional information 
 [] <- Array Symbol
 {} <- Object Symbol
*/

