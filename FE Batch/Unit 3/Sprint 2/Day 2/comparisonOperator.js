//Comparison Operator: To compare two variable's value and it always returns result as boolean(true/false)

//We've following type of comparison Operators in javscript:
/*
1. > (greater than) => checks one value is greater than another value or not
2. >= (greater than or equal to) => checks one value is either greater than or equal to
3. < (less than) => checks one value is less than other value
4. <= (less than or equal to) => checks one value is either less than or equal to
5. == (double equal to) => checks both values are equal to each other or not
6. != (not equal to) => checks both values are not equalt to each other.


7. === (triple equal to)
8. !==(not double equal to)
*/

// console.log(45 > 34)//true
// console.log(45 > 45)//false
// console.log(45 >= 45)//true
// console.log(45 < 34)//false
// console.log(45 < 64)//true
// console.log(34 <= 34)//true

// console.log(false > 1) //false
// console.log(true >= true) 

// console.log(45 >= 45 > false)


//Example: equality

console.log(45 == 45) //true
console.log("Rakesh" == "Suresh") //false
console.log("Rakesh" == "Rakesh") //true
console.log(true == true) //true

console.log("45"==45) //true, why because ==, != operators follow by default implicit conversion.
console.log("45r" == 45) //false

//Note: ===, and !== is used to compare both data type and value => they are used for strictly typed comparison

console.log("45" === 45) //false
console.log(45 === 45)//true

console.log(45 !== 45) //false