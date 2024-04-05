/** @type {import('vue-router').RouteRecordRaw} */
export const loginRoutes = {
  path: '/login',
  name: 'login',
  children: [
    {
      path: '',
      name: 'login',
      component: () => import('../../../views/Login/index.vue'),
    }
  ]
}
