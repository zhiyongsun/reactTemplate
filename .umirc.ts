import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/pages/index', title: '首页' },
    { path: '/index', component: '@/pages/index' },
  ],
  fastRefresh: {},
});
