// input : word (string) => output the letters that appears the most 
//frequency("development")  => output "e"
//frequency("missisippi") => output "i"


function frequency(word){
//hint : d=>1 / e=>3 / v=>1 / l=>1 .... Object to store the letters (keys) : value (frequency)
// var object = {} => object["test"]
//step1- na3mlou empty obect to store the keys and values
var freqObject={} // freqObject{d:1,}
for(var char of word){
    //console.log(freqObject[char])
    // ken char mahich mawjouda as key in freqObject => bech na3mel creation ta3 key b char wel value 1
if(!freqObject[char]){
    freqObject[char]=1
}else{
//console.log("we are in the case that the key already exists :   "+freqObject[char])
freqObject[char]+=1 //freqObject[char]=freqObject[char]+1
}
    
}
console.log(freqObject)
// step 2 : loop through object to extract the most frequent letter
var maxCount=0
var maxLetter=""
for(var letter in freqObject){
    console.log(letter,freqObject[letter])
    if(freqObject[letter]>maxCount){
        maxCount=freqObject[letter]
        maxLetter=letter
        console.log("inside if condition ",maxCount,maxLetter)
    }
}
console.log(`the letter with max frequency is : ${maxLetter} with ${maxCount} times`)
}
frequency("bannana")