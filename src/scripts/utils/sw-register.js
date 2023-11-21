import { Workbox } from 'workbox-window';

const swRegister = async () => {
  if (!('serviceWorker' in navigator)) {
    console.log('Service Worker not supported in the browser');
    return;
  }

  const sw = new Workbox('./sw.bundle.js');

  try {
    await sw.register();
    console.log('Service Worker registered');
  } catch (error) {
    console.log(error);
  }
};

export default swRegister;
