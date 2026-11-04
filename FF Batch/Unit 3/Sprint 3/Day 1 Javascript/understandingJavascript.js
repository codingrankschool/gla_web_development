//There are two ways to define comment in js


//Example 1: Single Line
//Single line comment

//Example 2: Multi Line Comment
/*

This is
multi line
comment
*/

//Variable in Javscript: Like a container/box to store techincal data/values(textual data/numbers/boolean).
//Note: While creating the variable, Its important to give it some name because later using that name you 
// can access the variable and also modify its value if required.

//syntax(how to use particular concet)
//var variable_name

//Example:

// Declaration of variable(Creation of variable)
var name
var age
var isMarried

var num1, num2, num3


//Initialization of variable(storing/adding value to the varibale)
//using '=' assignment operator - to assign value to variable

name = "Rakesh"
age = 23
isMarried = false

//Intialization at the time Declaration(At the time of creating variable you can also assign value)

var fatherName = "Dinesh Singh"
var motherName = "Rupa Devi"

var num4 = 45, num6 = 56, num7= 67


//We've created variable, assigned value and don't know how to access that variable value
//How to print variable value in javascript - 
// using console.log(variable_name) - its like a tool to print variable value on console or screen.

console.log(fatherName)
console.log(motherName)

console.log(fatherName, motherName)
console.log("Father Name: ", fatherName, "Mother Name: ", motherName)


//Rules to define valid variable name:
//1. Variable must start with either letter, dollar, and underscore

// var firstname
// var 1name //invalid
// var _name 
// var $name
// var %name //invalid


//2. Varibale must contain any of these or all - letters, numbers, dollars, and underscore.

// var name1
// var first_name
// var first$name
// var first@name


//3. In javascript variables are case-sensitive therefore var name is different from var Name.
// var name
// var Name

//4. In javascript it has some predefined/reserved words(keywords of js), you can not use them as a variable name
//Example: if, while, else, return, break, for, and others

// var if //invalid as this is js keyword
// var If
// var while


// Naming Convention of Variables: to make your variable name highly meaningful(Recommended.)
//Note: These naming conventions are going to apply only when you've more than one word in your variable name.

var name //naming convention not required.

//1. camelCaseNamingConvention:
var fatherName
var motherName
var myClassTeacherName
var myBestFriendName

//2. snake_case_naming_convention

var first_name
var father_name
var last_name
var my_favoriate_fruit_name
