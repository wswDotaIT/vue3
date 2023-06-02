import './public-path';
import App from './App.vue';
import { createApp } from 'vue';
// eslint-disable-next-line no-unused-vars
import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router';
import routes from './router';
import store from './store';

let router = null;
let instance = null;
let history = null;


function render(props = {}) {
  const { container } = props;
  // history = createWebHashHistory(window.__POWERED_BY_QIANKUN__ ? '/vue3App' : '/');
  history = createWebHashHistory();
  router = createRouter({
    history,
    routes,
  });

  instance = createApp(App);
  instance.use(router);
  instance.use(store);
  instance.mount(container ? container.querySelector('#app') : '#app');
}

if (!window.__POWERED_BY_QIANKUN__) {
  render();
}


// eslint-disable-next-line no-unused-vars
function storeTest(props) {
  props.onGlobalStateChange &&
  props.onGlobalStateChange(
      (value, prev) => console.log(`[onGlobalStateChange - ${props.name}]:`, value, prev),
      true,
  );
  props.setGlobalState &&
  props.setGlobalState({
    ignore: props.name,
    user: {
      name: props.name,
    },
  });
}

export async function bootstrap() {
  console.log('%c%s', 'color: green;', 'vue3.0 app bootstraped');
}

export async function mount(props) {
  console.log('[vue3] vue app mount');
  // storeTest(props);
  render(props);
  instance.config.globalProperties.$onGlobalStateChange = props.onGlobalStateChange;
  instance.config.globalProperties.$setGlobalState = props.setGlobalState;
}

export async function unmount() {
  console.log('[vue3] vue app unmount');
  instance.unmount();
  instance._container.innerHTML = '';
  instance = null;
  router = null;
  history.destroy();
}
