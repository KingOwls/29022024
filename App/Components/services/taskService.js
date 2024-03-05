import {TaskList} from './../taskList/taskList.js';

class TaskService {
    //urlData = './../../data/data.json'
    urlData = 'http://localhost:3000/task';
    tasks = [];
    headers = {
        "Content-Type": "application/json",
    }

    constructor() {
      
    }

    async loadTasks() {
        try {
            this.tasks = await fetch(this.urlData).then(res => res.json());
        } catch (error) {
            this.tasks.length == 0? this.tasks = []: ""
        }
        return this.tasks;
    }

    async saveData(task) {
        const taskR = this.tasks.find(element => element.nameTask == task.nameTask)
        if (!taskR) {
            try {
                this.tasks = await fetch(this.urlData,{
                    method: "POST",
                    headers: this.headers,
                    body: JSON.stringify(task),
                }).then(res => console.log(res));
            } catch (error) {
                this.tasks.push(task);
                new TaskList().newTask(task);
            }
            return
        }
        alert("El Nombre de la Tarea Esta Repetido")
        return 
    }

    async changeStatus(id, status) {
        const task = this.tasks.find(element => element.id == id)
        try {
            task.status = status
            this.tasks = await fetch(`${this.urlData}/${id}`,{
                method: "PUT",
                headers: this.headers,
                body: JSON.stringify(task),
            }).then(res => console.log(res));
        } catch (error) {
            task.status = status
        }
        return
    }

}

export const taskService = new TaskService();