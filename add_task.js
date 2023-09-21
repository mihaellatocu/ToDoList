
const taskInput = document.getElementById('taskInput');
let button = document.getElementById('btn');
let taskList = document.getElementById('task-List');
const clear = document.getElementById('clear');

function createTask(){
  let taskText = taskInput.value;

  if(taskText.trim() !== '') {
    let entry = document.createElement('li'); //create the li element
    entry.textContent = taskText; // add task in list
    
    taskList.appendChild(entry); // add li to parent
    //localStorage.setItem('item', taskText);
    let span = document.createElement('span');
    span.innerHTML = '\u00d7'; //add close icon
    entry.appendChild(span); //display inside li

    taskInput.value = ''; //reset the box to empty
    saveData();
  }
}

button.addEventListener('click', createTask);

taskInput.addEventListener('keyup', function enter(event){
  if(event.key === 'Enter'){
    createTask();
    saveData();
  }
});

taskList.addEventListener('click', function(e) {
  if(e.target.tagName === 'LI') {
   e.target.classList.toggle('checked')
    saveData();
  } else if (e.target.tagName === 'SPAN') {
    e.target.parentElement.remove(); // remove the li element
    saveData();
  }
});

function saveData() {
  localStorage.setItem("data", taskList.innerHTML);
}
function showTask() {
  taskList.innerHTML = localStorage.getItem("data");
}
showTask();

function removeStorage() {
  let storage = localStorage.getItem('data');
  if (storage !== null){
    localStorage.removeItem("data");
    taskList.innerHTML = '';
  } else {
    alert ("Nothing to remove!");
  }
}

clear.addEventListener('click', removeStorage);


// addTask.onclick = function addlst() {

//   let timer = new Date()

//   lst.innerHTML += `<div>${textbox.value}</div>`

//   localStorage.setItem(`${timer.getTime().toString()}`, textbox.value);

//   textbox.value = ''

// }

// for (let i = 0; i < localStorage.length; i++) {

//   lst.innerHTML += `<div>${localStorage.getItem(localStorage.key(i))}</div>`

// } 
