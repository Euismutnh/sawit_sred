import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/HomePage.vue';


Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/service',
    name: 'Service',
    component: () => import('../views/ServicePage.vue'),
  },
  {
    path: '/feature',
    name: 'Feature',
    component: () => import('../views/FeaturePage.vue'),
  },
  {
    path: '/product',
    name: 'Product',
    component: () => import('../views/ProductPage.vue'),
  },
  {
    path: '/testimonial',
    name: 'Testimonial',
    component: () => import('../views/TestimonialPage.vue'),
  },
  {
    path: '/faq',
    name: 'FAQ',
    component: () => import('../views/FAQ.vue'),
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: () => import('../views/SignUp.vue'),
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/LoginPage.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;