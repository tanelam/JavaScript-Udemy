// let val;
//
// val =  document;
// val = document.all;
// val = document.all[0];
// val = document.all[2];
// val = document.all.length;
// val = document.head;
// val = document.body;
// val = document.doctype;
// val = document.domain;
// val = document.URL;
// val = document.characterSet;
// val = document.contentType;
//
// val =  document.forms;
// val = document.forms[0];
// val = document.forms[0].id;
// val = document.forms[0].method;
// val = document.forms[0].action;
//
// val = document.links;
// val = document.links[0];
// val = document.links[0].id;
// val = document.links[0].className;
// val = document.links[0].classList;
// val = document.links[0].classList[0];
//
// val = document.images;
//
// val = document.scripts;
// val = document.scripts[2].getAttribute('src');
//
// let scripts = document.scripts;
//
// let scriptsArr = Array.from(scripts);
//
// scriptsArr.forEach(function(script){
//   console.log(script)
// })
//
//
// console.log(val);

//document.getElementById("task-title")

//
// console.log(document.getElementById("task-title"))
//
// //Get things from elememt
// console.log(document.getElementById("task-title").id)
// console.log(document.getElementById("task-title").className)
//
// const taskTitle = document.getElementById("task-title");
//
// //Change styling
// taskTitle.style.background = "#333"
// taskTitle.style.color = "#fff"
// // taskTitle.style.display = "none"
//
// //Change content
// taskTitle.textContent = " Task list";
// taskTitle.innerText = "My Tasks";
// taskTitle.innerHTML = "<span style='color: red'>Task List</span>";
//
// //docuemnt.querySelector()
//
// console.log(document.querySelector('#task-title'))
// console.log(document.querySelector('.card-title'))
// console.log(document.querySelector('h5'))
//
// document.querySelector('li').style.color = "red"
// document.querySelector('ul li').style.color = "blue"
//
// document.querySelector('li:last-child').style.color = "red"
// document.querySelector('li:nth-child(3)').style.color = "yellow"
// document.querySelector('li:nth-child(4)').textContent = "Hello World"
// document.querySelector('li:nth-child(odd)').style.background = "#ccc"
// document.querySelector('li:nth-child(even)').style.background = "#f4f4f4"

//document.getElementsByClassName

// const items = document.getElementsByClassName("collection-item")
// console.log(items);
// console.log(items[0]);
// items[0].style.color = "red";
// items[3].textContent = "Hello!";
//
// const listItems =  document.querySelector("ul").getElementsByClassName("collection-item");
//
// console.log(listItems)

// //document.getElementByTagName
// let lis = document.getElementsByTagName("li")
// console.log(lis);
// console.log(lis[0]);
// lis[0].style.color = "red";
// lis[3].textContent = "Hello!";

//Convert HTML collection into Array

// lis = Array.from(lis);
//
// lis.reverse();
//
// lis.forEach(function(li, index){
//   console.log(li.className)
//   li.textContent = `${index}: Hello!`
// })
//
// console.log(lis)

//document.querySelectorAll

// const items = document.querySelectorAll('ul.collection li.collection-item');
//
// items.forEach(function(item, index){
//   item.textContent = `${index}: Hello!`
// });
//
// const liOdd =  document.querySelectorAll('li:nth-child(odd)');
// const liEven =  document.querySelectorAll('li:nth-child(even)');
//
// liOdd.forEach(function(li, index){
//   li.style.background = "#ccc"
// })
// for(let i = 0; i < liEven.length; i++){
//   liEven[i].style.background = "#f4f4f4"
// }
//
// console.log(items);

// let val;
//
// const list = document.querySelector('ul.collection');
// const listItem = document.querySelector('li.collection-item:first-child')
//
// val = listItem;
// val = list;
//
// //Get child nodes
// val = list.childNodes;
//
// //Get children element nodes
// val = list.children;
// val = list.children[1];
// val = list.children[1].textContent = "hello!";
//
// val = list.children[3].children[0];
//
// //first child
// val = list.firstChild;
// val = list.firstElementChildren;
//
// //last child
// val = list.lastChild;
// val = list.lastElementChild;
//
// //count child elements
// val = list.childElementCount;
//
// //Get parent node
// val = listItem.parentNode;
// val = listItem.parentElement;
// val = listItem.parentElement.parentElement;
//
// //Get next sibiling
// val = listItem.nextSibling;
// val = listItem.nextElementSibling.nextElementSibling;
//
// //get prev sibling
// val = listItem.previousSibling;
// val = listItem.previousElementSibling;
//
// console.log(val);

//Create element
// const li = document.createElement('li');
//
// //add class
// li.className = "collection-item"
//
// //add id
// li.id = "new-item";
//
// //add attribute
// li.setAttribute("title", "New Item")
//
// //create text node and append
// li.appendChild(document.createTextNode("Hello World"));
//
// //create new link element
// const link = document.createElement('a')
//
// //add classes
// link.className = 'delete-item secundary-content';
//
// //add icon html
// link.innerHTML = '<i class="fa fa remove"></i>'
//
// //append link into li
// li.appendChild(link)
//
// //append li as child to ul
// document.querySelector('ul.collection').appendChild(li);
//
// console.log(li)

//Replace element

// //create element
// const newHeading = document.createElement('h2');
//
// //add id
// newHeading.id = "task-title";
//
// //new text node
// newHeading.appendChild(document.createTextNode('Task List'));
//
// //get the old heading
// const oldHeading = document.getElementById('task-title');
//
// //parent
// const cardAction = document.querySelector('.card-action');
//
// //replace
// cardAction.replaceChild(newHeading, oldHeading)
//
// //rwemove element
// const lis = document.querySelectorAll('li');
// const list = document.querySelector('ul');
//
// //remove list item
// lis[0].remove();
//
// //remove child element
// list.removeChild(lis[3]);
//
// //classes and attr
// const firstLi =  document.querySelector("li:first-child");
// const link = firstLi.children[0];
//
// let val
//
// //classes
//
// val = link.className;
// val = link.classList;
// val = link.classList[0];
// link.classList.add('test');
// link.classList.remove('test');
//
// val = link
//
// //attributes
// val = link.getAttribute('href');
// val = link.setAttribute('href', 'http://google.com');
// link.setAttribute('title', "Google")
// val = link.hasAttribute('title')
// link.removeAttribute('title')
//
// console.log(val)

//events
//
// document.querySelector('.clear-tasks').addEventListener('click',
// function(e){
//   console.log("hello")
// })

document.querySelector('.clear-tasks').addEventListener('click', onClick)

function onClick(e){
  //console.log('clicked')
  let val;

  val = e;

  //event target element

  val = e.target;
  val = e.target.id;
  val = e.target.classList;

    // e.target.innerText = "hello"

  //event type
  val = e.type;

  //timestamp
  val = e.timeStamp;

  //coords event relative to the window
  val = e.offsetY
  val = e.offsetX

  console.log(val)
}
