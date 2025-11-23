/*
prepare a function that will return the longest word in a sentence
eg: logestWord("1 is a test4 yghjhuhhkjh")=>yghjhuhhkjh
*/
function logestWord(senetnce){
// save each word fi array =>using split(" ") =>in words variable
var words=senetnce.split(" ")
//n7ather variable longest =words[0]
var longest = words[0]
console.log(words,longest)

//for loop var i=1
for (var i = 1; i < words.length; i++) {
    //comparaison if longest.length<words[i].length
    if(longest.length<words[i].length){
     longest=words[i]
    }
    console.log(`we are in step ${i} : the longest word is "${longest}"`)
    
}
//kamel iteration
return longest
}

var result =logestWord("y is a test4 yghjhuhhkjh ghk")
console.log(result)