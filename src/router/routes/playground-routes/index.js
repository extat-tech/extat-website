/** @type {import('vue-router').RouteRecordRaw} */
export const playgroundRoutes = {
  path: '/playground',
  name: 'playground',
  children: [
    {
      path: '',
      name: 'playground',
      component: () => import('../../../views/Playground/index.vue')
    }
  ]
}
