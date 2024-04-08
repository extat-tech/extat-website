import { createRouter, createWebHistory } from 'vue-router'

import { homeRoutes } from './routes/home-routes/index'
import { loginRoutes } from './routes/login-routes'
import { errorRoutes } from './routes/not-found-routes'
import { playgroundRoutes } from './routes/playground-routes'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    homeRoutes,
    loginRoutes,
    playgroundRoutes
  ].concat(errorRoutes)
})

export default router
