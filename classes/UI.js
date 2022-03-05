class UI {

    addUIelement(elementname, classname = '', textcontent = '', attributes = {}){
     const element = document.createElement(elementname);
     element.className = classname;
     element.appendChild(document.createTextNode(textcontent));
     if (Object.keys(attributes).lenght > 0){
         for (let key in attributes){
             element.setAttribute(key, attributes[key]);
         }
     }
     return element;
    }

    addTask(task){
        const li = this.addUIelement('li', 'collection-item', task.name);
        const link = this.addUIelement('a', 'secondary-content', 'X', {'href':'#'});
        li.appendChild(link);

        const list = document.querySelector('ul');
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

    deleteTasks(tasks){
        while(tasks.firstChild) {
            tasks.removeChild(tasks.firstChild);
        }
    }
}