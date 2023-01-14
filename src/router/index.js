import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  scrollBehavior (to, from, savedPosition) {
    if (to.hash ) {
      return { el: to.hash, top: 5, behavior: "smooth"};
    }
    if (savedPosition) {
  
      return savedPosition;
    } 
    return {
      top: 0,
      behavior: "smooth"
    }
    // return new Promise((resolve, reject) => {
    //   setTimeout(() => {
    //     resolve({left: 0, top: 0, behavior: "smooth"})
    //   }, 500)
    // })
  },
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/portfolio',
      name: 'portfolioView',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/portfolio/PortfolioView.vue')
    },
    {
      path: '/portfolio/:id',
      name: 'projectDetailsView',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/portfolio/ProjectDetailsView.vue'),
      props: true,
    },
    // {
    //   path: '/portfolio/:id',
    //   name: 'projectDetailsView',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/portfolio/ProjectDetailsView.vue'),
    //   props: true,
    //   meta: { transition: 'fade' }
    // },
    {
      path: '/contact',
      name: 'ContactView',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/ContactView.vue')
    },
  ],

})

export default router
