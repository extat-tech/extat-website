import { createRouter, createWebHistory } from 'vue-router'

import { homeRoutes } from './routes/home-routes/index'
import { loginRoutes } from './routes/login-routes'
import { errorRoutes } from './routes/not-found-routes'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    homeRoutes,
    loginRoutes
  ].concat(errorRoutes)
})

export default router
