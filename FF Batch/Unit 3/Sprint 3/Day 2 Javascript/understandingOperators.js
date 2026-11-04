//Why Operator: As name suggests -> It operates(perform specific operation) between operands(variable -> its value)

var num1 = 10, num2 = 5
//operands => num1, and num2
//addition => to perform addition we need: +(addition/sum) operator

//How to write: Syntax
//var1 operator var2

//Example:

num1 + num2    //here between num1 and num2, + operator is performing addition 
//operation and will give result of addition

var result = num1 + num2 
console.log(result)

//To understand more, we have following types of operators:
/*
1. Arithematic/Mathematical Operators(+, -, *, /, **, %)
2. Assignment Operators(=, +=, -+, *=, others)
3. Comparison Operators(>, <, >=, <=, ==, !=, ===, !==)
4. Logical Operators(&&, ||, !)
5. Unary Operators(+, -, ++, --)
6. Bitwise Operators(&, |, others)
7. Ternary Operators
8. Others
*/


//1. Arithematic/Mathematical Operators(+, -, *, /, **, %)

var a = 10, b = 5

//addition
console.log(a + b) //15

//subtraction
console.log(a - b) //5
console.log(56-60) //-4

//multiplication
console.log(a * b) //150

//division
console.log(a / b) //2

//power
console.log(a ** 2) //100
console.log(a ** 3) //1000


/*
WE Problem: An offer is going on amazon of 30% discount, if you buy minimum three different
product with atleast 2 quantity, now your task is to find out the total amount, 
discount amount, and payable amount.

var pro1 = 300, pro2 = 500, pro3 = 600
*/

//solution:

var pro1 = 300, pro2 = 500, pro3 = 600
var pro1Qunatity = 3, pro2Quantity = 2, pro3Quantity = 2

var total = pro1 * pro1Qunatity + pro2 * pro2Quantity + pro3 * pro3Quantity
console.log("Total Amount: ", total)

var discount = total * 30 / 100
console.log("Application Discount: ", discount)


var totalPayableAmount = total - discount
console.log("Total Payable Amount: ", totalPayableAmount)


//Modulus(% -> remainder operator)
console.log(45 % 3) //0
console.log(45 % 2) //1

//Good Example: There is xyz company, and hiring is going for associate software engineers, 
// for this 100 candidates are coming for interviews and company having 4 interview panels 
// for the interview

//Now tell me the panel number for candidate 23

//Solution -> modulus operator(%)
/*
panel 1 -> 1
panel 2 -> 2
panel 3 -> 3
panel 4 -> 0

23 % 4 => 3
22 % 4 => 2
24 % 4 => 0
*/

