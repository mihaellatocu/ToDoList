
let taskInput = document.getElementById('taskInput');
let button = document.getElementById('btn');
let taskList = document.getElementById('taskList');


function createTask(){
  let taskText = taskInput.value;

  if(taskText.trim() !== '') {
    let entry = document.createElement('li'); //create the li element
    entry.textContent = taskText; // add task in list
    
    taskList.appendChild(entry); // add li to parent

    taskInput.value = ''; //reset the box to empty
  }
}
button.addEventListener('click', createTask);

taskInput.addEventListener('keyup', function enter(event){
  if(event.key === 'Enter'){
    createTask();
  }
});

let text = document.getElementById('text');
button.addEventListener('click', function saveData() {
  localStorage.setItem('text', text.value);
  document.getElementById('paragraph').innerHTML=localStorage.getItem('text');
})
document.getElementById('paragraph').innerHTML=localStorage.getItem('text');



// let li = document.getElementsByTagName('li');
// li.addEventListener('click', function cross() {
//   taskInput.style.backgroundColor = 'red';
// })


