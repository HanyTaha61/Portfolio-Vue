<template>
  <div id="app">
    <navbar/>
    <transition enter-active-class=" animated fadeIn delay" leave-active-class="animated fadeOut" appear>
      <router-view class="routerView"/>
    </transition>
  </div>
</template>

<script>
  import navbar from './components/navbar'

  export default {
    data(){
      return{
        
      }
    },
    components:{navbar}
  }
</script>

<style>

@import url('https://fonts.googleapis.com/css2?family=Katibeh&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Reem+Kufi&display=swap');

@import 'https://use.fontawesome.com/releases/v5.11.2/css/all.css';


  body{
    /* colors */
		--primary-color: rgb(196, 69, 105);
    --primary-hexa: 196, 69, 105;
		--secondary-color: rgb(34, 166, 179);
    --tertiary-color: rgb(99, 205, 218);
    --fourth-color: rgb(34, 112, 147);
    --fourth-hexa: 34, 112, 147;
    /*--------*/
    
    color: #ccc;
  }
  .delay{
    animation-delay: 0.2s;
  }
  .routerView{
    position: absolute !important;
    width: 100%
  }
</style>
