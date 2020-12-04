import Vue from 'vue';
import Router from 'vue-router';
import Home from '../views/Home.vue';
import Calculator from '../views/Calculator.vue';

Vue.use(Router)

const routes = [
  { path: '/:race?/:legendary?', name: 'Home', component: Home, props: true },
  { path: '/calc/:race/:lord/:type?/:seed?', name: 'Calculator', component: Calculator, props: true }
]

const router = new Router({
  mode: 'history',
  routes
})

export default router;
