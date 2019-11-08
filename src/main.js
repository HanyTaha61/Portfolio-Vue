import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'bootstrap-vue/dist/bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import BootstrapVue from 'bootstrap-vue'
import 'animate.css'

Vue.use(BootstrapVue)

// increase navbar Opacity on scroll
//----------------------------------
function navbar_opacity(){
    window.addEventListener('scroll', function(){
        if(window.pageYOffset > 250){
            if(window.innerWidth < 991){
                document.getElementById('navbar').style.backgroundColor = 'rgba(1,1,1, 0.9)'
            }else{
                document.getElementById('navbar').style.backgroundColor = 'rgba(var(--fourth-hexa),0.85)'
            }
        }
        else{
            if(window.innerWidth < 991){
                document.getElementById('navbar').style.backgroundColor = 'rgba(1,1,1, 0.9)'
            }else{
                document.getElementById('navbar').style.backgroundColor = 'rgba(var(--secondary-hexa),0.5)'
            }
        }
    })
}
// ----------------------------------------------


navbar_opacity();

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
