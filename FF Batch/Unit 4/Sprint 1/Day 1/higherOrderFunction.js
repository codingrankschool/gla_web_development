//Higher Order Function?

//How many ways you can create function?

//Normal Way:

// function greeting(msg){
//     console.log(msg, "from normal function")
// }


// //calling the greeting fuction with different arguments for msg parameters
// greeting("Welcome to GLA University")
// greeting("Welcome to Chitkara University")

//2. Anonymous Function(Function without Name) - function expression

// var welcome = function(msg){
//     console.log(msg, "from anonymous function")
// }

// welcome("Welcome to GLA University")
// welcome("Welcome to Chitkara University")

//Note 1: Function can accept another function as an argument

// function welcomeStudent(name){
//     console.log(name() +" Welcome to University")
// }


// function nameGiver(){
//     return "Akriti"
// }

// var chintuFunction = function(){
//     return "Chintu"
// }

// welcomeStudent(nameGiver)
// welcomeStudent(function(){
//     return "Pushpa"
// })

// welcomeStudent(chintuFunction)
//nameGiver is callback function - functions which are being sent to another function in uninvocked(uncalled) condition as an argument.



//Note 2: Function can also return another function as well.

function giveMePizza(){
    return function(){
        console.log("Please order pizza")
    }
}

var fun = giveMePizza()
fun()

//Higher Order Function:
//Which can accept another function as an argument and also return as well.

//In javascript, we have following important arrays higher order function.
//1. map(callback)
//2. filter(callback)
//3. forEach(callback)
//4. reduce(callback)
//others


//1. map(callback) => It transform/modified the array elements and retuns always same size of array.

// var nums = [1,2,3,4,5]
// //Task: convert above numbers to square and collect those in new array.

// //Without HOF:
// var newArr = []
// for(var i=0;i<nums.length;i++){
//     newArr.push(nums[i]**2)
// }
// console.log(newArr)

// var makeSquare = function(num){
//     return num**2
// }

// //Using map higher order function:
// // var squareArr = nums.map(function(num){
// //     return num**2
// // })

// var squareArr = nums.map(makeSquare)
// console.log(squareArr)

var nums = [1,2,3,4,5]
//Your Task: make only even number square and keep odd as it is and return new array.

var evenSquareArr = nums.map(function(number){
    if(number%2==0){
        return number**2
    }
    return number
})
console.log(evenSquareArr) //[1,4,3,16,5]

var employees = [
    {
        name: "Chaman Singh",
        salary: 45000,
        deparment: "IT"
    },
    {
        name: "Prateek Singh",
        salary: 15000,
        deparment: "Sales"
    },
    {
        name: "Aharshi",
        salary: 100000,
        deparment: "IT"
    },
    {
        name: "Kunal",
        salary: 50000,
        deparment: "Marketing"
    }
]

//Student Task(WE): increase the salary of IT employee by 20k

// var updatedEmployees = employees.map(function(employee){
//     if(employee.deparment=="IT"){
//         // employee.salary = employee.salary + 20000
//         employee.salary+=20000
//         return employee
//     }

//     return employee
// })

// console.log(updatedEmployees)

// //2. filter(callback) => it filters the array element based on condition and return array according to matched condtion.
// var cities = ["Noida", "Delhi", "Haryana", "Himachal Pradesh"]

// var filteredCity = cities.filter(function(city, index){
//     if(city.startsWith("H")){
//         return city
//     }
// })

// console.log(filteredCity)

// var employeeWithSalesDepartment = employees.filter(function(employee){
//     if(employee.deparment == "Sales"){
//         return employee
//     }
// })

// console.log(employeeWithSalesDepartment)

// //3. forEach(shortcut of loop) -> it doesn't return anything, it just prcesses the array element.
// //printing, process

// // employees.forEach(function(employee){
// //     // console.log(employee.name.toUpperCase())
// //     // console.log(employee.name)

// //     if(employee.deparment =="IT" && employee.salary > 50000){
// //         console.log(employee.name)
// //     }
// // })

// //4. reduce(callback, initialValue) => It reduces array element to one value
// //total sum,and merging the elements, and others

// var nums = [1,2,3,4,5]
// var total = nums.reduce(function(sum, number){
//     return sum + number
// }, 0)

// console.log(total)

// //product:

// var product = nums.reduce(function(sum, number){
//     return sum * number
// }, 1)

// console.log(product)


// var bag = nums.reduce(function(sum, number){
//     return sum + number+" "
// }, "")

// console.log(bag)

//Good Example: Given list of employees, increase their salary by 10k and find out total salary of IT department.

//filter
var itDepartmentEmployees = employees.filter(function(employee){
    if(employee.deparment == "IT"){
        return employee
    }
})

//map
var allITEmployeeWith10kIncrement = itDepartmentEmployees.map(function(employee){
    employee.salary+=10000
    return employee
})

//reduce
var totalOfItDepartment = allITEmployeeWith10kIncrement.reduce(function(total, employee){
    return total + employee.salary
}, 0)

console.log(totalOfItDepartment) //165000

//All at once
console.log(employees)
var finalTotal = employees.filter(function(employee){
    if(employee.deparment == "IT"){
        return employee
    }
}).map(function(employee){
    employee.salary+=10000
    return employee
}).reduce(function(total, employee){
    return total + employee.salary
}, 0)

console.log(finalTotal)




