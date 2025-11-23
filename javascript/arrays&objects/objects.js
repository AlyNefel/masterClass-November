// object : a set of key & values / name:"Test" /phoneNumber:

// var person=[
//     "P1",
//     25,
//     "Ariana"
// ]

//object
var object1={
    name:"kevin",
    age:25,
    age:50,
    city:"Ariana",
    favouriteSongs:["song1","song2"],
    isStudent:true,
    address:{
        zipCode:2190,
        streetName:"Farabi"
    }
}
console.log(object1)
//how access a value inside an object => ObjectName.name
console.log(object1.name,object1.age)
var extractedZip=object1.address.zipCode
console.log(extractedZip)
var song2Extracted=object1.favouriteSongs[1]
console.log(song2Extracted)
console.log(object1["isStudent"]) // object1.isStudent
console.log(object1)
// how to change value in object
object1.age=30
// object1.favouriteSongs="changed"
object1.favouriteSongs.push("song3")

//how to add new key to an object
object1.job="Developer"
console.log(object1)

var employee1={
    name:"emp1",
    position:"Manager",
    salary:2000,
    address:{
        zipCode:2190,
        streetName:"Farabi"
    }
}

var employee2={
    name:"emp2",
    position:"Developer",
    salary:5000,
    address:{
        zipCode:2083,
        streetName:"Ghazela"
    }
}

var employees = [employee1,employee2]
console.log(employees)

// i want to add xxx $ for each employee salary
 // function : 
 function addSalary(array,amount){

     // params : aya 7aja tetbadel men user l user wa9t li y7eb ya3mel invoke function : param1 : array of employees(type of arrays element : object), / param2: amount 

     //for loop 
     //edge cases
if(!array.length){
    console.log("You don't have employees yet !!")
    return
}
if(!amount || typeof amount !=="number"){
    console.log("Check the amount !!")
    return
}
     for (var i = 0; i < array.length; i++) {
         // array[i]= of type object =>object.salary ==array[i].salary+=amount
        var employee = array[i]
        employee.salary+=amount // employee.salary=employee.salary+amount
        
     }
       // kemlet
  //return / log(array)
  console.log(array)
 }

 addSalary(employees,200)
 addSalary([],200)

var newEmployees=[]
// enhanced for loop
for(var employee of employees){ 
    // var employee = employees[i] 
    newEmployees.push(
        {nameNinja:employee.name,
        positionNinja:employee.position}
    )
}
console.log(newEmployees)