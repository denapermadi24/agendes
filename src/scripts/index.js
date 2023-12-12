import 'regenerator-runtime';
import '../styles/main.css';
import '../styles/popup.css';
import '../styles/login.css';
import '../styles/responsive.css';
import App from './views/app';
// import swRegister from './utils/sw-register';

const mainContent = document.querySelector('#main-content');
const skipLink = document.querySelector('.skip-link');

const app = new App(mainContent);

skipLink.addEventListener('click', (event) => {
  event.preventDefault();
  document.querySelector('main').focus();
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  // swRegister();
});
