import './App/Components/navMenu/navMenu.js';
import './App/Components/home/home.js';
import './App/Components/taskList/taskList.js';
import { homeTemplate } from './App/Components/navMenu/navMenu.js';

document.addEventListener('DOMContentLoaded', (e) => {
    const main = document.querySelector('#main')
    main.innerHTML = homeTemplate;

})
