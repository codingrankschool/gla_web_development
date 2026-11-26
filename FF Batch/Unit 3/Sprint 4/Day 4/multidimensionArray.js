//There are following types of array in javascript:
//1D array
//2D array -> its collection of 1d array

var arr1 = [[], [], []] //1d array example

//3D array -> its collection of 2 array
var arr2 = [[[], [], []], [[], [], []]]

//Note: In most of the application as a web developer, we're only gonna use much 2d array.
//2d Array: Here elements are stored in tabular format(rows and columns)
//Real Life Example of 2D Array: 
//1. threater sitting arrangement 
//2. gaming(Soduku/Chess/others)
//3. Others


//Examples:
// var nums = [
//   [1, 2, 3], 
//   [4, 5, 6], 
//   [7, 8, 9]
//   ]

// //How to access element from 2d array?
// //You need to know its row and coumn and follow following syntax:
// //arraName[row][column]

// //to access 8:
// console.log(nums[2][1])

// //to access 6:
// console.log(nums[1][2])

// //if want to access 2d array element using loop:
// //count of rows and count of column number?

// //number of rows?
// console.log(nums.length) //3

// //number of columns:
// console.log(nums[0].length) //3


// for(var row=0;row<nums.length;row++){

//   var bag = ""
//   for(var column = 0; column<nums[row].length;column++){
//     // console.log(nums[row][column])
//     bag += nums[row][column]+" "
//   }

//   console.log(bag)

// }


//WE Problem: print the sum of each row in the given 2d array.


var nums = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]


// for(var row=0;row<nums.length;row++){

//   var sum = 0
//   for(var column = 0; column<nums[row].length;column++){
//     // console.log(nums[row][column])
//     sum += nums[row][column]
//   }

//   console.log(sum)

// }


var nums = [
  [1],
  [4, 5, 6],
  [7, 9]
]

for (var row = 0; row < nums.length; row++) {

  var sum = 0
  for (var column = 0; column < nums[row].length; column++) {
    // console.log(nums[row][column])
    sum += nums[row][column]
  }

  console.log(sum)

}








