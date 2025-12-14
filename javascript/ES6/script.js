// // 1-let & const => replace var 
//  //1-1 let
//    //for variables that can be changed 
//    // block scope :( for loop , if condition ...)
//    // can be declared without value : eg : let name
//    let name =5
// //    console.log(name)
// name="Hello from ES6"
// console.log(name)
// // for (let index = 0; index < array.length; index++) {
// //     const element = array[index];
    
// // } 

// //1-2 const 
//   // for constant variable
//   //must have a value (can not be undefined)
//   //can not be reassigned or changed (in most of case)
//   const age = 30
//   //age = 50 
//   const age2=age+20
//   //console.log(age)// will throw an error
//   console.log(age2)
//   // const with array
//   const array =[2,1]
//   array.push(6) // [2,1,6]
//   //array="test" // throw an error
//   console.log(array)

//   for (let index = 0; index < array.length; index++) {
//     const element = array[index]+index;
//    // element =5 // will throw an error
//     console.log(element)
//   }

// function quiz(){
//     // function scope
//     var x = 10
//     if(true){
//     var x = 20
//     console.log(x) // 20
//     }
//     console.log(x)//20
// }
// quiz()
// function quiz1(){
//     // function scope
//     let x = 10
//     if(true){
//     let x = 20
//     console.log(x) //20
//     //
//     }
//     console.log("using Let",x) //10
// }
// quiz1()

// //2-Arrow function : nex syntax of a function (shorter)
//  //2-1 simple arrow function (just one line instruction)
//  function add(x,y){
//     return x+y
//  }
//  console.log(add(4,6))
//  // arrow function
//  const add1=(x,y)=>x+y
//  const greet=()=>"Hello from Arrow Function"
//  console.log(add1(7,4))
//  console.log(greet())
// const result =6
//  //2-2 Multiple instructions arrow function
//  function multiply(x,y){
//     const result=x*y
//     return result
//  }

//  const multiply1=(x,y)=>{
//     const result=x*y
//     return result
//  }
//  console.log(multiply(6,5))
//  console.log(multiply1(5,8))
//  // 2-3- Arrow function with single param
//  function square(x){
//     return x*x
//  }
//  const square1=x=>x*x
//  const square2=(x)=>{
//     return x*x}
//  console.log(square(4))
// console.log(square1(4))
// console.log(square2(4))

// //3- Concatination => literal template
// name =" John"
// let message= "Hello "+name+" ;welcome to Tunisia"
// let message1=`Hello ${name} ; welcome to TN`

// //4-Ternary Operator 
// let minAge=18
// // if(minAge>18){
// //    const message2="You can have a driving license"
// // console.log(message2)
// // }else{
// //    const message2="You are Too Young!!"
// // console.log(message2)
// // }
// const message2=minAge<=18? (minAge==18?"You can celebrate ur 18th birthday":"you are not exactly 18 ^^ ")  :"You can have driving licence"

//  console.log(message2)
 // const result = test>var?"value of result if true":"value result if false"

 //4-Destructuring : methode bech na3mlou etraction of values from array or object 
 // before ES6  : var person ={name:"Person",age:28} 
 // var name = person.name // "Person"
 const person ={
   name:"Seif",
   age:100,
   address:{
      city:"tunis",
      zipCode:2083
   }
 }
 const {name,age,address}=person  //  2 variables : wa7da esmha name value ta3ha person.name
 console.log(name)
 console.log(age)
 console.log(address)
 //console.log(address.zipCode)


//5-spread operator : 
  // making copy without affecting the original
//   let originalArray = [2,5,8]
//   let copyArray=originalArray
//   console.log(originalArray,copyArray)
//   copyArray.push(99)
//   console.log(copyArray,originalArray)
 let originalArray = [2,5,8]
  let copyArray=[...originalArray]
  console.log(originalArray,copyArray)
 copyArray.push(99)
  console.log(copyArray,originalArray)
  
  // combining two arrays 
  let array1=[4,5,8]
  let array2=[9,2,88,3]
  //output => [4,5,8,9,2,88,3]
//   const combineArray=(arr1,arr2)=>{
//    for (let index = 0; index < arr2.length; index++) {
//       arr1.push(arr2[index])
//    }
//    console.log(arr1)
//    return arr1
//   }
//   combineArray(array1,array2)
let array3=[array1,...array2]
 //output array3 => [4,5,8,9,2,88,3]
 console.log("hello",array3)

 let numbers = [5,8,9]

 console.log(...numbers)

const addSpread=(x,y,z)=>x+y+z

console.log(addSpread(...numbers))