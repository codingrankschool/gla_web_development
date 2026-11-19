//Some built in function for math operation:
var num = 4.6764
console.log(num.toFixed(2))

//There are following maths related methods:

//1. Math.round()
var number = 4.3
console.log(Math.round(number)) //5

//2. Math.floor(): it downs the value to integer
console.log(Math.floor(number))//4

//3. Math.ceil(): it ups the value to integer
console.log(Math.ceil(number))//5


//4. Math.abs()-> positive value
console.log(Math.abs(-45))

//5. Math.sign() -> return the sign of number
console.log(Math.sign(-34)) //-1
console.log(Math.sign(34)) //1


//Other methods:
//6. Math.pow(number, power)
console.log(5 ** 2)//25
console.log(Math.pow(5, 2))//25

//6. sqrt(), cbrt()
console.log(Math.sqrt(64)) //8
console.log(Math.cbrt(125)) //5

//7. Math.max/min

console.log(Math.max(34, 23, 12)) //34
console.log(Math.min(34, 23, 12)) //12

//8. Math.random() -> it generates random value between 0 to 1
console.log(Math.random())

//How to generate value between custom range:
//Syntax: Math.random() * (max - min + 1) + min

var min = 10
var max = 100

console.log(Math.floor((Math.random() * (max - min + 1)) + min))













