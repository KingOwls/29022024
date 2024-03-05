import {taskService} from './../services/taskService.js'


//TEMPLATE
const template = document.createElement("template");
template.innerHTML =  /*HTML*/`
    <h2 id="title"></h2>
    <table class="table">
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Fecha de Inicio</th>
          <th>Fecha de Final</th>
          <th>Encargado</th>
          <th>Prioridad</th>
          <th>Estado</th>
          <th></th>
        </tr>
      </thead>
      <tbody id="taskTable">
      </tbody>
    </table>
`;

//COMPONENT
export class TaskList extends HTMLElement {

    constructor(){
        super();
        this.render();
    }

    async render(){
        //load Component and template  
        
        const html = template.content.cloneNode((true));
        const tasks = await taskService.loadTasks();
        const type = this.getAttribute("type")
        html.querySelector('#title').textContent = `Tareas ${type}s`
        tasks.forEach(task => {
          if (task.status == type) {
            html.querySelector('#taskTable').appendChild(this.createTableRow(task));
          }
        });
        this.appendChild(html);
    };

    newTask = (task) => {
        document.querySelector('#taskTable').appendChild(this.createTableRow(task));
    }


    createTableRow(task) {
      const row = document.createElement('tr');
      row.id = task.id;

      const buttonsCell = document.createElement('td');
      const finishButton = document.createElement('button');
      finishButton.textContent = 'terminada';
      finishButton.classList.add('btn', 'btn-success', 'btn-ok');
      finishButton.addEventListener('click', (e) => {
          document.getElementById(task.id).remove()
          taskService.changeStatus(task.id, 'terminada');
          e.stopImmediatePropagation();
          e.stopPropagation();
      });

      const cancelButton = document.createElement('button');
      cancelButton.textContent = 'cancelada';
      cancelButton.classList.add('btn', 'btn-danger', 'btn-error');
      cancelButton.addEventListener('click', (e) => {
        document.getElementById(task.id).remove()
        taskService.changeStatus(task.id, 'cancelada');
        e.stopImmediatePropagation();
        e.stopPropagation();
      });

      buttonsCell.appendChild(finishButton);
      buttonsCell.appendChild(cancelButton);

      row.innerHTML = `
          <td>${task.nameTask}</td>
          <td>${task.startDate}</td>
          <td>${task.endDate}</td>
          <td>${task.person}</td>
          <td>${task.taskType}</td>
          <td>${task.status}</td>
      `;

      row.appendChild(buttonsCell);

      return row;
    }

}


customElements.define("task-list", TaskList);
