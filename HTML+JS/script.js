function reverseString(string){
  console.log(string.length)
  var result =""
  for (let index = string.length-1; index >= 0; index--) {
   
   console.log(result)
   console.log(string[index])
   result=result+string[index]
  console.log(string)
  }
  console.log(result)
  return result
}

function showReversed(){
 var inputTextValue =document.getElementById("inputText").value
 console.log(inputTextValue)
 var divValue =document.getElementById("outputText")
 //function to resverse the input text
 var resultReverse =reverseString(inputTextValue)
 //hello input =>>>
 console.log("from result reverse ", resultReverse)
//  var text = "test"
//  text="testEdit"
divValue.textContent=resultReverse  // === divValue.innerHTML=resultReverse
// console.log(divValue.textContent)
}
