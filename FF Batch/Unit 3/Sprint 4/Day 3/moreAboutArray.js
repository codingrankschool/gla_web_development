//More About Array(List in python):
//1. Array is collection/set of similar type of data at continuous memeroy location
//2. it follows zero based indexing which means first element at 0 index, second at 2 and so on.
//3. to access, insert, and update the element, you need to take help of index.

// var nums = [1,2,3,4,5,6,7,8,9]
// console.log(nums)

// console.log(nums.length) //9
// //add element: using index
// nums[nums.length] = 10

// console.log(nums)
// console.log(nums.length)

// //updation: using index
// nums[4] = 15
// console.log(nums)

//Note: don't you think above process is tds process to add, update, 
//and delete element.
//Solution: using methods/built in array methods.

//1. push(value) - it adds at last of array
// var nums = [1, 2, 3, 4, 5]
// nums.push(45)
// nums.push(46, 47)
// console.log(nums)

// //2. pop() -> it removes element from last and also return that 
// //removed element.

// var removedElement = nums.pop()
// console.log(nums)
// console.log(removedElement)

// console.log(nums.pop())//46

// //3. unshift(value) -> adds element at the biginning of the array.
// console.log(nums)
// nums.unshift(0)
// // nums.unshift(1,2,3)
// console.log(nums)

// //4. shift() -> removes from beginning of the array and returns that element.
// console.log(nums.shift())
// console.log(nums)

//5. splice(index, deleteCount, element1, element2) => it removes and add element at specific index.

var nums = [1, 2, 3, 4, 5]
console.log(nums)

//deletion:
nums.splice(1, 1)
console.log(nums)

nums.splice(1, 2)
console.log(nums)

//addition:
nums.splice(1,0, 2, 3, 4)
console.log(nums)

nums.splice(2, 0, 10)
console.log(nums)









//When to choose array?
//1. Array is best for similar type of data(homogenous data), and worst for 
//different type of data(hatrogenous data)

//Example: Similar type of data
// var names = ["Rakesh", "Chaman", "Sita", "Chintu"]
// var ages = [34, 12, 25, 27]
// var merriedStatus = [true, false, false, true]

// //WE Problem: print age of Chaman

// //Solution:
// for(var i=0;i<names.length;i++){
//   if(names[i]==="Chaman"){
//     console.log(ages[i])
//     break
//   }
// }
// //Note: in case of homogenous data you only think right the main solution.

// //Example: Different type of data
// var persons = ["Rakesh", 34, true, "Chaman", 12, false, "Sita", 25, false, "Chintu", 27, true]

// //WE Problem: print age of Chaman and make sure you're not aware about where is age, 
// //name and merried status in array.

// //Solution:
// //0. Data Analysis
// //1. Filteration(Extra Logic)
// //2. Main Logic

// //2. Array is best for searching/traversing(visiting the array elements) but 
// //array is worst for deletion and insertion at specific index.

// var numbers = [1,2,3,4,5,6,8]


