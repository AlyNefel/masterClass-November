// Dom selectors
var input =document.querySelector("#task-input")

var list = document.getElementById("task-list")

function createTask(taskText){
    //step 1 - create li element
    var li =document.createElement("li")
    //step 2- nzid content l li element
    li.textContent=taskText
    //step 3 - ad style to li element
    li.className="list-group-item"
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

}