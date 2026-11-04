//Comparison Operators: To compare two values and it always returns/gives boolean value 
// as a result

/*
There are following types of comparison operators

//Comaprisons
1. > (greater than)
2. >= (greater than or equal to)
3. < (less than)
4. <= (less than or equal to)

//Relations(equality operators)
5. == (double equal)
6. != (not equal to)

7. ===(triple equal to)
8. !==(not double equal)

*/

//greater and greater or equal to
console.log(45 > 23) //true
console.log(45 > 73) //false
console.log(45 > 45) //false
console.log(45 >= 45) //true


//less than and less than or equal to
console.log(45 < 23) //false
console.log(45 < 73) //true
console.log(45 < 45) //false
console.log(45 <= 45) //true

console.log("-------------------------------")

//Note: >, >=, <, <= are useful for numeric type of data

//Equality operators:
//Note: ==, !=, ===, !== are useful for anytype of data
console.log(45 == 45) //true
console.log("Seema" == "Reema") //false
console.log("Name" == "name") //false

console.log(1 == true) //true
console.log(0 == false) //true

console.log(45 != 45) //false
console.log(45 != 46) //true


console.log("45" == 45) //true
console.log(true == 1) //true
console.log("45t" == 45) //false
//why true, because ==, and != by default follow implicit conversion


//to stop above behavior, we have ===, and != operators -> 
// they stictly compares two values, they check both data and 
// data type

console.log("45" === 45) //false
console.log("45" === "45") //true
console.log(45 === 45) //true

console.log(45 !== 43)//true
