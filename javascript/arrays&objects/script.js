//Array 
// a way to store multiple variables in one place 
var fruits=["orange","apple","banana",55,[1,2,3]]

// how to get the array's length
var lengthFruits = fruits.length

console.log(lengthFruits)

//1-extract / display value inside the array ("Apple")
var extractedValue=fruits[1]
console.log(extractedValue)

//2- extract nested value 
var innerArray=fruits[4] // value :var innerArray =  [1,2,3]
console.log(fruits[4])

var extract2 =innerArray[1] // extracted2 = 2

console.log(extract2)
var inline=fruits[4][1] // inline = fruits[4] =>[1,2,3][1] => 2

console.log(inline)
//var fruits=["orange","apple","banana",55,[1,2,3]]

// iteration or loop through an array 
for(var i=0;i<fruits.length;i++ ){
//console.log("*****-index = " +i)
console.log("****-element of array index :"+i+" " +fruits[i])
}

// chnage the value on a given index 
// fruits=["orange","apple","banana",55,10]
fruits[4]=10
console.log(fruits)


//how to add an element at the end of an array (fruits=["orange","apple","banana",55,10,"Della3"])
fruits.push("Della3","another fruit")
console.log(fruits)

// how to add an element at the begining of the array 
fruits.unshift("Strawberry") //
console.log(fruits)

//how to add an element in a giving index 
//array.splice(index,0,newElement)
fruits.splice(3,0,99)
console.log(fruits)

// how to remove / devare an element with it"s index
//array.splice(indexStart,numberOfElements)
fruits.splice(fruits.length-1,1)
console.log(fruits)

// var lastElement = fruits.shift()
// console.log(lastElement)

var note =[17,16,20,19,18]
// use for loop to add +2 to every element in note array note=[19,18,22,21,20]

for(var i=0;i<note.length;i++ ){

// kol element of the array bech nzidou +2
  // counter i for loop houa l'index kol marra 
  //condition ken note[i] ==19
  if(note[i]==19){
    note[i]+=1
  }
  //condition ken note[i] == 20
  else if(note[i]==20){
 note[i]+=0
  }
  // general case
else {note[i]+=2 // note[i] = note[i] +2 
}

}
// edge case : 20 ! // 19 +1  
console.log(note) //[19,18,22,21,20]
var note1=[17,16,19,20,18]
for (var index = 0; index < note.length; index++) {
    if(note1[index]+2 >=20){
        note1[index]=20
    } else{
        note1[index]+=2
    }
    
}
console.log(note1)

// concat two arrays 
var array1=["test",5,7] //array1.push(array2[0]) 
var array2=["concat",88,99]
// ["test",5,7,"concat",88,99]
// var combinedArray = array1.concat(array2)
// console.log(combinedArray)
//[ 'test', 5, 7, 'concat', 88, 99 ]
// logic ta3 concat 
 ////array1.push(array2[0]) =>["test",5,7,"concat"]
 ////array1.push(array2[1]) =["test",5,7,concat,88]
 //array1.push(array2[2]) =[ 'test', 5, 7, 'concat', 88, 99 ]

 function myConcat(arr1,arr2){

   for(var i=0;i<arr2.length;i++){
    arr1.push(arr2[i])
   }
   console.log(arr1)
 }

 myConcat([5,3,8],["test",true])



//console.log([]+[])

//-how to make a copy of an array in js
var testA=[4,3,8];
var testACopy=testA
console.log(testACopy)
testACopy.push("be carefull !")
console.log(testACopy)
console.log(testA)

// use slice :
var original=[9,8,7,88]
var copy=original.slice()
copy.push("this is how to make a copy of arr in js")
console.log(original)
console.log(copy)
// spread operator es6 - 2015
var copy1=[...original,55,"cool feature"] // []
copy1.push("this is how to make a copy of arr in js")
console.log(original)
console.log(copy1)


//2- slice to extract elements from existing array
var copy2 =original.slice(1,3)
console.log(copy2)

//-3- slice with negative param
var copy3=original.slice(-3)
console.log(copy3)

var longText = "lorem ipsum hss. jhjh hdsjh j sdhfjdsh"
//longText[0] =>"l"
// split : 
var textArr=longText.split("")
console.log(textArr)
var phone="(0033)-As-54-52"
console.log(phone[3])

// includes
console.log(phone.includes("As"))

// find products
var products=[
  "SMARTpHONE",
  "laptop",
  "headPhones",
  "Phonecase",
  "smart watch"
]
//search keyword
var searchword="PhoNE"
var result=[]
//output (result) :[smartphone,headphones,phonecase]

//logic : bech nthabet fi ay element fi wost array ; est ce que fih kelmet "phone" ? 
  // ken true : bech na3mel push lel element fi result array
  // ken false : mana3mel chay
  // bech nraja3 array mta3 result 
//step1 : bech n7ather for loop 
for (var i = 0; i < products.length; i++) {
  //if :products[i].includes(searchword)

  if(products[i].toLocaleLowerCase().includes(searchword.toLocaleLowerCase())){
      //result.push(products[i])
result.push(products[i])
    }
  
  
}
console.log(result)
// return result    

function search(array,query){
  var res=[]
  for (var i = 0; i < array.length; i++) {
  //if :products[i].includes(searchword)

  if(array[i].toLocaleLowerCase().includes(query.toLocaleLowerCase())){
      //result.push(products[i])
res.push(array[i])
    }
  
}
console.log(res)
}
search(products,searchword) // function invoke
search(["test1","javascript","55"],"test") // function invoke

console.log(typeof products)

