//define UI variables
const form = document.querySelector('#task-form');
const taskList = document.querySelector(".collection");
const clearBtn = document.querySelector('.clear-tasks');
const filter =  document.querySelector('#filter');
const taskInput = document.querySelector('#task');

//Load all event listeners
loadEventListeners();

//Load all event listeners
function loadEventListeners(){
  //DOM load event
  document.addEventListener("DOMContentLoaded", getTasks)
  //add task to event
  form.addEventListener("submit", addTask);
  //remove task event
  taskList.addEventListener("click", removeTask)
  //clear task event
  clearBtn.addEventListener("click", clearTasks)
  //filter tasks event
  filter.addEventListener("keyup", filterTasks)
}

//add task
function addTask(e){
  e.preventDefault();

  if(taskInput.value === ''){
    alert('Add a task')
  }

  //create li element
  const li = document.createElement('li');
  //add a class
  li.className = 'collection-item';
  //create text node and append to li
  li.appendChild(document.createTextNode(taskInput.value))
  //crreate new link createElement
  const link = document.createElement('a');
  //add class className
  link.className = 'delete-item secundary-content';
  //add icon html
  link.innerHTML = '<i class="fa fa-remove"></i>';
  //append the link to li
  li.appendChild(link)

  //append li to ul
  taskList.appendChild(li)

  // store in LS
  storeTaskInLocalStorage(taskInput.value);

  //clear input
  taskInput.value = "";
}

//store task
function storeTaskInLocalStorage(task){
  let tasks;

  if(localStorage.getItem('tasks') === null){
    tasks = [];
  }else{
    tasks = JSON.parse(localStorage.getItem('tasks'))
  }

  tasks.push(task)

  localStorage.setItem('tasks', JSON.stringify(tasks))
}

//remove task
function removeTask(e){
  if(e.target.parentElement.classList.contains("delete-item")){
    // console.log(e.target.parentElement.parentElement)
    if(confirm('Are you sure?')){
      e.target.parentElement.parentElement.remove()

      // remove from ls
      removeTaskFromLocalStorage(e.target.parentElement.parentElement)
    }
  }
}

//remove from local storage
function removeTaskFromLocalStorage(taskItem){
  let tasks;

  if(localStorage.getItem('tasks') === null){
    tasks = [];
  }else{
    tasks = JSON.parse(localStorage.getItem('tasks'))
  }

  tasks.forEach(function(task, index){
    if(taskItem.textContent == task){
      tasks.splice(index, 1)
    }
  })

  localStorage.setItem('tasks', JSON.stringify(tasks))
}

//clear tasks
function clearTasks(){
  // taskList.innerHTML = "";
  while(taskList.firstChild){
    taskList.removeChild(taskList.firstChild)
  }

  //clear from LS
  clearTasksFromLocalStorage();
}

//clear tasks from ls
function clearTasksFromLocalStorage(){
  localStorage.clear()
}

function filterTasks(e){
  const text = e.target.value.toLowerCase();

  document.querySelectorAll(".collection-item").forEach(
    function(task){
      const item = task.firstChild.textContent;
      // console.log(item.toLowerCase().indexOf(text))
      if(item.toLowerCase().indexOf(text) != -1){
        task.style.display = "block";
      }else{
        task.style.display = "none";
      }
    }
  );
}

//get tasks from ls
function getTasks(){
  let tasks;

  if(localStorage.getItem('tasks') === null){
    tasks = [];
  }else{
    tasks = JSON.parse(localStorage.getItem('tasks'))
  }

  tasks.forEach(function(task){
    //create li element
    const li = document.createElement('li');
    //add a class
    li.className = 'collection-item';
    //create text node and append to li
    li.appendChild(document.createTextNode(task))
    //crreate new link createElement
    const link = document.createElement('a');
    //add class className
    link.className = 'delete-item secundary-content';
    //add icon html
    link.innerHTML = '<i class="fa fa-remove"></i>';
    //append the link to li
    li.appendChild(link)

    //append li to ul
    taskList.appendChild(li)

  })
}
