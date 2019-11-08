<template>
<div class="home">
  <div class="layer">
    <div class="container">
      <div class="title">
          <h1 class=" text-light">Hi, I'm</h1>   
          <h2 class="">Hany Taha</h2>
          <p class=" text-light">
            Front-End Engineer
            <span class="d-block px-2">
              &lt; Vue developer /&gt;
            </span>
          </p>
        </div>
        <div class="typer">
              <p class="fixedText text-light rounded">I can help in: </p>
              <vue-typer class="vueType"
                :text='[
                  "Optimizing web pages for maximum speed and scalability",
                  "Determining the structure and design of web pages",
                  "Striking a balance between functional and aesthetic design",
                  "Maintaining working websites",
                  "Working in a team using latest technology",
                ]'
                :repeat='Infinity'
                :pre-type-delay='100'
                :type-delay='20'
                :pre-erase-delay='3000'
                :erase-delay='10'
                erase-style='backspace'
                caret-animation='smooth'
              />
        </div>
      </div>
  </div>  
</div>
</template>

<script>
import { VueTyper } from 'vue-typer'

export default {
  components:{
    VueTyper
  }
}
</script>

<style lang='scss' scoped>
.home{
  background: url('../assets/home.jpg') no-repeat center center;
  background-size: cover;
  position: absolute;
  width: 100%;

  .layer{
    padding-top: 100px;
    position: relative;
    top: 0;
    left: 0;
    width: 100%;
    background-color: rgba(0,0,0, 0.1);
  }
    .typer{
      font-size: 2em;
      padding-bottom: 400px;

      @media(max-width: 705px){
        margin-left: 15px;
      }
      
      .fixedText{
        background-color: var(--secondary-color);
        width: fit-content;
        padding: 5px 10px;
      }

      .vueType{
      background-color: rgba(#fff,0.8);
      padding: 5px 10px;
      font-family: 'Quicksand';

      @media (max-width: 705px) {
        font-size: 1.5rem !important;
      }

      }
    }

  .title {
    padding-top: 150px;

      @media (max-width: 705px) {
      }    

    h1{
      font-size: 7rem !important;
      @media (max-width: 705px) {
        font-size: 3rem !important;
      }
    }

    h2{
      width: fit-content;
      padding: 5px;
      border-radius: 5px;

      @media (max-width: 992px) {
          font-size: 3rem !important;
      }
    }

    p{
      font-family: 'Quicksand';
      font-size: 3rem;
      color: #ccc;

      @media (max-width: 705px) {
        font-size: 2rem !important;
      }

      span{
        color: var(--primary-color);
        background: rgba(1, 1, 1, 0.4);
        width: fit-content;
      }
    }

    h1, h2{
      color: var(--secondary-color);
      font-size: 7rem;
      font-family: 'Abril Fatface';
    }

    h1, p{
      color: #ccc;
    }
  }
}


</style>