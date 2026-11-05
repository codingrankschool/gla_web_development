//Conditional Statement: As name suggest, It gives meaningful statement on basis of 
// given condition state.

//How to create condtion: Comparison Operators
//var age = 45
//var result = age >= 18 //condition/comparison
//result => true


//There are following type of conditional statement in javascript:
/*
1. if statement
2. if else statement
3. if else if else (if else ladder) statement
4. Nested if else statement.
*/


//1. if statement -> It only executes of block of code of if 
// statement if condition is true.
/*
syntax:

if(condition->true/false){

    //when condition is true

}
*/

//Problem 1: Check voting eligibility
var age = 17

//condition: when condition is true
if(age >= 18){

    //statement
    console.log("Eligible for voting")
}

//when condition is false
if(age < 18){
    console.log("Not Eligible for voting")
} 

//Limitation of if statement: it is only going to execute lines of 
// code(block of code) when condtion is true not when condtion is false

//Solution: if else statement

//If else statement: if condition is true then code inside if block 
// is gonna execute else code inside else is gonna execute.

/*
if (condition){
    //when conditiion is true
}else{
    //when condition is false    
}

*/

if(age >= 18){
    console.log("Eligible")
}else{
    console.log("Not Eligible")
}


/*
We Problem: I have a number you need to check wheather it is negative, 
positive or zero.

var number = 45

Conditions: 3 condtions required

Solution: if else ladder(if else if else statement)
Note: normal if and if else statement is best for one condition only.

But when ever you've more than one condions then below options are best to choose:
1. if else ladder(if else if else statement)
2. nested if else statement.
*/


//1. if else ladder(if else if else statement): use when conditions are independent
//2. nested if else statement: use when conditions are dependent


//We Problem: I have a number you need to check wheather it is negative, 
//positive or zero.

//using if else ladder(if else if else) statement: when you've more than 
// one independent conditions, if any of the given condition is true 
// the code inside that block is gonna execute otherwise if none of the conditions are true then code inside else 
// block is gonna execute

/*
Syntax:
if (condition1){
    //when condtion 1 is true
}
else if(condition2){
    //when condtion 2 is true
}
else if(condition3){
    //when condtion 3 is true
}
else{
    //if none of above conditions are true
}

*/

//solution:
var number = 45

if(number < 0){
    console.log("Negative")
}
else if(number > 0){
    console.log("Positive")
}
else if(number == 0){
    console.log("Zero")
}
else{
    console.log("Invalid Number...")
}

//Student Task: Check a letter is vowel or consonant

//WE Problem: Print eligible for vote if person is meeting below criteria:
//1. isIndian = true
//2. isFromUttarPradesh = true
//3. age >= 18

//Note: all above three conditions are connected/dependent on each other, 
// then tell which conditional statement is best suitable for this

//Solution: Nested if else statement - when we have more than one condtions 
// and they are dependend to each other.


/*
syntax if nested if else:

if(condition1){
    
    //nested if for checking dependent conditions
    if(dependentCondition2){

        if(dependentCondition3){

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


//WE Problem: Print eligible for vote if person is meeting below criteria:
//1. isIndian = true
//2. isFromUttarPradesh = true
//3. age >= 18

//solution:

var isIndian = true, isFromUttarPradesh = true
var age = 56

if(isIndian){
    if(isFromUttarPradesh){
        if(age>=18){
            console.log("Eligible for voting.")
        }
        else{
            console.log("Sorry!, Age criteria not meeting.")
        }
    }
    else{
        console.log("Sorry!, State criteria not meeting.")
    }
}
else{
    console.log("Sorry!, You're not indian")
}


//WE Problem: Print eligible for sadi if person is meeting below criteria:
//1. gender = male => isGraduate = true, isJob = true => Sadi kr lo bhai
//2. gender = female => isGraduate = true => Bahen you can decide
//3. You're not right person


//Solution:
//1. if else ladder
//2. nested if else

var gender = "male"
var isGraduate = true, isJob = true
var package = 15


if(gender == "male"){
    if(isGraduate){
        if(isJob){
            if(package >= 8){
                console.log("Congratualation!, Sadi kr le bhai")
            }
            else{
                console.log("Struggle litter more")
            }
        }
        else{
            console.log("Please have job first")
        }
    }else{
        console.log("Why are you in hurry?")
    }
}
else if(gender == "female"){
    if(isGraduate){
        console.log("You can decide")
    }else{
        console.log("Please wait!")
    }
}
else{
    console.log("You're not a right person")
}

//Note: You're able to meet with solution but what if you've more conditions then your 
// code is gonna harder to maintain, and harder to read

//Solution: logical operators

//Logical Operators: When we have more than one conditions are conditions are dependent and independents.

//AND - && => It returns true when all conditions are true, and if any condition is false 
// all conditions become false

//Example: print logged in successfully if username and password is correct

var username = "admin", password="false"
//dependent conditions => AND
//without logical operators:
if(username == "admin"){

    if(password == "admin"){
        console.log("Logged in successfully")
    }
    else{
        console.log("Invalid Password")
    }
}else{
    console.log("Invalid Username")
}

//using logical and operator:

if(usename == "admin" && password == "admin"){
    console.log("Logged in successfully")
}else{
    console.log("Invalid Credentials")
}

//AND = all trues


//Logical OR operators: when you've more than one indedendent conditions.
//What happens: it checks if any of the given condition is true then the entire expression 
// become true if none of the conditiions are true then entire expression become false.

//Example: check a letter is vowel or consonant:

//without logical operator: you can try - student
//with logical operator or

var letter = 'a'
if(letter == 'a' || letter == 'e' || letter == 'i' || letter == 'o' || letter == 'u'){
    console.log("Vowel")
}else{
    console.log("Consonant")
}



//Logical NOT operator(!): it negates the conditions state
//Example:

var isMarried = false
if(!isMarried){
    console.log("Welcome to party")
}else{
    console.log("Welcome to temple")
}

if(gender == "male"){
    if(isGraduate){
        if(isJob){
            if(package >= 8){
                console.log("Congratualation!, Sadi kr le bhai")
            }
            else{
                console.log("Struggle litter more")
            }
        }
        else{
            console.log("Please have job first")
        }
    }else{
        console.log("Why are you in hurry?")
    }
}
else if(gender == "female"){
    if(isGraduate){
        console.log("You can decide")
    }else{
        console.log("Please wait!")
    }
}
else{
    console.log("You're not a right person")
}


//using logical opertors


if(gender == "male" && isGraduate && isJob && package >= 8){
    console.log("Congratualation!, Sadi kr le bhai")
}
else if(gender == "female" && isGraduate){
    console.log("You can decide")
}
else{
    console.log("You're not a right person")
}

//if you want to print same message:

if(gender == "male" && isGraduate && isJob && package >= 8 || gender == "female" && isGraduate){
    console.log("Congratualation!, You're eligible")
}
else{
    console.log("You're not a right person")
}

