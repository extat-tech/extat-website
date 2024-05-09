/** @type {import('vue-router').RouteRecordRaw} */
export const ServiceRoutes = {
  path: '/service',
  children: [
    {
      path: 'consultoria-financeira',
      name: 'consultoriaFinanceira',
      component: () => import('../../../views/RestruturaçãoFinanceira/index.vue')
    },
    {
      path: 'indicadores-metricas',
      name: 'indicadoresMetricas',
      component: () => import('../../../views/IndicadoresChave/index.vue')
    },
    {
      path: 'treinamentos-capacitacao',
      name: 'treinamentosCapacitacao',
      component: () => import('../../../views/TreinamentosCapacitacão/index.vue')
    }
  ]
}