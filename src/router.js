import Vue from 'vue'
import Router from 'vue-router'
import home from './components/home'
import weight from './components/weight'
import water from './components/water'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {path:'/', component: home},
    {path: '/weight', component: weight},
    {path: '/water', component: water},
  ]
})
