//Single line comment
/*
This is

multi 
line

comments
*/


//Variables:  Its like a container which is used to store value(text type(string)/number/boolean).


//Declaration of variable(Creation of variable)

//syntax
//var variable_name:
//Why need variable name? - to access and modify the value inside that variable.


//single variable declaration
// var name
// var age
// var isMarried

//mutliple variables decration
// var num1, num2, num3 


//Initialization of variables(Adding value to variables)


// name = "Rakesh" 
// age = 45
// isMarried = true

// num1 = 45
// num3 = 46
// num3 = 48


//Initialization at the time of Declaration

// var universityName = "GLA Univeristy"
// var num4 = 50, num5 = 51, num6 = 52


//More about variable:

var studentName = "Rishabh Sharma"

//how to print value of variable
//console.log(variable_name)this is like a tool to print variable value on console.

console.log(studentName)


/*
Rules of variables:
-------------------
*/

//1. Variable must start with under_score, dollar, and letters
// var _name
// var firstname
// var 1name
// var $name
// var @secondname

//2. Variable can contain letters, numbers, dollar, and underscore.

// var my1name
// var my_name
// var his$name
// var name@

//3. In javascript, variables are case-sensitivie its means var name is different from var Name

// var name
// var Name
//Note: above two variable will contain differnt location/address in the memory.

//4. Javascript has reserved some predefined words(keywords) already so you can't use them as variable name
//Example: if, for, while, return, break, others

//var if //invalid variable name as it is predefined word that is reserved by javascript itself.
// var If //valid
// var while //invalid


//Variable naming convention?
/*
Note: its applicable only when you've more than one word in your variable.

There are two types of naming conventions:
1. camelCaseNamingConvention

var fatherName
var myClassTeacherName
var employeeDepartmentName

2. snake_case_naming_convention
var father_name
var my_class_teacher_name
var employee_department_name
*/