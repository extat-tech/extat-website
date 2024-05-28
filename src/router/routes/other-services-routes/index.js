/** @type {import('vue-router').RouteRecordRaw} */
export const contactRoutes = {
  path: '/contact',
  name: 'contact',
  component: () => import('../../../views/Contact/index.vue')
};
