import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ToeflView from "@/views/ToeflView.vue";
import ReadingToefl from "@/views/ReadingToefl.vue";
import { Api } from "@/apis/apiService"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/toefl',
      name: 'toefl',
      component: ToeflView
    },
    {
      path: '/toefl/reading',
      name: 'reading',
      component: ReadingToefl,
      beforeEnter: (to, from, next) => {
        // Code to be executed before entering /specific-path
        console.log('Before entering /specific-path');
        // Perform your necessary actions here
        let passageModel = Api.getToeflReading()
        console.log(passageModel)
        // Call next() to continue with the route navigation
        next();
      }
    },
  ]
})

export default router
