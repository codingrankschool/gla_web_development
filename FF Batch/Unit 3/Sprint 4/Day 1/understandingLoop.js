//Without Loop:
//Print hello 100 times?

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
// console.log("hello")

//There are following problems by above code:
//1. Redundancy(Duplicacy)
//2. Code becomes lengthy
//3. harder to maintain
//4. harder to read

//Solution: Loop
//Loop: which keeps on running/iterating

//There are following types of loop in javascript:
//1. while loop
//2. do while loop
//3. for loop
//4. for in loop - discuss later
//5. for of loop - discuss later
//6. forEach - discuss later


//1. while loop: It keeps on running unless the condition is true.
/*
Syntax:
while(condition-comparison Operator){
    //will run block of code when condition is true
}
*/

// var isRunning = true

// while(isRunning){
//     console.log("hello")
// }

//above loop is infinite loop, and in general we don't 
// create infinite loop, we need to stop according to 
// the requirement.

//How to stop loop: according to provided conditions:

//Example: print hello 100 times

//startingPoint
// var startingPoint = 1

// //condition
// while(startingPoint <= 50){
//     console.log(startingPoint, "hello")

//     // startingPoint = startingPoint + 1
//     // startingPoint+=1

//     //updation/jump
//     startingPoint++
// }

//In every loop, following things are very important:
//1. startingPoint
//2. condition
//3. updation(jump) of startingPoint


//Exmaple: 
//1. print 20 to 1
//2. print 20 to 1 in one line seperated by space

// var a = 20

// var bag = ""

// while(a >= 1){
//     // console.log(a)
//     bag+= a+" "
//     a--
// }

// console.log(bag)


//Example: given a number count its digit
// var number = 12345

// var count = 0
// while(number != 0){
//     count++
//     number = parseInt(number/10)
// }
// console.log(count)


//When to while and do while loop: when number of 
// iteration/rounds is not clear to us.


while(false){
    console.log("hello 1")
}

//do while loop:

do{
    console.log("hello 2")
}
while(false)

//Note: in case of do while loop, it doesn't check 
// condition in first iteration/round, and starts checking condition by second round onward


//3. for loop: it is short and simple to while and do while loop and only used when number of iterations/rounds are clear.

/*
syntax:
for(startingPoint;condition;jump/updation){

}

*/

//ExampleL: print 1 to 10 even number

for(var i = 1; i <= 10; i++){

    if(i%2==0){
        console.log('Even Number:', i)
    }

}