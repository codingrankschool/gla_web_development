//Function: block of code which is related to specific functionality

//Declaration of funciton
/*
function functionName(parameters){

  return "Something to return" 
}


//Parameters: function varibales/properties
//Arguments: actual values/data for the function variable you provide at the time of calling function.


*/

//parameters: a, b(function variables/properties)
function add(a, b){
  console.log(a+b)
}


//to excute function: its important to call the function.
//need to call function by name

//arguments/actual data (20 and 10)
add(10, 20)
add(56, 34)


//Note: function also returns something:

function welcome(student){
  return student+" Welcome to University!"
}


var result = welcome("Pragya")
console.log(result)

//or

console.log(welcome("Prateek"))

//WE Problem: Given set of names your and task is to capital each names of the 
//array and print.

function myToUpperCase(name){
  return name.toUpperCase()
}

var names = ["rakesh", "chaman", "chintu", "chinki", "bheem"]

//for in loop:
// for(var i in names){
//   // console.log(i)
//   names[i] = myToUpperCase(names[i])
// }

var index = 0
for (var name of names) {
  names[index++] = myToUpperCase(name)
}

console.log(names)








