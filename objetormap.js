var Details = {name:"bilal",age:30,place:"kozhikode"}

console.log(Details)

for(Y in Details){
console.log(Y + "=" + Details[Y])
}
 
Sample()

function Sample(){
    var Student = {name:"Amar",age:21,place:"wayanad",
    branch: function(){
     console.log(this.name)
    }}
    Student.pass = "true"  // ading properties in to objects
 console.log(Student)
}
