//Functions
function addTask(e)
{
    if(e.key == "Enter")
    {
        addTaskOfficial()
    }
}
function addTaskOfficial()
{
    let text = taskNameBox.value;


    let newTask = document.createElement("p");
    newTask.innerHTML = text;
    newTask.addEventListener("click", removeTask);


    let closeBtn = document.createElement("span");
    closeBtn.innerHTML = "X";
    closeBtn.addEventListener("click", removeTask);

    newTask.appendChild(closeBtn); 
    taskBox.appendChild(newTask);
}

function removeTask(e){
    let task = e.target.parentElement;
    task.remove();
}

function markDone(e) {
    let task = e.target.parentElement;
    task.classList.toggle("checked")
}
//Grabbing HTML Elements
let taskNameBox = document.getElementById("taskName");
let taskBox = document.getElementById("tasks");
//Add Event Listeners

taskNameBox.addEventListener("keyup", addTask)
//Adding Timers (won't need)