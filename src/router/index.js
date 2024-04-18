import { createRouter, createWebHistory } from 'vue-router'

import { homeRoutes } from './routes/home-routes/index'
import { loginRoutes } from './routes/login-routes'
import { errorRoutes } from './routes/not-found-routes'
import { playgroundRoutes } from './routes/playground-routes'
import { ServiceRoutes } from './routes/service-routes'

const router = createRouter({

  scrollBehavior(to, from, savedPosition) {
    // always scroll to top
    return { top: 0 };
  },

  history: createWebHistory(import.meta.env.BASE_URL),
  
  routes: [homeRoutes, loginRoutes, playgroundRoutes, ServiceRoutes].concat(
    errorRoutes
  ),

});

export default router 