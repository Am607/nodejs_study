function Student(name, Division, place){
 this.name = name
 this.Division = Division
 this.place = place
 this.details=function (){
     console.log("name: "+ this.name +" Division: "+ this.Division + "place: "+ this.place)  
 }

}
 // obect making
var mishab=new Student("Mishab","IX - A"," tirur")
var misbah=new Student("Misbah", "IX-b"," calicut")

mishab.details()
misbah.details()