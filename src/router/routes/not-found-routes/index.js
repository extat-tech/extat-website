/** @type {import('vue-router').RouteRecordRaw} */
export const errorRoutes = [
  {
    path: '/:catchAll(.*)',
    name: '404',
    component: () => import('../../../views/NotFound/index.vue')
  }
]