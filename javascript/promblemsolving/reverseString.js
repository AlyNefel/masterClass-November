// input var text = "abcdef"
//output => "fedcba"
// text[1] === b 
function reverseString(string){
  // temp = string[0]
  //string[0]=string[string.lenght-1]
  //string[string.lenght-1]=temp 

  // temp = string[1]
  //string[1]=string[string.lenght-2]
  //string[string.lenght-2]=temp
  console.log(string.length)
  var result =""
  for (let index = string.length-1; index >= 0; index--) {
   //""+"o" = "o"
   //"o"+"l"="ol" ...
   console.log(result)
   console.log(string[index])
   result=result+string[index]



//  var temp = string[index]
//  console.log(temp)
//  console.log(string[string.length-(1+index)])
//   string[index]=string[string.length-(1+index)]

  
//   string[string.length-(1+index)]=temp
//   console.log(string)
  }
  console.log(result)
  return result
}

reverseString("hello") // olleh