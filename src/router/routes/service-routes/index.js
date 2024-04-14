/** @type {import('vue-router').RouteRecordRaw} */
export const ServiceRoutes = {
  path: '/service',
  name: 'service',
  children: [
    {
      path: 'one',
      name: 'service-one',
      component: () => import('../../../views/Service01/index.vue')
    }
  ]
}
