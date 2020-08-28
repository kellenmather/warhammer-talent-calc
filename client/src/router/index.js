import Vue from 'vue';
import Router from 'vue-router';
import Home from '../views/Home.vue';
import Calculator from '../views/Calculator.vue';

Vue.use(Router)

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/calc/:race/:lord/:type?', name: 'Calculator', component: Calculator, props: true }
//   { path: '/sample/:id', name: 'Sample', component: SVGFEDisplacementMapElement, props: true, meta: { noAuth: true } }
]

const router = new Router({
  mode: 'history',
  routes
})

export default router;
