//Increment/Decrement Operator -> They increse the value by one or decrese the value by one
//Operator: ++(Increment), --(Decrement)


//Without Increment/Decrement Operator:

// var num = 45;
// console.log(num) //45
// num = num + 1 
// console.log(num) //46

//to increase value by 5

// num = num + 5
// console.log(num) //51


//Using Increment/Decrement Operator:
//Note: It doesn't return anything just incrase and decrease the value

// num = ++num
// console.log(num)

//To understand above behavior, we need to understand two type of increment/decrement operator:
//1. post increment/decrement -> after variable name you can use this operator(++/--)
var number = 20
number++ //post increment 
number-- //post decrement

var age = 45
console.log(age++) //45 => it is letting console.log to use the value then it increases the value by 1
console.log(age) //46

console.log(age--) //46
console.log(age) //45

//Note: post increment/decrement operator increases/descreses its value by 1 after current operation execution.

//2. pre increment/decrement -> we use before variable name
++number //pre increment
--number //pre decrement

var myAge = 27

console.log(++myAge) //28
console.log(myAge) //28

console.log(--myAge) //27
console.log(myAge) //27


//Student Task: 
var a = 5, b = 10, c = 3, d = 4

var result = a++ + --b * 2 + --c * --d * c++

console.log(result)

