//dom selection
//1-color input
var colorInput = document.querySelector("#input-color")
var colorDisplay = document.getElementById("color-display")
console.log(colorInput.value)

// declare a unction that will be used on click 
function applyColor(){
    var color = colorInput.value
    console.log(color," onclick event happened !!")
    // how to change style with js 
    colorDisplay.style.backgroundColor=color
}

function changeWidth(){
    console.log("onmouse over event")
    colorDisplay.style.width="500px"
}

function resizeDiv(){
    console.log("onmouse out event")
    colorDisplay.style.width="250px"
    colorDisplay.style.backgroundColor="grey"
}