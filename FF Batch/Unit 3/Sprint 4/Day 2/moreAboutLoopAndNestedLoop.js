//More about loop:
//while/do while loop: => iterations => unknown
//for loop: => iterations => known

//Important pointers for for loop:

//general example 1:
// for(var i = 1;i <= 10;i++){
//   console.log(i, "Hello")
// }

//Good example version 1:
// for(var i=1, j=2; i <= 10 && j <= 5; i++, j++){
//     console.log(i, j)
// }


//Good example version 2:
// for (var i = 1, j = 2; i <= 10 && j <= 5; i+=2, j++) {
//   console.log(i, j)
// }

//Good example version 3: - infinite for loop
// for (;;) {
//   console.log("hello")
// }


//Nested Loop: Loop inside Loop 
//When/Why? => When outer loop each iteration/round connected/depedent on 
//set of iterations/rounds of inner loop.


/*
Father and Son Analogy:
Father => 50 years old
Son => 25 years old


Father 1:
1 2 3 4 5
Father 2:
1 2 3 4 5
Father 3:
1 2 3 4 5
Father 4:
1 2 3 4 5


nested loop syntax:

//outer loop
for(){
  
  //inner loop
  for(){
  }
}
*/


/*
Father 1:
1 2 3 4 5
Father 2:
1 2 3 4 5
Father 3:
1 2 3 4 5
Father 4:
1 2 3 4 5
*/

//outer loop:
// for(var father = 1; father <= 4; father++){
//     console.log("Father", father+":")

//     var bag = ""
//     //inner loop:
//     for(var son = 1; son<=5; son++){
//       bag+=son+" "
//     }
//     console.log(bag)

// }

//WE Problems:
/*
1 2 3 4 5
1 2 3 4 5
1 2 3 4 5
1 2 3 4 5

pattern printing: 
outer loop: rows
inner loop: columns
*/

//outer loop: rows
// for (var father = 1; father <= 4; father++) {

//   var bag = ""
//   //inner loop: columns
//   for (var son = 1; son <= 5; son++) {
//     bag += son + " "
//   }
//   console.log(bag)

// }


/*
* * * * *
* * * * *
* * * * *
* * * * *
* * * * *
*/

// for (var father = 1; father <= 5; father++) {

//   var bag = ""
//   //inner loop: columns
//   for (var son = 1; son <= 5; son++) {
//     bag +="* "
//   }
//   console.log(bag)

// }

/*
1
1 2
1 2 3
1 2 3 4
1 2 3 4 5
*/

// for (var father = 1; father <= 5; father++) {

//   var bag = ""
//   //inner loop: columns
//   for (var son = 1; son <= father; son++) {
//     bag += son+" "
//   }
//   console.log(bag)

// }

/*
1
2 2
3 3 3
4 4 4 4
5 5 5 5 5
*/

for (var father = 1; father <= 5; father++) {

  var bag = ""
  //inner loop: columns
  for (var son = 1; son <= father; son++) {
    bag += father + " "
  }
  console.log(bag)

}








