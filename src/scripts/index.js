import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../styles/responsive.css';
import App from './views/app.js';
import swRegister from './utils/sw-register.js';

const $ = require('jquery');

const drawer = document.querySelector('#drawer');
const mainContent = document.querySelector('#main-content');

const app = new App(mainContent);

$('.skip-link').on('click', (event) => {
  event.preventDefault();
  document.querySelector('main').focus();
});

$('#menu').on('click', (event) => {
  event.stopPropagation();
  if (drawer) {
    drawer.classList.toggle('open');
  }
});

$('.hero').on('click', (event) => {
  event.stopPropagation();
  if (drawer) {
    drawer.classList.remove('open');
  }
});

$('main').on('click', (event) => {
  event.stopPropagation();
  if (drawer) {
    drawer.classList.remove('open');
  }
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});
