//Object:
//In real world, everything is object (living objects and non-living objects):
//Every object having common things:
//1. How to look -> properties/states
//2. How to behave -> functions/behaviors/features


//Without Object: you keep both properties and behavior at different 
//place due to this there is no security of data.

//Example: Bank Application
//Account: Object
//How it looks (properties/states)-> accountHolderName/availableBalance/accountNumber

//Account properties/states:
var accountHolderName = "Prateek Shukla"
var availableBalance = 50000.00
var accountNumber = "123456"
var accountType = "Saving"


//Account Behavior/Features/functions
function depositMoney(accountNumber, money){

}
function withdrawalMoney(accountNumber, money) {

}
function checkBalance(accountNumber){

}
function accountType(accountNumber){

}

//Note: in abvoe example, you're writing both states and behavior at different 
//place but in object both things are written inside object.

//Example:

var account = {
  //states/properties(how it looks)
  accountHolderName:"Prateek Shukla",
  availableBalance:50000.00,
  accountNumber: "123456",
  accountType: "Saving",


  //behavior/functions/features:
  depositMoney:function(accountNumber, money){
  },

  withdrawalMoney: function (accountNumber, money) {
  },

  checkBalance: function (accountNumber) {

  },
  checkAccountType: function (accountNumber, money) {
  }
}


//Object: object is data structure to store data in key-value(entry) pair.
//Object is collection of entries(key-value) comma sperated.

//Declaration of object:
// var student = {}

// console.log(student)

//Initialization of object(adding entry to object):
//using following two ways:
//1. by dot notation: objecgName.keyName = value

// student.name = "Rakesh"
// student.age = 45

// //2. by square bracket notation: objectName["keyName"] = value

// student["address"] = "Noida"
// student["university"] = "GLA"

// console.log(student)


//Accessing value from object:
//using two ways: 1. dot notation, and 2. square bracket notation
//Note: dot notation is recommended approach

//using dot notation
// console.log(student.name) //Rakesh
// console.log(student.age) //Rakesh

//using square bracket notation
// console.log(student["address"])
// console.log(student["university"])


//Note: In object, keys are always unique and string format.
//Note: value can be duplicate and any data type format

// student.name = "Bhanu Priya" //updation/reassignment if already exists
// student.married = false

// console.log(student)

//Initialization at the time Declaration
var employee = {

  //states/properties
  name: "Sunil Kumar",
  department: "IT",
  designation:"Senior Software Engineer",
  salary: 125343.34,
  isMarried: true,
  address:"Delhi",

  //behaviors/functions
  printEmployeeDetails:function(){
    console.log("Printing Employee Details")
    console.log(this.name)
    console.log(this.department)
    console.log(this.designation)
    console.log(this.salary)
    console.log(this.isMarried?"Married":"Not Married")
  },

  printEmployeeSalary:function(){
    console.log("Printing employee salary")
  }
}

//console.log(employee)

// employee.printEmployeeDetails()
//employee.printEmployeeSalary()


//this keyword: it equals to current object
//within object this keyword is act like that object only 
//and used to access its properties and methods


//Nested object:

// var person = {
//   name: "Rakesh",
//   age: 45,
//   address: {
//     parmanentAddress: "Noida",
//     residentalAddress: "Delhi"
//   }
// }

// //using dot notation
// console.log(person.address.parmanentAddress)

// //using square bracket notation
// console.log(person["address"]["parmanentAddress"])

/*
WE Problem:
1. Create an object called student having name, age, univeristy, and address and print its details
2. Create such 5 object and add it to the array.
3. Run loop created array and print all student name.
*/

var student1 = {
  name:"Chaman",
  age: 23,
  university:"GLA",
  address: "Noida"
}

var student2 = {
  name: "Ronit",
  age: 23,
  university: "GLA",
  address: "Noida"
}

var student3 = {
  name: "Ayush",
  age: 23,
  university: "GLA",
  address: "Noida"
}

var student4 = {
  name: "Prateek",
  age: 23,
  university: "GLA",
  address: "Noida"
}

var student5 = {
  name: "Rahul",
  age: 23,
  university: "GLA",
  address: "Noida"
}

// console.log(student1, student2, student3, student4, student5)

var studentArr = [student1, student2, student3, student4, student5]
// console.log(studentArr)

for(var i in studentArr){
  console.log(studentArr[i].name)
}









