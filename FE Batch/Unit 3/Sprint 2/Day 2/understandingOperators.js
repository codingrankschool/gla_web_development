//Operator: It operates between operands(variable -> its value) 

var num1 = 10, num2 = 2
//operands - num1, num2
//operation -> operator -> addition => +(operator)

//syntax:
//varName1 operator varName2

//Example: addition
num1 + num2 //Between num1 and num2, operator + is performing addition 
//operation and also give as result

var result = num1 + num2 //(maths expression)
console.log(result)

//There are following types of operators in javascript:
//1. Arithmetic/Mathmetical Operator
//2. Comparison Operator
//3. Logical Operator
//4. Assignment Operator
//5. Unary Operators
//6. Ternary Operator
//7. Bitwise Operator
//Other


//1. Arithmetic/Mathmetical Operator => 
// +(addition), 
// -(subration), 
// *(multiplication), 
// /(division), 
// **(power), 
// %(remainder)

// console.log(45 + 15) //60
// console.log(45 - 15) //30
// console.log(45 / 15) //3
// console.log(5 * 5) //25
// console.log(5 ** 2) //25
// console.log(5 ** 3) //125

/*
WE Problem: An offer is going on amazon of 20% off, if you buy 4 different product with atleast 2 quantity, 
then find out the discount price and total payable price.
*/

var pro1 = 300, pro2 = 400, pro3 = 500, pro4 = 200
var pro1Qunatity = 2, pro2Qunatity = 3, pro3Qunatity = 2, pro4Qunatity = 5

var total = pro1 * pro1Qunatity + pro2 * pro2Qunatity + pro3 * pro3Qunatity + pro4 * pro4Qunatity

console.log("Total Amount: ", total)


var discount = total * 20 / 100

console.log("Discounted you got: ",discount)

var paybalePrice = total - discount

console.log("Payable Amount: ", paybalePrice)


//Modulus Operator: In general term to find out remainder

console.log(45 % 3) //0
console.log(45 % 2) //1

