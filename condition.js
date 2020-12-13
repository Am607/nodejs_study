var r=require('readline-sync')

num1=r.question('Enter 2 numbers')
num2=r.question('')


if(num1>num2){
    console.log("larger is " + num1)

}
else if(num1===num2){
    console.log("numbers are equal")
}else{
    console.log("largher is "+ num2)
}