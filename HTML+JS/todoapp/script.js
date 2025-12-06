// Dom selectors
var input =document.querySelector("#task-input")

var list = document.getElementById("task-list")

var title = document.getElementById("title")



function createTask(taskText){
    //step 1 - create li element
    var li =document.createElement("li")
    //step 2- nzid content l li element
    li.textContent=taskText
    //step 3 - ad style to li element
    li.className="list-group-item"
    //step3-1 
    li.ondblclick=removeTask
    li.onmouseenter=changeWidth
  //step 4 - attach the li to the ul element (list)
  console.log(li)
  list.append(li)
  //list.prepend(li) // at the begining
}


function handleAddTask(){
// collect the input value 
var taskText=input.value
console.log(taskText)
createTask(taskText)
// make the input empty again 
input.value=""
handleInput()
}

function handleInput(){
    // we want to detect if the user is typing
    if(input.value!==""){
        title.textContent="You are Typing..."
    }else title.textContent="My TO-DO List"
}

function handleKeyDown(event){
//console.log(event.key)
if(event.key=="Enter"){
    console.log("Enter hitted !!")
    handleAddTask()
}
}


function removeTask(event){
    console.log(event.target)
event.target.remove()
}


function changeWidth(event){
event.target.style.backgroundColor="green"
}