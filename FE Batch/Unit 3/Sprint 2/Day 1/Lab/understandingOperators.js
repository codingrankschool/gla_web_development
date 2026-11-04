//Operators: As name suggests - Operator => They operate between operands(variable's value)

var num1 = 34, num2 = 16
//num1, and num2 => operands
//+, -, *, /, %, and others => operators

//addition
num1 + num2 //Here, num1 and num2 are variables(operands) and + is the 
//operator which is doing +(addition) operation between operands.


//There are following types of Operators in javascript:
//1. Arithematic/Mathmetical Operators
//2. Comparision Operators
//3. Logical Operators
//4. Assignment Operators
//5. Ternary Operators
//6. Bitwise Operators
//7. Other


//1. Arithematic Operators => They are used to perform maths operation like addition, 
// subtraction, multiplication, division, and modulus operations in your application.

//+ (addition), -(subtraction), *(multiplication), /(division), %(modulus/finding remainder)

var a= 45, b = 15

//addition
// var result = a + b // addition of a and b and it will give us result
// console.log(result)
// console.log(a - b) //30
// console.log(a / b) // 3
// console.log( b * 4) //45

var product1 = 600
var product2 = 600
var product3 = 800

var total = product1 + product2 + product3

console.log(total)

var calculate30 = total * .30
console.log(calculate30)

var finalAmount = total - calculate30
console.log(finalAmount)

//Good Example:
//Student Task - You're given 10% discount on total bill on flipkart, If you buy mininum three 
// quantity of three different products, your task is to find out the payableBillAmount.
//product1 = 500, product2 = 200, product3 = 400

//More about Mathematical Operator:
//** => power operator

console.log(3 ** 2) //3 ^ 2 => 9

var num = 5
var power = 3

console.log(num ** power)


//% Modulus Operator (Remainder)

console.log(45 % 2) //1
console.log(44 % 2) //0
console.log(23 % 2) //1

/*
Student Task: There are 100 candidates who are going for interview at XYZ Companay and 
company having 4 interview panels

Now let me know the interview panel number for student 23

23 % 4 => 3

Panel 1 => 1
Panel 2 => 2
Panel 3 => 3
Panel 4 => 0 

*/


/*
Student Task:
Given a number 12345, your task is to find out the last digit.

*/

var number = 12345
console.log() //5
console.log() //4

