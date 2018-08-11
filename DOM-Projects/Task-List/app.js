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
  //add task to event
  form.addEventListener("submit", addTask);
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

  //clear input
  taskInput.value = "";
  
}
