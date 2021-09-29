// Spread Operator (Javascript)

// Array
const subProgrammingLanguage = ["Swift"]
const subject = ["DataStruncture", "Algorithm"]
const programmingLanguage = ["Java", "Javascript", "Python", ...subProgrammingLanguage]
const relavant = ["relavant",subject, programmingLanguage]

// Output
console.log(subject)
console.log(programmingLanguage)
console.log(relavant)
// Output (Push into Array)
console.log("*Output Push*")
relavant.push("Snapty99")
console.log(relavant)
// push no ... (its mean push array (all/group no extract) into other array)
console.log("** push no ...")
programmingLanguage.push(subject)
console.log(programmingLanguage)
programmingLanguage.pop()
// push no ... (it means extract array value and then push each value into other array)
console.log("** push with ...")
programmingLanguage.push(...subject)
console.log(programmingLanguage)
relavant.pop()
console.log(relavant)

// try other method (determine array position : 2)
console.log("** try other method**")
console.log(relavant.slice(2))
