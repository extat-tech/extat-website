/** @type {import('vue-router').RouteRecordRaw} */
export const contactRoutes = {
  path: '/contato',
  name: 'contato',
  component: () => import('../../../views/Contact/index.vue')
};
