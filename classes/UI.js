class UI {

    addTask(task){
        const li = document.createElement('li');
        li.className = 'collection-item';
        li.appendChild(document.createTextNode(task.name));

        const link = document.createElement('a');
        link.className = 'secondary-content';
        link.appendChild(document.createTextNode('X'));
        link.setAttribute('href', '#');
        li.appendChild(link);

        const list = document.querySelector('ul')
        list.appendChild(li);

        const input = document.querySelector('#task');
        input.value = '';

        task.addedToUI();
    }
    deleteTask(task){
        const deleteIcon = task.nextSibling;
        if(deleteIcon.textContent === 'X'){
            if(confirm('Do you want to delete this task?')) {
                task.parentElement.remove();
            }
        }
    }
}