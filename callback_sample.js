// synchronous and asynchronous
// synchronus means one by one one finish => sencond start and finsh => third start 
// asynchronous means all work together

var dt =  new Date()

console.log("Hello world")

for(i = 0; i < 100; i++){
    console.log("Hello Bilal")

}
console.log("end")
var Diff = new Date()-dt // out put in ml second

console.log(Diff)


function longtask(milliSecondTime){
    dt = new Date()
    while((diff = new Date()-dt)<= milliSecondTime){}
    }



// synchrounous ex
/*
console.log("Started")

longtask(1000)
console.log("End")

console.log("Started")
longtask(1000)
console.log("End")

console.log("Started")
longtask(1000)
console.log("End")  
*/
// asynchronous EX

function showEnd(){
    console.log("End")
}
//1
console.log("Started")
setTimeout(showEnd, 2000)
// 2
console.log("Started")
setTimeout(showEnd, 2000) // no need of long task
//3
console.log("Started")
setTimeout(showEnd, 2000)