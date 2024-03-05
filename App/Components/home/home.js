import { taskService } from "./../services/taskService.js";


//TEMPLATE
const template = document.createElement("template");
template.innerHTML =  /*HTML*/`
<style>
    @import './styles.css';
    @import './App/Components/home/home.css';
</style>
<div class="d-grid">
    <form id="taskForm" class="col-lg-6 mt-3 full-width">

        <div class="mb-3">
            <label for="nameTask" class="form-label">Nombre de la Tarea: </label>
            <input type="text" class="form-control" id="nameTask" aria-describedby="nameTask">
        </div>

        <div class="row">
            <div class="mb-3 col-md-6">
                <label for="startDate" class="form-label">Fecha Inicio:</label>
                <input class="form-control" type="date" id="startDate">
            </div>
            <div class="mb-3 col-md-6">
                <label for="endDate" class="form-label">Fecha Fin:</label>
                <input class="form-control" type="date" id="endDate">
            </div>
        </div>


        <div class="mb-3">
            <label for="person" class="form-label">Responsable</label>
            <input type="text" class="form-control" id="person">
        </div>

        <div class="row">
            <div class="mb-3 col-md-3">
                <input type="radio" class="form-check-input" id="urgent" name="priority" value="urgent">
                <label class="form-check-label" for="urgent">Urgente</label>
            </div>
            <div class="mb-3 col-md-3">
                <input type="radio" class="form-check-input" id="hight" name="priority" value="high">
                <label class="form-check-label" for="hight">Alto</label>
            </div>
            <div class="mb-3 col-md-3">
                <input type="radio" class="form-check-input" id="mid" name="priority" value="medium">
                <label class="form-check-label" for="mid">Medio</label>
            </div>
            <div class="mb-3 col-md-3">
                <input type="radio" class="form-check-input" id="low" name="priority" value="low">
                <label class="form-check-label" for="low">Bajo</label>
            </div>
        </div>
        <div class="d-flex">
            <button id="btnNuevo" type="submit" class="btn btn-success full-width">+</button>
        </div>
    </form>
</div>
`;





export class Home extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({ mode: "open" });
        this.render();
    }

    render(){
        //load Component and template
        const html = template.content.cloneNode((true));
        html.querySelector('#taskForm').addEventListener('submit', async function(event) {
            event.preventDefault(); // Evita que se envíe el formulario
        
            // Objeto para almacenar los datos del formulario
            const formData = {
                id: `${taskService.tasks.length + 1}`,
                status: "pendiente",
                taskType: "medium"
            };
        
            // Obtener todos los elementos de entrada del formulario
            const formInputs = this.querySelectorAll('input');
            let checkInput = true
            // Iterar sobre los elementos de entrada y almacenar los valores en el objeto formData
            formInputs.forEach(input => {
                // Si el input es un radio button y está marcado, almacenar su valor en la variable taskType
                input.type === 'radio'? 
                (input.checked? 
                    formData.taskType = input.value: 
                    ""): 
                    input.value? formData[input.id] = input.value: checkInput = false
            });
            if (checkInput) {
                taskService.saveData(formData);
            }else{
                alert("faltan datos para continuar")
            }



            // Aquí puedes enviar los datos a través de una solicitud AJAX o realizar otras operaciones
        });

        this.shadowRoot.appendChild(html);

    };
};



customElements.define('home-component', Home);