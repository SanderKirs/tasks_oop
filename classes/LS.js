class LS {

    getData(name) {
        let data;
        if(localStorage.getItem('name') === null){
            data = [];
        } else {
            data = JSON.parse(localStorage.getItem('name'));
        }
    }
    setData(name, data){
        localStorage.setItem('name', JSON.stringify(data));
    }


    addTask(task){
        let tasks = this.getData('tasks');
        tasks.push(task);
        this.setData('tasks', tasks);
        task.addedToLS();
    }
}