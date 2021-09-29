// Default Parameter

// normally if parameter is null 'undefined' will be the result as Default
// but we make a condition which if parameter is null will set value to "Basic" as Default
englishSkill = (level) => {
    if(!level) {
        level = "Basic"
    }
    return level
}

// call function without sending any value ("Basic" will be return)
console.log(englishSkill())
// call function with value
console.log(englishSkill("Proficient"))