//String: Set/Collection of characters(letter, numbers, special symbols, other) enclosed with double(" "), single('') and backtick

// var name = "Rakesh Kumar"
// var email = "rakesh@gmail.com"
// var accountNumber = "12131212121"
// var favoriateLetter = 'r'
// var upiPin = "3422"
// var address = "Noida Sector 73"
// var adhaarNumber = "12342231234323431"
// var panCard = "ATF4534D"


// //Note 1: Like array string also follows zero based indexing, it means first character of string at 
// //0 and second at 1 and so on.

// // var str = "Hello"
// // console.log(str)
// // console.log(str[0]) //H
// // console.log(str[3]) //l

// // var newStr = ""
// // for(var i=0;i<str.length;i++){
// //   console.log(str[i])
// //   newStr += str[i]
// // }

// // console.log(newStr)


// //2. String in javascript is immutable(unchangable -> you can not update its characters) but entire string is repalcable

// var str = "Hello"
// str[0] = "T"

// console.log(str) //Hello

// //Why: Immutable

// str = "Deepak" //reassignment/replacement of entire string with another.
// console.log(str)

// //Note: array is mutable(changable)
// var names = ["Rakesh", "Pragya"]
// names[0] = "Tushar"
// console.log(names)

// //Why String is Immutable? -

// var name = "Rakesh Kumar"
// var email = "rakesh@gmail.com"
// var accountNumber = "12131212121"
// var favoriateLetter = 'r'
// var upiPin = "3422"
// var address = "Noida Sector 73"
// var adhaarNumber = "12342231234323431"
// var panCard = "ATF4534D"


// //Note: in almost every application we have 90 to 95% data in string format and those 
// //data are containing highly secure data.

// //Note: strings are always comparable they don't participate in any mathematical calculation.


// //WE Problem: given a string in small case convert it to uppercase without using any built in method.

// var str = "hello"
// //output: HELLO

// var smallLetter = "abcdefghijklmnopqrstuvwxyz"
// var capitalLetter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

// var bag = ""
// for(var i=0;i<str.length;i++){

//   for(var j=0;j<smallLetter.length;j++){
//     if (str[i] === smallLetter[j]){
//       bag+=capitalLetter[j]
//       break
//     }
//   }

// }

// console.log(bag)
// console.log(str)


//Above task you can do with the help of built in methods as well.

//1. toUpperCase()/toLowerCase()

var str = "hello"
var newStr = str.toUpperCase()//HELLO
console.log(newStr)
console.log(str)
console.log(str.toLowerCase())


//2. startsWith/endsWith() => boolean(true/false)
var str = "Hello World"
console.log(str.startsWith("Hello"))//true
console.log(str.startsWith("ello"))//false

console.log(str.endsWith("World")) //true
console.log(str.endsWith("Worl")) //false


//WE Problem:
//give names array find out those are string with A
var names = ["Amlesh", "Ample", "Temple", "Cat"]

for(var i in names){
  if(names[i].startsWith("A")){
    console.log(names[i])
  }
}


//3. trim()/trimEnds()/trimStart() -> it removes white spaces from back and front of the string

var str = "   hello world     "
console.log(str.length)
var newStr = str.trim()
console.log(newStr.length)

//3. split(separator) -> converts to array

var str = "hello world"

var newArr = str.split(" ")
console.log(newArr)

//4. substring(startIndex, endIndex)
console.log(str.substring(1))
console.log(str.substring(0, 5))

//4. join(separator): convert array to string

var names = ["A", "B", "C"]
console.log(names.join(" "))


