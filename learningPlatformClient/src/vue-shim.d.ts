declare module "*.vue" {
  import { defineComponent } from "vue";
  const component: ReturnType<typeof defineComponent>;
  export default component;
}
// import Vue from 'vue'
// import Router from 'vue-router'
// import Home from './views/Home.vue'
// import About from './views/About.vue'
//
// Vue.use(Router)
//
// export default new Router({
//     routes: [
//         {
//             path: '/',
//             name: 'home',
//             component: Home,
//         },
//         {
//             path: '/about',
//             name: 'about',
//             component: About,
//         },
//     ],
// });