//More About Array:
//1. Array is best of similar type of data(homogenous), and its not good for different type of 
//data (hatrogenous)

//Homogenous Data(Same type of data)
// var names = ["Rakesh", "Sunil", "Raghav", "Prateek"]
// var ages = [34, 23, 12, 56]
// var isMarried = [true, false, false, true]


// /*
// WE Problem: Tell me the age of Raghav?
// */

// for(var i=0;i<names.length;i++){
//   if(names[i]=="Raghav"){
//     console.log(ages[i])
//     break
//   }
// }

// //Hatrogenous Data(Different Type of data)
// var persons = ["Rakesh", 34, true, "Sunil", 23, false, "Prateek", 56, true]
// //WE Problem: Tell me the age of Raghav?
// //Note: what if you're not aware about names, age, and other fields of person in the 
// //array, then following problems are going to come
// //1. Filteration of data
// //2. go for the main problem
// //3. actula data you're able to find out.


// //2. Array is best of searching(traversing - visiting elements of the array)
// //3. Array is worst for deleting and adding element in the array (specially at any index).
// // var users = ["Sukhpreet", "Prateek", "Prohit", "Mansi"]
// //Because: when you delete and add element at specific index then lots of shifting happens


// //Inbuilt methods of arrays:
// //1. push(value) => add in the last of the array

// var nums = [1, 2, 3, 4, 5]
// nums[5] = 6
// nums.push(7)

// console.log(nums)

// //2. pop() -> removes element at last and return that element as well.

// console.log(nums.pop())
// console.log(nums)


// //3. unshift(value) -> add element in the beginning of the array
// nums.unshift(0)
// console.log(nums)


// //4. shift() -> removes from the beginning and also returns that element
// console.log(nums.shift())
// console.log(nums)

// //5. splice(start, deleteCount, elementToAdd)

// nums.splice(0, 1)
// console.log(nums)

// nums.splice(3, 2)
// console.log(nums)

// nums.splice(0, 0, 1)
// console.log(nums)

// nums.splice(1, 0, 11, 12)
// console.log(nums)

// //Other Methods:

// //5. slice(startIndex, lastIndex + 1) -> used to find sub array.
// var users = ["Sukhpreet", "Prateek", "Prohit", "Mansi", "Sukhpreet"]
// var subArray1 = users.slice(0, 2)
// console.log(subArray1)

// //6. includes() -> find particular element is part of the array or not -> boolean value
// console.log(users.includes("Prateek"))
// console.log(users.includes("Rahul"))


// //7. indexOf() -> returns index of first matching element.

// console.log(users.indexOf("Sukhpreet"))

// //8. lastIndexOf()
// console.log(users.lastIndexOf("Sukhpreet"))


//9. join() -> to convert array into string
var users = ["Sukhpreet", "Prateek", "Prohit", "Mansi"]
var str = users.join(" ")
console.log(str)

var str2 = users.join(",")

console.log(str2)


//10. string(split(separtor)): convert string to array.
var arr = str2.split(",")
console.log(arr)


//2D Array: collection of 1d array

var numbers = [
              [1, 2, 3], 
              [4, 5, 6], 
              [7, 8, 9]
              ]


//find number of rows:
console.log(numbers.length) //3

//find number of columns:
console.log(numbers[0].length) //3

console.log(numbers[1][1]) //5
console.log(numbers[1][2]) //6

// for(var row = 0; row < numbers.length; row++){

//     for(var column = 0; column<numbers[row].length; column++){
//       console.log(numbers[row][column])
//     }

// }


//i want in tabular format:
for (var row = 0; row < numbers.length; row++) {
  var bag = ""
  for (var column = 0; column < numbers[row].length; column++) {
    bag+=numbers[row][column]+" "
  }
  console.log(bag)


}


var numbers = [
  [1],
  [4, 5],
  [7, 8, 9]
]








