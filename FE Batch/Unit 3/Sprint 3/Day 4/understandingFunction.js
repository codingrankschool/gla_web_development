//Without Function?
//1. lots of duplicate code
//2. lack of reusability
//3. code looks redudant


//Function: Its a block of code related to specific functionality
//1 function = 1 task
/*
syntax:

function functionName(parameters){

  return statement
}

*/

//Application: Music Player

//1feature -> function
// function playMusic(){
//   console.log("Music started playing..")
// }

// //2feature -> function
// function pauseMusic() {
//   console.log("Music stopped playing..")
// }

// //3feature -> function
// function increaseVolume() {
//   console.log("Music increased with volume..")
// }


//Note: to execute the function, it is neccessary to call the function by name
//synatx: functionName()

// playMusic()
// increaseVolume()
// pauseMusic()

// playMusic()

//But above functions are static functions(functions are always gonna return same result here)
//Note: functions are always used to return dynamic result.


//Parameters and Arguments of function
//Parameters => these are function variables/properties

// function playMusic(music) {
//   console.log(music+" started playing..")
// }

// //2feature -> function
// function pauseMusic(music) {
//   console.log(music+" stopped playing..")
// }

// //3feature -> function
// function increaseVolume(music) {
//   console.log(music+" increased with volume..")
// }


// //Arguments: actual value/data for the function parameters
// playMusic("A music")
// playMusic("B music")

// pauseMusic("A music")


//Note: function always return something in javascript

function add(a, b){
  return a + b
}

var result = add(45, 55)
console.log(result)


/*
WE Problem: You're given numbers array please check count of evenNumbers and 
oddNumbers where to check Even and Odd numbers please create seperate function.
*/

function checkEven(number){

  //using normal approach
  // if(number%2==0){
  //   return true
  // }
  // return false


  //using ternary operator:
  //syntax: condition? true statement : false statement
  return number%2==0 ? true : false
}

function checkOdd(number) {
  return number % 2 != 0 ? true : false
}

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
var evenCount = 0, oddCount = 0

for(var i in numbers){

  if(checkEven(numbers[i])){
    evenCount++
  }

  if(checkOdd(numbers[i])){
    oddCount++
  }
}

console.log("Even Count: ", evenCount)
console.log("Odd Count: ", oddCount)

