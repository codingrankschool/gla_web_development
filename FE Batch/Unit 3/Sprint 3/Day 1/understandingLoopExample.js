//Without Loop: If i ask you to print hello 100 times how will you do this?
// console.log("hello")
// console.log("hello")
// console.log("hello")
// console.log("hello")
// console.log("hello")
// console.log("hello")
// console.log("hello")
// console.log("hello")
// console.log("hello")
// console.log("hello")
// console.log("hello")
// console.log("hello")
// console.log("hello")
// console.log("hello")
// console.log("hello")
// console.log("hello")
// console.log("hello")
// console.log("hello")
// console.log("hello")
// console.log("hello")
// console.log("hello")
// console.log("hello")
// console.log("hello")
// console.log("hello")
// console.log("hello")
// console.log("hello")
// console.log("hello")
// console.log("hello")
// console.log("hello")
// console.log("hello")
// console.log("hello")
// console.log("hello")
// console.log("hello")
// console.log("hello")
// console.log("hello")
// console.log("hello")
// console.log("hello")
// console.log("hello")
// console.log("hello")
// console.log("hello")
// console.log("hello")
// console.log("hello")
// console.log("hello")
// console.log("hello")
// console.log("hello")
// console.log("hello")
// console.log("hello")
// console.log("hello")
// console.log("hello")
// console.log("hello")
// console.log("hello")
// console.log("hello")
// console.log("hello")
// console.log("hello")
// console.log("hello")
// console.log("hello")
// console.log("hello")
// console.log("hello")
// console.log("hello")
// console.log("hello")
// console.log("hello")
// console.log("hello")
// console.log("hello")
// console.log("hello")
// console.log("hello")
// console.log("hello")
// console.log("hello")
// console.log("hello")
// console.log("hello")
// console.log("hello")
// console.log("hello")
// console.log("hello")
// console.log("hello")
// console.log("hello")
// console.log("hello")
// console.log("hello")
// console.log("hello")
// console.log("hello")
// console.log("hello")
// console.log("hello")
// console.log("hello")
// console.log("hello")
// console.log("hello")
// console.log("hello")
// console.log("hello")
// console.log("hello")
// console.log("hello")
// console.log("hello")
// console.log("hello")
// console.log("hello")
// console.log("hello")
// console.log("hello")
// console.log("hello")
// console.log("hello")
// console.log("hello")
// console.log("hello")
// console.log("hello")
// console.log("hello")
// console.log("hello")


//Note: just by above solution, your code becomes less readable, harder to maintain and also very bad implementaion of solution
//Solution: Loop
//Loop: which keeps on iterating/running -> infinite loop


//Example:

// var isRunning  = true

// while(isRunning){
//     console.log("hello")
// }

//Note: above loop is running infinite/unlimited time, but in general we never run loop for infinite 
// time, we run it according to the requirement.

//Requirement: using providing valid condition

// var startingPoint = 1

// while(startingPoint <= 100){
//     console.log(startingPoint, "hello")

//     // startingPoint = startingPoint + 1
//     // startingPoint+=1
//     startingPoint++
// }


//There are follwoing types of loop in javascript:
//1. while loop
//2. do while loop
//3. for loop
//4. for of loop - discuss later at time of array and string
//5. for in loop - discuss later at time of array and string


//1. While loop: it keeps on running unless the given condition is true.
//Example: print 20 to 1

//startingPoint
// var x = 20

// //condtion
// while(x >= 1){
//     console.log(x)

//     //jump
//     x--
// }

//Example: run a loop from 1 to 5 and print the value in one line 12345

var i = 1

var bag = ""

while(i <= 5){
    bag = bag + i+" "
    i++
}

console.log(bag)


//Example: reverse a given number
var number = 12345
//ouput: 54321
var bag = ""

while(number!=0){
    bag += number%10

    number = parseInt(number / 10)
}

console.log(bag)


// console.log(parseInt(12345/10))

//Note: while and do while loop is 
// always useful when number of iteration is not clear to us


//2. Do while loop

//Syntax:
/*
do{

}
while(condition)

*/

//Example: print 1 to 10 using do while loop

var i = 11

do{
    console.log(i)
    i++
}
while(i <= 10)

//Note: if case of do while loop first 
// iteration is alwasy optional it doesn't
//  check condition in first round/iteration but it checks conditions by second iteration on ward


//for loop:

//Example: print 1 to 10
/*
syntax:
for(startingPoint; condition; jump){

}

*/

// for(var i=1;i<=10;i++){
//     console.log(i)
// }