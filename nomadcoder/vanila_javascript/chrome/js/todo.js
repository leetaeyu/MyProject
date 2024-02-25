window.addEventListener('load', () => {
    const toDoForm = document.getElementById('todo-form');
    const toDoInput = toDoForm.querySelector('input');
    const toDoList = document.getElementById('todo-list');

    let toDos = [];
    
    function saveToDos() {
        localStorage.setItem("todos", JSON.stringify(toDos));        
    }

    deleteToDo = (event) => {
        const li = event.target.parentElement;
        li.remove();
    }

    paintToDo = (newTodo) => {
        const li = document.createElement('li');
        const span = document.createElement('spen');
        const button = document.createElement('button');
        span.innerText = newTodo;
        button.innerText = "X";
        button.addEventListener('click', deleteToDo);
        li.appendChild(span);
        li.appendChild(button);
        toDoList.appendChild(li);
    }

    handleToDoSubmit = (event) => {
        event.preventDefault();
        const newTodo = toDoInput.value;
        toDoInput.value = "";
        toDos.push(newTodo);
        paintToDo(newTodo);
        saveToDos();
    }

    toDoForm.addEventListener('submit', handleToDoSubmit);

    const savedToDos = localStorage.getItem('todos');
    if(savedToDos){
        const parsedToDos = JSON.parse(savedToDos);
        toDos = parsedToDos
        parsedToDos.forEach(paintToDo);
    }
})