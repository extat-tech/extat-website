/** @type {import('vue-router').RouteRecordRaw} */
export const ServiceRoutes = {
  path: '/service',
  children: [
    {
      path: 'consultoria-financeira',
      name: 'consultoriaFinanceira',
      component: () => import('../../../views/Service01/index.vue')
    },
    {
      path: 'indicadores-metricas',
      name: 'indicadoresMetricas',
      component: () => import('../../../views/Service02/index.vue')
    },
    {
      path: 'treinamentos-capacitacao',
      name: 'treinamentosCapacitacao',
      component: () => import('../../../views/Service03/index.vue')
    }
  ]
}