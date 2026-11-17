/*
Unary Operator:
Unary - one (its application to one operand(value or variable))
operator - particular operation

there are following unary operators:
+ (plus unary opeartor)
- (minus unary opeartor)
++ (increment operator)
-- (decrement operator)
! (not operator)
await
others

Example:
var num = +10
num = -10

var age = 10
age++ (increment operator)


Increment/Decrement Operator: They are used to increase or decrese the value by one

without increment/decrement operator:
How do you increase/decrease the value of variable (using +/-)
Example:
var number = 10
console.log(number) //10
number = number - 1
console.log(number) //9

number = number + 5
console.log(number) //14

Note: using + and - arithmetic operator, you can increase and decrease the varible value 
by any number

Note: But using increment/decrement operator, you can only increase/decrese the value by 
one only.
*/

//Increment/Decrement Operator:

// var age = 10
// age++
// console.log(age) //11
// age--
// console.log(age) //10

// //Good Example: Confusing
// console.log(age++) //10
// console.log(age--) //11

/*To understand above behavior, we need to 
understand type of increment/decrement operator

1. Post Increment/Decrement:
How to use: after variable name 

var number = 11
number++ (post increment)
number-- (post decrement)

- Here value increase/decrease once after current operation

var age = 10
console.log(age++)// print 10 -> but after printing it 
will become 11
console.log(age--)//print 11 -> but after printing it 
will become 10

2. Pre Increment/Decrement:
How to use: before variable name

var number = 11
++number (pre increment)
--number (pre decrement)

- Here value increase/decrease before current operation

var age = 10
console.log(++age)// print 11 -> because it incraese the value before using.
console.log(--age)//print 10 -> because it decrease the value before using.

*/


//post increment/decrement

var age = 10
console.log(age++)// print 10 -> but after printing it will become 11
console.log(age--)//print 11 -> but after printing it will become 10

//pre increment/decrement
console.log(++age)// print 11 -> because it incraese the value before using.
console.log(--age)//print 10 -> because it decrease the value before using.


//WE Task:
var a = 10, b = 5, c = 3, d = 2

var result = ++a * 2 * b-- + --a + c++ * ++d

//++a * 2 * b--(110) + --a + c++ * ++d (10 + 9)
//110+19 => 129
console.log(result)