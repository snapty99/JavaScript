// Arrow function
fullname = (fistname, lastname) => {return fistname+ " " +lastname}
// or
fullnameShort = (fistname, lastname) =>  fistname+ " " +lastname

// Old style
function setGender(gender) {
    return "Gender: " + gender
}

// Output
console.log(fullname("snapty99", "git"));
console.log(fullnameShort("snapty99" , "gitshort"))
console.log(setGender("Male"));
