/*

Object? -> 
Note: 
- In this entire globe, everything is object(living and non-living).
- Every object having two things common
1 -> how they look(properties/states) => we can identify object...
2 -> how they act(functions/features) => we can identify what obeject can do.

Examples:
1. Laptop(non-living):
A. how it looks?
    1. company
    2. model
    3. ram and rom
    4. processor
    5. others

B. how it acts?
    1. coding
    2. music
    3. video
    4. capture photos
    5. vidoe calling
    6. gaming
    7. others


2. Employee(living object):
A. how it looks?
    1. employee name
    2. address
    3. designation
    4. department
    5. salary
    6. others
B. how it acts?
    1. speak
    2. walk
    3. dance
    4. learn
    5. eat
    6. others
*/


//Without Object: Account Feature

//how it looks(propeties/states):
// var accountHolderName = "Akriti"
// var accountNumber = "123456789"
// var panCard = "ATFR3422R"
// var adhaarNumber = "233433433453"
// var accountType = "Saving"
// var ifscCode = "SBIN23123D"


// //how it acts(features/behaviors):

// function depositMoney(accountNumber, money){

// }

// function withdrawalMoney(accountNumber, money){

// }

// function checkBalance(accountNumber){

// }

// function checkLoanEligibility(accountNumber){

// }

// //Note: without obejct, you're having write both state/properties and behaviors/funcitons/features at different palace that create following problems:
// //1. data is not secure
// //2. it not standard approach as well
// //3. there is no encapsulation.


// //Solution: Object -> it is a data structure which stores data in key-value(entry) pair
// //Simple term: object is collection of enteries.

// //Example: Decalartion of object:

// var student = {}
// console.log(student)

// //Initialization of object:
// //There are follwoing two ways to add data(entry) to the object.
// //1. dot notation
// //Syntax: objectName.keyName = value

// student.name = "Raghav" //{name:"Rakesh"}
// student.age = 34 //{name:"Rakesh", age: 34}
// student.skills = ["HTML", "CSS", "JS"] //{name:"Rakesh", age: 34, skills: ["HTML", "CSS", "JS"]}

// //Note: object can store different type of data.
// //Important Note 1: keys are always unique, and value can be duplicate
// //Important Note 2: keys are always in string format, and value can be any data type

// console.log(student)
// //1. square bracket notation
// //Syntax: objectName["keyName"] = value

// student["address"] = "Noida"
// student["isMarried"] = true

// console.log(student)


//Initialization at the time Declaration:

// var employee = {
//     name:"Aharshi",
//     age: 23,
//     address: "Noida",
//     university:"GLA",
//     marks: 450,
//     isHavingLaptop: true
// }


//Real Life Object:

// var account = {
//     //states/properties:
//     accountHolderName:"Chaman",
//     email:"chaman@gmail.com",
//     fatherName: "Chhota Bheem",
//     accontNumber: "4353423434",
//     ifscCode: "SBIN3423D",
//     availableBalance: 300000.00,
//     adhaarNumber:"3452345234234",
//     accountType: "Saving",



//     //behaviours/functions/features
//     printDetails: function(accountNumber){

//     },
//     depositMoney: function(accountNumber, money){

//     },
//     withdrawalMoney: function(accountNumber, money){

//     }
// }

// console.log(account)


//Decalartion/Initialization -> Done

//Accessing value from object:

// var employee = {
//     name:"Aharshi",
//     age: 23,
//     address: {
//         parmanent:"Noida Sector 122",
//         residental: "Greater Noida"
//     },
//     university:"GLA",
//     marks: 450,
//     isHavingLaptop: true
// }
// //Note: you can access value by its key.
// //1. using dot notation

// console.log(employee.name)
// console.log(employee.address)
// console.log(employee.address.parmanent)

// //2. using square bracket notation

// console.log(employee["isHavingLaptop"])
// console.log(employee["marks"])
// console.log(employee["address"]["residental"])


//Good Example 1:

// var employee = {
//     name:"Aharshi",
//     age: 23,
//     address: {
//         parmanent:"Noida Sector 122",
//         residental: "Greater Noida"
//     },
//     university:"GLA",
//     marks: 450,
//     isHavingLaptop: true
// }

// employee.name = "Sunil" //updation/changing existing name value
// employee.isDegree = true //adding

// console.log(employee)


//Good Example 2:

// var employee = {

//     //propeties/states -> how it looks
//     name:"Aharshi",
//     age: 23,
//     address: {
//         parmanent:"Noida Sector 122",
//         residental: "Greater Noida"
//     },
//     university:"GLA",
//     marks: 450,
//     isHavingLaptop: true,


//     //behaviours/features/function -> how it acts
//     printDetails: function (){
//         console.log("Printing employee details")
//         console.log(this.name)
//         console.log(this.age)
//         console.log(this.marks)
//         console.log(this.university)
//     },

//     printParmanentAddress:function(){
//         console.log("Printing Parmanent Address")
//         console.log(this.address.parmanent)
//     }
// }

// // employee.printDetails()
// // // employee.printParmanentAddress()
// // // employee["printDetails"]()


// // //Above problem you can solve using this keyword.
// // //this keyword = actual object(acts like a actual object) where you're using
// // employee.printParmanentAddress()


// //Student Task 1: given a student object print its details by loop:

// var student = {
//     name: "Kirti",
//     age: 45,
//     isMarried: true, 
//     skills: ["HTML", "CSS", "JS"]
// }

// console.log(student.skills)

// //with the help of loop: for in loop:

// for(var key in student){
//     console.log(key, student[key])
// }

// //Built in method Objects

// console.log(Object.keys(student))
// console.log(Object.values(student))
// console.log(Object.entries(student))


//Student Task 2: You have to create 5 student object and add those object to array 
// and print each object name by loop

var student1 = {
    name: "Kirti",
    age: 45,
    isMarried: true, 
    skills: ["HTML", "CSS", "JS"]
}

var student2 = {
    name: "Chaman",
    age: 23,
    isMarried: true, 
    skills: ["HTML", "CSS", "JS"]
}

var student3 = {
    name: "Kunal",
    age: 20,
    isMarried: false, 
    skills: ["HTML", "CSS", "JS"]
}

var student4 = {
    name: "Krishna",
    age: 56,
    isMarried: true, 
    skills: ["HTML", "CSS", "JS", "REACT"]
}

var student5 = {
    name: "Rishi",
    age: 17,
    isMarried: false, 
    skills: ["HTML", "CSS", "JS"]
}

var students = [student1, student2, student3, student4, student5, {
    name: "Prateek",
    age: 20,
    isMarried: false, 
    skills: ["HTML", "CSS", "JS"]
}]

//option 1
// for(var i=0;i<students.length;i++){

// }

//option 2:
for(var index in students){
    if(students[index].age > 30){
        console.log(students[index].name)
    }
}




