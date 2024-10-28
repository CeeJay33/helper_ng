import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import 'bootstrap/dist/css/bootstrap.min.css'

// import '@fortawesome/fontawesome-free/css/all.css'
// import '@/assets/tailwind/tailwind.css'

import App from '@/App.vue'
import HomeView from '@/views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import CardView from './views/CardView.vue'
import NavBar from '@/views/NavBar.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: HomeView,
      //   meta: { requiresAuth: false },
    },

    {
      path: '/about',
      component: AboutView,
      //   meta: { requiresAuth: false },
    },

    {
      path: '/card-page',
      component: CardView,
      //   meta: { requiresAuth: false },
    },

    {
      path: '/nav',
      component: NavBar,
      //   meta: { requiresAuth: false },
    },
  ],
})

// router.beforeEach(async (to, from, next) => {
//   const requiresAuth = to.matched.some(record => record.meta.requiresAuth)

//   if (requiresAuth) {
//     const authenticated = await isAuthenticated()

//     if (authenticated) {
//       next()
//     } else {
//       next('/')
//     }
//   } else {
//     next()
//   }
// })

export default router

const app = createApp(App)

app.use(router)

app.mount('#app')
