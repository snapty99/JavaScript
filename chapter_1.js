// tell different between var and let

/* This is not return Error cause we declared y variable as var (global scope)*/
var x = 10
if (x === 10) {
    var y = 500
    console.log("y = " + y);
}
console.log("y = " + y);

/* This will return an error cause we declare k variable as let (block scope) */
if (x === 10) {
    let k = 500
    console.log("k = " + k);
}
console.log("k = " + k);