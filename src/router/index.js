import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/HomePage.vue';
import ServicePage from '../views/ServicePage.vue';
import FeaturePage from '../views/FeaturePage.vue';
import ProductPage from '../views/ProductPage.vue';
import TestimonialPage from '../views/TestimonialPage.vue';
import FAQPage from '../views/FAQ.vue';
import SignUpPage from '../views/SignUp.vue';
import LoginPage from '../views/LoginPage.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/service',
    name: 'Service',
    component: ServicePage,
  },
  {
    path: '/feature',
    name: 'Feature',
    component: FeaturePage,
  },
  {
    path: '/product',
    name: 'Product',
    component: ProductPage,
  },
  {
    path: '/testimonial',
    name: 'Testimonial',
    component: TestimonialPage,
  },
  {
    path: '/faq',
    name: 'FAQ',
    component: FAQPage,
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: SignUpPage,
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginPage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
