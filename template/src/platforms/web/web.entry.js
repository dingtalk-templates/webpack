import Vue from 'vue';
import Vuex from 'vuex';
import weex from 'weex-vue-render';
weex.init(Vue);
import App from '../../container/App.vue';
import Router from '../../container/router.js';
import Store from '../../store/index.js';

const { router } = Router(Vue);
const { store } = Store(Vue);

new Vue(Vue.util.extend({
  el:'#root',
  router,
  store
},App));
