/*
mskCard("1234567812345678")=>"************5678"

*/
function maskCard(newNumber){
//declare a result variable
var result=""
//var newNumber=number+""

//forloop
for (var index = 0; index < newNumber.length; index++) {
    //test the index 
    console.log(index,newNumber.length-4)
    if(index<newNumber.length-4){
        result+="*"
    }else{
        result+=newNumber[index]
    }
    console.log(index,result)
}
console.log(result)
}
//maskCard("1234567812345678151151517799999963")

//type string fi js is immutable /=array object are mutable
//  var str="test"
//  var str2="a"+str.slice(1)
//  console.log(str2)
// // var first = str[0]
// // console.log(first)
// // first="a"
// // console.log(str)
// // console.log(first)
// // // public String str="test"
// // //str =99 **
// var str1=str.split("")
// // console.log(str1)
// var reverse=str1.reverse()
// console.log(reverse)
// console.log(str1.join(""))

 var array=[1,2,3]
 //var extracted=array.shift()
 //console.log(array,extracted)
 var poppedItem=array.pop()
  console.log(array,poppedItem)

// array[1]=99
// console.log(array)
// console.log()

var age = 18
// ternary statement
var color = age>20?"green":"red"
//console.log(color)

//console.log(9=="9")
//console.log(9==="9")

var person={
    name:{
        first:"first",
        last:"last"
    },
    zipCode:2190
}
console.log(person.name.last)
console.log(person["name"])
console.log(Object.values(person))