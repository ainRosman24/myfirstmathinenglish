import { createRouter, createWebHistory } from 'vue-router'
import BaseLayout from '@/layouts/BaseLayout.vue'
import QuestionView from '@/views/QuestionView2.vue'
import HomeView from '@/views/HomeView.vue'
import ScoreView from '@/views/ScoreView.vue'

const routes = [
  {
    path: '/',
    component: BaseLayout,
    children: [
      {
        path: 'question',
        name: 'Questions',
        component: QuestionView,
      },

      {
        path: '/',
        name: 'Home',
        component: HomeView,
      },

      {
        path: 'score',
        name: 'Score',
        component: ScoreView,
      },
      // Add more child routes here if needed
    ],
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
