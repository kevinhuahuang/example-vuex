import Vue from 'vue'
import Router from 'vue-router'
import DisplayScreen from '@/components/DisplayScreen'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'DisplayScreen',
      component: DisplayScreen
    }
  ]
})
