 var num =10
 var num = 20
// var old key word
// can defind a variable with old name so it's error for aour code


let number = 35
// never can defind other avriable name as number

console.log(number)

// blockscop and globalscop
// var global scop  means with in the function and let is blockscop that means with in the {}
Sample()
function Sample(){
    var i = 10

    if(i==10){
        var x = 20
        let y = 30
    }

    console.log(x)
  //  console.log(y) // error beccuas of y is blockscop stored in let 
// in case of function

function SmapleOne(){
    var i = 20
}
SmapleOne()
console.log(i)  // this i is treated as i in main function 

}
 

const // is use for store value as a constant cannot change its value
// but in case or array difind as const we can add vaule into that using push  