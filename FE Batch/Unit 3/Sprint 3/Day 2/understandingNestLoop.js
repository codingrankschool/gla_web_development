//basic version of for loop:
// for(var i=1; i<=10;i++){
//     console.log(i)
// }

//good version 1: infinite for loop
// var count = 0

// for(;;){
//     count++
//     console.log("hi", count)
// }


//good version 2:
// for(var i= 1, j=2; i<=10 && j<=5; i++, j++){
//     console.log(i,j)
// }

/*
output:
1 2
2 3
3 4
4 5

*/


//good version: 3
// for(var i= 1, j=2; i<=10 && j<=5; i+=2, j++){
//     console.log(i,j)
// }

/*
1 2
3 3
5 4
7 5
*/

//Nested Loop:Loop inside loop => nested loop
//When/Why => when outer loop iteration/round is 
// connected to set of iterations/rounds of inner loop


/*
Father and Son Analogy:
Father: 50 years old
Son: 25 years old
Father 1: 1 2 3 4 5
Father 2: 1 2 3 4 5
Father 3: 1 2 3 4 5
Father 4: 1 2 3 4 5

*/


//outer loop: 4 times
// for(var father = 1;father<=4;father++){
    
//     var bag = ""
//     //inner loop
//     for(var son=1;son<=5;son++){
//         bag+=son+" "
//     }
//     console.log("Father", father,":",bag)

// }

/*
1 2 3 4 5
1 2 3 4 5
1 2 3 4 5
1 2 3 4 5

Note: above example is kind of pattern which you can print by keeping following things in mind:

outer loop: rows
inner loop: columns

*/

// //outer loop: rows
// for(var father = 1;father<=4;father++){
    
//     var bag = ""
//     //inner loop: columns
//     for(var son=1;son<=5;son++){
//         bag+=son+" "
//     }
//     console.log(bag)

// }

/*

* * * * *
* * * * *
* * * * * 
* * * * *
* * * * *

*/


//outer loop: rows
// for(var father = 1;father<=5;father++){
    
//     var bag = ""
//     //inner loop: columns
//     for(var son=1;son<=5;son++){
//         bag+="* "
//     }
//     console.log(bag)

// }


/*

1
1 2
1 2 3
1 2 3 4
1 2 3 4 5

*/

// //outer loop: rows
// for(var father = 1;father<=5;father++){
    
//     var bag = ""
//     //inner loop: columns
//     for(var son=1;son<=father;son++){
//         bag+="* "
//     }
//     console.log(bag)

// }


//Note: above nested loop is gonna useful in multidimensional array.
