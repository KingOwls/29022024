![css](https://raw.githubusercontent.com/David-Albarracin/README_MATERIALS/main/css-html-js.png)

# Gestor de Tareas

---

## Descripción

Esta aplicación se diseña para implementar y practicar web component y json-server para ello creamos la estructura de carpetas (App) donde están almacenados los (Components) con sus estilos y sus js también encontramos (Services) donde encontramos un js que nos ayuda a hacer las peticiones a la url del json-server también implementamos BOOTSTRAP para ayudar al manejo de estilos


---

## Características

1. **Creación de Tareas**: Los usuarios pueden crear fácilmente nuevas tareas proporcionando detalles relevantes como el nombre de la tarea, fecha de inicio, fecha de finalización, prioridad y la persona responsable de la tarea una vez creada la tarea toma el estado de pendiente y es enviada a el json server.

2. **Asignar estado de las Tareas**: Los usuarios pueden crear fácilmente nuevas tareas proporcionando detalles relevantes como el nombre de la tarea, fecha de inicio, fecha de finalización, prioridad y la persona responsable de la tarea una vez creada la tarea toma el estado de pendiente y es enviada a el json server.

---

## Código de Interés

```
//Estructura Básica de un web component
export class NavMenu extends HTMLElement {
    
    // Propiedades
    name = "";
    Propiedades: ${this.name}
    //en la etiqueta name=""
    Atributos: ${this.getAttribute("name")}
    
    constructor(){
        super();
        this.render();
    }

    render(){

    };

    //Métodos de la clase
    methodsName(){
    }

    //Métodos de la clase Privados # para privacidad
    #methodsNamePrivate(){
    }

}

```
Ahora miremos un poco mas del ciclo de vida del componente

```
// Custom Element registrado (el navegador ya lo conoce)
customElements.define("app-element", AppElement);

// Custom Element creado -> Se ejecuta el constructor()
const component = document.createElement("app-element");

// Custom Element añadido al DOM -> Se ejecuta el connectedCallback()
document.body.appendChild(component);

// Localizamos un componente en el documento HTML
const element = document.querySelector("app-element");

// Eliminamos el Custom Element -> Se ejecuta disconnectedCallback()
element.remove();

```