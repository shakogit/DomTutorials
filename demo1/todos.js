// (1)-create application state: massive that holds list of (3) actions (e.g. - TODO - items)
const todo = [
    {description:'Walk dog', done: false},
    {description:'Water the plants', done:false},
    {description:'Sand th chairs', done:false}
    ];

// (2)- set variables to (HTML)-element referances getting (id) - selectors
const addTodoInput = document.getElementById('todo-input');
const addTodoButton = document.getElementById('add-todo-btn');
const todoList = document.getElementById('todo-list');

// (3) Initialize the view
for(const todo of todos){
    todoList.append(renderTodoInReadMode(todo));
}
// button disabled until (input) has at list 3 characters 
addTodoInput.addEventListener('input', ()=>{
    addTodoButton.ariaDisabled = addTodoInput.ariaValueMax.length < 3;
})

addTodoInput.addEventListener('keydown', ({ key }) => {
  if (key === 'Enter' && addTodoInput.value.length >= 3) {
    addTodo()
  }
})

addTodoButton.addEventListener('click' , ()=>{
    addTodo();
});

// functions
function renderTodoInReadMode(todo){
    const li = document.createElement('li');
    const span = document.createElement('span')
    span.textContent = todo
    span.addEventListener('dblclick', ()=>{
        const idx = todos.indexOf(todo)

        todoList.replaceChild(
            renderTodoInReadMode(todo),
            todoList.childNodes(idx)
        )
    })
    li.append(span);

    const button = document.createElement('button')
    button.textContent = 'Done'
    button.addEventListener('click', ()=>{
        const idx = todos.indexOf(todo);
    })
}
function addTodo(){

}
