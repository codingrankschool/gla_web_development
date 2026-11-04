//Logical Operators: If we have more than one comparisons then we should logical operator.

/*
Problem 1: print true if user is eligible for following conditions:
1. age >= 18
2. isIndian == true
3. isFromUttarPradesh == true
*/

//Without Logical Operators:

var age = 18
console.log(age >= 18) //true

var isIndian = true
console.log(isIndian == true) //true

var isFromUttarPradesh = true
console.log(isFromUttarPradesh == true) //true

//Solution - Logical Operator


/*
Problem 2: print true if user is eligible for any of these conditions:
1. male => age >= 21, isGraduate == true, isJob == true
2. female => age >= 18, isGraduate == true
*/

//Without Logical Operators:


//for female
var age = 18
console.log(age >= 18) //true

var isGraduate = true
console.log(isGraduate == true) //true

//Can consider as true


//for male
var age = 22
console.log(age >= 21) //true

var isGraduate = true
console.log(isGraduate == true) //true

var isJob = true
console.log(age === true) //true

//Solution: Logical Operator

/*
There are follwoing types of logical operators
1. Logical AND(&&)
2. Logical OR(||)
3. Logical NOT(!)

*/

//1. Logical AND(&&): It returns true if all the comparisons/conditions are 
// true if any of the comparison/condition is false then entire expression become false

//Without Logical Operators:

var gender = "male"
var age = 18
console.log(age >= 18) //true

var isIndian = true
console.log(isIndian == true) //true

var isFromUttarPradesh = false
console.log(isFromUttarPradesh == true) //true

//With Logical AND Operator

var result = age >= 18 && isIndian == true && isFromUttarPradesh == true
console.log(result) //true

//or
console.log(age >= 18 && isIndian == true && isFromUttarPradesh == true) //true


//1. Logical OR(||): It returns true if any of the comparisons/conditions are 
// true among all, and false if none of the comparison/condition is true

var letter = 'a'
var result = letter == 'a' || letter == 'e' || letter == 'i' || letter == 'o' || letter == 'u'
console.log(result) //true

//or
console.log(letter == 'a' || letter == 'e' || letter == 'i' || letter == 'o' || letter == 'u'
)//true

//Good Example


var result = gender === "male" && age >= 21 && isGraduate && isJob || gender ==="female" 
&& age>= 18 && isGraduate