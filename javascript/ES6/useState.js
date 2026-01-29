let colors =["red","blue","green"]
const useColors=[
   function getter(){
      console.log(colors)
      return colors
   },
   function setter(newColor){
      //spread operator
    colors=[...colors,newColor]
    return colors
   }
]
const [getColors,setColors]=useColors
console.log("what is the getColors",getColors)
// getter => useColors[0]
getColors()
// add new color to the array using useColors[1]
setColors("white")
// get the colors after update (set)
getColors()