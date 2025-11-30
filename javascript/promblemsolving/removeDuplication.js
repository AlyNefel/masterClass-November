/*
input : var array =[3,5,5,9,8,3,11] // array of numbers
output : var result = [3,5,9,8,11]
*/ 
function removeDublication(array){
    //n7ather array jdid bech n7ot fih result
var result=[]
// bech na3mel loop
for (var index = 0; index < array.length; index++) { 
    //index++ === index =index+1
    console.log("Result "+result)
    console.log("step : " +array[index])
    // condition result includes array[index] ??
    if(!result.includes(array[index])){
        //false : bech nzid array[index] lel result === result.push(array[index])
      result.push(array[index])
    }

    //inner loop 
      //comparaison b reste mta array (if condition )

    
}
console.log("result final "+result)
return result
}

removeDublication([4,5,6,8,4,6,5,99]) // [4,5,6,8,99]

removeDublication([3,5,5,9,8,3,11])





// function addTwoNumbers(a,b){
// // instructions (logic)
// //console.log(a+b)
// return a+b
// }

// // function invoke
// var result =addTwoNumbers(10,15)
// console.log(result)

// var array2=["test",true,4,33.2]

// console.log(array2[3])
// console.log(array2.length)
// array2.push(99)
// //["test",true,4,33.2,99]
// console.log(array2)

// var test = [45,"test",99]
// var resultIncludes = test.includes(99)
// console.log(resultIncludes)