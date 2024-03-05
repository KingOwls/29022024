
//TEMPLATE
const template = document.createElement("template");
template.innerHTML =  /*HTML*/`
<ul class="nav nav-pills test">
  <li class="nav-item "><a href="#" data-link='["i"]' class="nav-link active" aria-current="page">Inicio</a></li>
  <li class="nav-item"><a href="#" data-link='["c"]' class="nav-link">Tareas Completas</a></li>
  <li class="nav-item"><a href="#" data-link='["p"]' class="nav-link">Tareas Canceladas</a></li>
</ul>
`;

export const homeTemplate = `
<div class="container-xl">
    <div class="row">
        <div class="col-md-6">
            <home-component></home-component>
        </div>
        <div class="col-md-6">
            <task-list type="pendiente"></task-list>
        </div>
    </div>
</div>
`

//COMPONENT
export class NavMenu extends HTMLElement {
    constructor(){
        super();
        this.render();
    }

    render(){
        //load Component and template  
        const html = template.content.cloneNode((true));
        this.appendChild(html);
        this.querySelectorAll('.nav-link').forEach(a => {
            a.addEventListener('click', (e) => {
                this.querySelectorAll('.nav-link').forEach(link => {
                    link == e.target? link.classList.add("active") : link.classList.remove('active');
                });
                const url = JSON.parse(e.target.dataset.link)
                const main = document.querySelector('#main')
                switch (url[0]) {
                    case 'i':
                        main.innerHTML = homeTemplate;
                        break;

                    case 'c':
                        main.innerHTML = `
                        <div class="container-xl">
                            <task-list type="terminada"></task-list>
                        </div>
                        `;
                        break;

                    case 'p':
                        main.innerHTML = `
                        <div class="container-xl">
                            <task-list type="cancelada"></task-list>
                        </div>
                        `;
                        break;

                    default:
                        main.innerHTML = `<h1>Page Not Fount</h1>`;
                        break;
                };
                e.stopImmediatePropagation();
                e.stopPropagation();
            });
        });
    };

}


customElements.define("nav-menu", NavMenu);
