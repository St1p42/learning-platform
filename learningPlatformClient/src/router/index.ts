import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ToeflView from "@/views/ToeflView.vue";
import ReadingToefl from "@/views/ReadingToefl.vue";
import { Api } from "@/apis/apiService"
import dataManager from '@/apis/dataManager';

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
        // // Code to be executed before entering /specific-path
        console.log('Before entering /specific-path');
        Api.getToeflReading()
        .then(data => {
          // Data has been fetched, proceed with the route
          // You can set data to your component or perform other actions
          if (data) dataManager.setData(data)
          next();
        })
        .catch(error => {
          // Handle errors if necessary
          console.error('Error:', error);
          next(false); // Prevent navigation
        });
      }
    },
  ]
})

export default router
