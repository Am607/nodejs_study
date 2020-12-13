 class Base{
     baseConstructor(){
         console.log("this is from base Classs")
     }
 }
 
 
 
 
 
 
 
 class  Sum extends Base {
     constructor(numa,numb){
         super()
         this.num1 = numa
         this.num2 = numa
     }

     helloworld(){
         console.log("hello friends the sum is " +(this.num1 + this.num2))
     }

 }


 let firstObjecct = new Sum(20, 30)
 firstObjecct.helloworld()
 firstObjecct.baseConstructor()