/** @type {import('vue-router').RouteRecordRaw} */
export const ServiceRoutes = {
  path: '/service',
  name: 'service',
  children: [
    {
      path: 'consultoria-financeira',
      name: 'consultoria-financeira',
      component: () => import('../../../views/Service01/index.vue')
    },
    {
      path: 'indicadores',
      name: 'indicadores',
      component: () => import('../../../views/Service02/index.vue')
    },
    {
      path: 'capacitacao-treinamento',
      name: 'capacitacao-treinamento',
      component: () => import('../../../views/Service03/index.vue')
    }
    
  ]
}
