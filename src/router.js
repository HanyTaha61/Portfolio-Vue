import Vue from 'vue'
import Router from 'vue-router'
import home from './components/home'
import about from './components/about'
import cv from './components/cv'
import projects from './components/projects'
import contact from './components/contact'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {path:'/', component: home},
    {path: '/about', component: about},
    {path: '/cv', component: cv},
    {path: '/projects', component: projects},
    {path: '/contact', component: contact}
  ]
})
