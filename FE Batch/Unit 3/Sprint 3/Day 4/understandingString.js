//String: set/collection of characters(letter, special symbol, numbers and other) 
//enclosed with double("") or single('') quotation mark


// var name = "Rakesh Kumar"
// var adhaarNumber = "3423233324323"
// var panCardNumber = "ATRF3432D"
// var email = "chaman@gmail.com"
// var address = "Sector 122 Delhi"
// var favoriateLetter = 'a'
// console.log(name, adhaarNumber, panCardNumber, email, address, favoriateLetter)
// console.log(typeof name, typeof favoriateLetter)

//Note: String also follows indexing, it means first letter in string starts at 0, 
//second at 1, third at 2, and so on.

// var str = "Hello"
// console.log(str)
// console.log(str[0])
// console.log(str.length)


// for(var i=0;i<str.length;i++){
//   console.log(str[i])
// }

//Note: Unlike array, string is immutable(unchangable) but array is mutable(changable).
//Meaning: you can update the element value inside array not inside string.


//Why String is Immutable?=

// var name = "Rakesh Kumar"
// var adhaarNumber = "3423233324323"
// var panCardNumber = "ATRF3432D"
// var email = "chaman@gmail.com"
// var password = "Chaman@123"
// var accountNumber = "12141241312"
// var upiPin = "3423"
// var address = "Sector 122 Delhi"

//Thumb rules(What comes as string): a data which doesn't participate in 
//arithmetic operations that datat always comes as string.

//Immutable? -> in almost all applications 90 to 95% data is in the format of strin and all those 
//data are very important therfore as a developer its our responosibility to keep the data immutable.


// var arr = ["H", "e", "l", "l", "o"]

// console.log(arr[0]) //H
// arr[0] = "T"
// console.log(arr) //["T", "e", "l", "l", "o"]

// //Example:
// var str = "Hello"
// console.log(str[0]) //H

// str[0] = "T" //because string is immutable

// console.log(str) //Hello

/*
WE Problem: given str as Hello change it Tello
*/

// var str = "Hello"
// //output = Tello

// var arrStr = str.split("")
// console.log(arrStr)

// arrStr[0] = "T"

// var result = arrStr.join("")
// console.log("Requied String: ",result)
// console.log("Original String: ", str)

// //Note: when you change string then it returns another string from as it is not mutable.

// console.log(str)//Hello
// str = "Rakesh" //reassignment/replace the entire string
// console.log(str)//Rakesh

/*
WE Problem: given a string in small case, your task is to convert it to upper case
str = "hello"
output: HELLO

Note: don't use any string built in method.
*/

//Solution:
// var str = "hello"

// var smallCaseLetter = "abcdefghijklmnopqrstuvwxyz"
// var capitalCaseLetter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
// var bag = ""

// for(var i=0;i<str.length;i++){
  
//   for(var j=0;j<smallCaseLetter.length;j++){
//     if(str[i]==smallCaseLetter[j]){
//         bag+=capitalCaseLetter[j]
//         break
//     }
//   }

// }

// console.log(bag)

//Important Notes: Whatever built in methods, I'm gonna tell you below please implement 
//functionality of those method yourself.

//There are lots of built in methods in string

// var str = "Hello World"
//1. toUpperCase()/toLowerCase()
// var newStr = str.toUpperCase()
// console.log(str)
// console.log(newStr)

// console.log(str.toLowerCase())

// //WE Problem: you're given an array of names convert all the names of array to upper case.

// var names = ["Chinki", "Chintu", "Chaman", "Raman"]
// for(var i=0;i<names.length;i++){
//   names[i] = names[i].toUpperCase()
// }

// console.log(names)

//2. charAt() -> it returns chracter at index
var str = "Hello World"

console.log(str.charAt(0))
console.log(str.charAt(15))

//3. endsWith() /startsWith() => boolean value(true/false)

console.log(str.startsWith("Hello")) //true
console.log(str.startsWith("ello")) //false

console.log(str.endsWith("World")) //true
console.log(str.endsWith("ld")) //true
console.log(str.endsWith("rl")) //false


//4. concat: it merges two or more string together.

// var str1 = "Hello", str2 = "World", str3 = "!"
// var result = str1.concat(" ",str2,str3)
// console.log(result)

//5.  includes()
var str = "rakesh"
console.log(str.includes("a")) //true
console.log(str.includes("ess")) //false

//WE Problem: Again given array of names print those name which starting with a vowel
//Addition to above problems: print those who are having a vowel.


var names = ["aman", "chintu", "chaman", "usman"]

//for in loop:

// for(var i in names){
//   if(names[i].startsWith('a')){
//     console.log(names[i])
//   }
// }

// for (var i in names) {
//   if (names[i].includes('a')) {
//     console.log(names[i])
//   }
// }

//6. substring()

// var str = "Hello World!"
// console.log(str.substring(0, 5)) //Hello


//7. trim()/trimStart()/trimEnd() -> it removes space from beginning and ending of the string

var str = "    hello      "
console.log(str.length) //15
var newStr = str.trim()
console.log(newStr.length) //5


//8. replace
var str = "Hello World"
console.log(str.replace("World", "Students"))

//9. split(separator): convert string into array.







































