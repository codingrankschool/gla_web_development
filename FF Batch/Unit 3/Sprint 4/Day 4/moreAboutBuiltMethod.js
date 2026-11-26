//Some Built in Methods:
//Discussed methods: push/pop/shift/unshift/splice


//slice(startIndex, endIndex) => subArray(part of original array in continous manner)
var nums = [1,2,3,4,5]
//[1]
//[1,2,3]
//[1,3,5]

console.log(nums.slice(1)) //[2,3,4,5]
console.log(nums.slice(2, 3)) //[3]

// for(var i=2; i<3; i++){
//   console.log(nums[i])
// }

//Note: splice changes the original array whereas slice deson't do this 
//it always returns new array.

//includes(value) -> it checks particular element is present in the arrya or not(boolean-true/false)
var names = ["Palak", "Palak", "Palak", "Pulkit"]

var result = names.includes("palak")
console.log(result)

console.log(names.includes("Pushpa"))

//indexOf(element) -> it returns index of particular element in array(first occuring element index)

console.log(names.indexOf("Palak"))

//lastIndexOf(value) -> from last first matching element index. 
console.log(names.lastIndexOf("Chintu"))













