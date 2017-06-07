import VueRouter from 'vue-router';
import Home from '../pages/home/index.vue';
import Dingtalk from '../pages/dingtalk/index.vue';

const routes = [
  {
    path:'/',
    name: 'home',
    component: Home
  },
  {
    path: '/dingtalk',
    name: 'dingtalk',
    component: Dingtalk
  }
];

export default function Router(Vue){
  Vue.use(VueRouter);
  const router = new VueRouter({
    routes: routes
  });
  return {
    router
  }
}
