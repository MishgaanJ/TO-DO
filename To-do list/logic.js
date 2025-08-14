const add_button = document.getElementById("add");
const input_task = document.getElementById("item");
const task_list = document.getElementById("task-list");


window.onload = function(){
    const savedTasks = localStorage.getItem("tasks");
    if(savedTasks){
        task_list.innerHTML = savedTasks;
    }
}
add_button.addEventListener("click", function(){
    if(input_task.value.trim()==="") return;

    const li = document.createElement("li");
    li.innerHTML = `${input_task.value} <button class="delete">X</button>`;
    task_list.appendChild(li);

    input_task.value = "";
    saveTasks();

});

task_list.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("completed");
        saveTasks();
    }
    if(e.target.classList.contains("delete")){
        e.target.parentElement.remove();
        saveTasks();
    }
});

function saveTasks(){
    localStorage.setItem("tasks", task_list.innerHTML);
}