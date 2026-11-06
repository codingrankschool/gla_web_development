/*Conditional Statement: As name suggests, it gives always meaningful statement based on particular 
consdition's state(true/false)
*/

/*

How to create conditions/comparisons: using comparison operators
var age = 18
age >= 18 => a comparison or condtion to check age eligibility for voting in india
Note: above comparison returns boolean result(is this boolean result understandable to your 
clients/customers/users?)

For providing meaningful statement, we have following types of conditional statement in javascript:

1. if statement
2. if else statement
3. if else if else statement
4. nested if else stement
*/


//1. if statement: it gives/executes block of code(lines of code) only when condition is true.
/*
syntax:
if(condition){

    //when above condition is true

}
*/

//Example: check voting eligibility in india, age >= 18
//var age = 17

//condition: true state
// if(age >= 18){

//     //meaningful statement
//     console.log("Eligible for voting.")
// }

//condition: false state
// if(age < 18){
//     console.log("Not eligible for voting.")
// }

//Note: The limitation of if statement is that it only runs when condition is true.
//What if i also want to run block of code when condition is false?
//Solution: if else statement.

//2. if else statement: if condition is true then code inside if block runs and if condiiton is false 
// then code inside else block runs.

/*
syntax:
if(condition){
    //when condition is true
}
else{
    //when condition is false    
}

*/

//Example: check voting eligibility in india, age >= 18

// var age = 17

// if(age >= 18){
//     console.log("Eligible for voting.")
// }
// else{
//     console.log("Not Eligible for voting.")
// }

/*
WE Problem: Give a number, check it is negative, positive, or zero
var number = 45

conditions: 3
number > 0 => to check positive
number < 0 => to check negative
number == 0 => to check zero

-which conditional statement -> if else if else(if else ladder) statement
-Note: because, normal if and if else statement is best choice for single condition.

When you've more than one condtions then following choices are avaiable?
1. if else if else(if else ladder) statement - when you've multiple independent conditions
2. nested if else statement - when you've multiple dependent conditions
*/


/*

WE Problem: Give a number, check it is negative, positive, or zero
var number = 45

conditions: 3
number > 0 => to check positive
number < 0 => to check negative
number == 0 => to check zero


here in above conditions, are they connected/dependent to each other - No they are independent.
solution: if else if else statement(if else ladder)

syntax:

if(conditon1){
    //when condition 1 is true
}
else if(condition2){
    //when conditon 2 is true
}
else if(condition3){
    //when condtion 3 is true    
}
else{
    //when none of above conditons are true.    
}
*/

// var number = 45

// if(number > 0){
//     console.log("Positive")
// }
// else if(number < 0){
//     console.log("Negative")
// }
// else if(number == 0){
//     console.log("Zero")
// }
// else{
//     console.log("Invalid Number")
// }

//Student Task: check a letter is vowel or consonant

/*
WE Problem: Check voting eligibility, print eligible for voting if person is meeting blowe criteris:
1. isIndian = true
2. isFromUttarPradesh = true
3. age >= 19
=> Eligible for voting.

no of conditons: 3, are they connected/dependent? => yes, they dependent on each other. 
solution: nested if else statment -> if inside if

syntax:

//condtion
if(condition){
    
    //dependent condition1
    if(condition1){

        //dependent condition2
        if(conditon2){

        }
        else{
        
        }

    }
    else{
    
    }
}
else{
    
}
*/

var isIndian = true, isFromUttarPradesh = true
var age = 17

if(isIndian){

    if(isFromUttarPradesh){

        if(age >= 18){

            console.log("Elgible for voting")

        }
        else{
            console.log("Sorry!, age creteria is not meeting.")
        }

    }
    else{
        console.log("Sorry!, You're not from up")
    }
}
else{
    console.log("Hey!, You're not indian.")
}


/*
WE Problem: Print dedicated msg according below conditons:
1. gender = male => age >= 21 => isGraduate = true, isJob = true => sadi ke le bhai
2. gender = female => age >= 18 => isGraduate = true => behan you can decide
3. you're not valid person.

conditonal statment is gonna apply?
1. if else ladder -> for independent conditons (2)
2. nested if else statement -> some dependent condtions
*/

var gender = "male"
var age = 23
var isGraduate = true, isJob = true

if(gender == "male"){
    if(age >= 21){
        if(isGraduate){
            if(isJob){
                console.log("Sadi ke le bhai")
            }
            else{
                console.log("You don't have job!")
            }
        }
        else{
            console.log("Sorry!, You're in hurry")
        }
    }else{
        console.log("You're too young bhai")
    }
}
else if(gender == "female"){
    if(age >= 18){
        if(isGraduate){
            console.log("Bahen, you can decide")
        }
    }else{
         console.log("Sorry!, You're in hurry")
    }
}
else{
    console.log("You're not a valid person.")
}


//Here, you're able to find solutions with conditional statement but it becomes harder 
// to read and harder to maintain we have have multiple depedents and indepdents conditon 
// together.


//Solution: Logical Operators
//AND - && -> DEPENDENT CONDITIONS
//OR - || -> INDEPDENT CONDITIONS

if(gender == "male"){
    if(age >= 21){
        if(isGraduate){
            if(isJob){
                console.log("Sadi ke le bhai")
            }
            else{
                console.log("You don't have job!")
            }
        }
        else{
            console.log("Sorry!, You're in hurry")
        }
    }else{
        console.log("You're too young bhai")
    }
}
else if(gender == "female"){
    if(age >= 18){
        if(isGraduate){
            console.log("Bahen, you can decide")
        }
    }else{
         console.log("Sorry!, You're in hurry")
    }
}
else{
    console.log("You're not a valid person.")
}


//USING LOGICAL OPERATORS:

