
num = 10

function functionOne(){
   num =20
    function functionTwo(){
      var  num = 30
      console.log(num)
    }
    functionTwo()
}
 functionOne()
console.log(num)