const toDo = JSON.parse(localStorage.getItem('toDo')) ?? [];
todoUpdate();

function extractInput() {
  const inputElement = document.querySelector('.js-input');
  const dataElement = document.querySelector('.js-data');
  const input = inputElement.value;
  const data = dataElement.value;
  
  toDo.push({input, data})
  localStorage.setItem('toDo', JSON.stringify(toDo));
  inputElement.value = '';
  dataElement.value = '';
}

function todoUpdate() {
  let toDoHTML = '';
  if (!toDo.length)
    document.querySelector('.js-todo-grid').innerHTML = '';

  for (let i = 0; i < toDo.length; i++) {
    toDoHTML += `
    <div>${toDo[i].input}</div>
    <div>${toDo[i].data}</div>
    <button class='js-delete delete' 
    onclick='todoDelete(${i})'>Delete</button>
    `
    document.querySelector('.js-todo-grid').innerHTML = toDoHTML;
  }
}

function todoDelete(i) {
  toDo.splice(i, 1);
  localStorage.setItem('toDo', JSON.stringify(toDo));
  todoUpdate();
}