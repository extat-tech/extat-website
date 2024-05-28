/** @type {import('vue-router').RouteRecordRaw} */
export const ServiceRoutes = {
  path: '/service',
  children: [
    {
      path: 'reestruturacao-financeira',
      name: 'reestruturacaoFinanceira',
      component: () => import('../../../views/RestruturaçãoFinanceira/index.vue')
    },
    {
      path: 'outros-servicos',
      name: 'outrosServicos',
      component: () => import('../../../views/OutrosServicos/index.vue')
    },
    {
      path: 'treinamentos-capacitacao',
      name: 'treinamentosCapacitacao',
      component: () => import('../../../views/TreinamentosCapacitacão/index.vue')
    }
  ]
}