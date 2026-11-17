//Array: It is a data structure which is used to store mulitple same type of data at continuous memory locations.

//Declaration of Array(Creation of array):
/*
var arrayName = []
*/

var names = []
console.log(names)

//Initializaton of array
//how to store data to the array: using index
//Note: array follows zero based indexing(it means first element/item of array is at 0 index, second at 1, third at 2, and so on.)
names[0] = "Rakesh"
names[1] = "Ishan Gupta"
names[2] = "Ishan Mishra"
names[3] = "Ayush Agrawal"

console.log(names)//[ 'Rakesh', 'Ishan Gupta', 'Ishan Mishra', 'Ayush Agrawal' ]


//updating the element at index:
names[0] = "Chaman Kumar" //reassignment/updation
console.log(names)


//Accessing element array element: index

console.log(names[0]) //Chaman Kumar
console.log(names[3])
console.log(names[5]) //undefined


//How to check/count number of elements in array?
//Note: using length property

console.log(names.length)

//printing array element with loop
for(var i=0;i<names.length;i++){
    console.log(names[i])
}

//for in loop: its work of arrays, object, and string:
for(var index in names){
    console.log(index, names[index])
}
