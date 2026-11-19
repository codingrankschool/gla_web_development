//Why Array: When we have multiple data of same type then we can proceed with array.
//Array is data structure to store same type multiple data at continous memory location.

//Declaration of Array:
//syntax:

// var arrayName = []
// console.log(arrayName)


//Initialization of Array:
//Note: array follows zero based indexing, which means first element 
//start with 0 index and second at 1 and third 2 and so on.

//synatx: arrayName[index] = value

var names = []
names[0] = "Pragya"
names[1] = "Rahul"
names[2] = "Deepak"
names[3] = "Chaman"
names[4] = "Chintu"
names[5] = "Chinki"

// console.log(names)

//Accessing array elements: using index
//Syntax: arrayName[index]

// console.log(names[5]) //Chinki
// console.log(names[3]) //Chaman
// console.log(names[10]) //undefined


//How to know number of elements/items in array:
//using length property

console.log(names.length)

//print array element using loop:

for(var i=0;i<names.length;i++){
  console.log(names[i])
}


