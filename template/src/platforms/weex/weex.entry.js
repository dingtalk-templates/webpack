import Vuex from 'vuex';
import App from '../../container/App.vue';
import Router from '../../container/router.js';
import Store from '../../store/index.js';

const { router } = Router(Vue);
const { store }  = Store(Vue);

new Vue(Vue.util.extend({
  el:'#root',
  router,
  store
},App));

router.push('/')
