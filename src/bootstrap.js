import { createApp } from 'vue';
import App from './App.vue';

// createApp(App).mount('#app')

const mount = (el) => {
  const app = createApp(App);
  app.mount(el);
};

// Standalone mode
if (document.querySelector('#app')) {
  mount(document.querySelector('#app'));
}

export { mount };
