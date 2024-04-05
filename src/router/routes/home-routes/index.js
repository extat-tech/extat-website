/** @type {import('vue-router').RouteRecordRaw} */
export const homeRoutes = {
  path: '/',
  name: 'home',
  children: [
    {
      path: '',
      name: 'home',
      component: () => import('../../../views/Home/index.vue'),
    }
  ]
}
