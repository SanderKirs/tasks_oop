ui = new UI();
ls = new LS();

const form = document.querySelector('form');
const taskInput = document.querySelector('#task');

form.addEventListener('submit', addTask);

function addTask(e){
    const task = new Task(taskInput.value);
    ui.addTask(task);
    ls.addTask(task);
    e.preventDefault();
}