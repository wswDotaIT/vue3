const baseUrlPrefix = window.__POWERED_BY_QIANKUN__ ? "/vue3App" : "";
export const rebuildRouterPath = (path)=>{
  return `${baseUrlPrefix}${path}`
}
const routes = [
  { path: rebuildRouterPath('/'), name: 'home', component: () => import(/* webpackChunkName: "home" */ '@/views/Home') },
  { path: rebuildRouterPath('/about'), name: 'about', component: () => import(/* webpackChunkName: "about" */ '@/views/About') },
];

export default routes;
