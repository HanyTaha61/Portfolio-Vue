<template>
<div class="home">
  <div class="layer">
    <div class="container">
      <div class="title text-right">
        <h1 class=" text-light">مرحبا بكم في</h1>   
        <h3 class="">خمسة لصحتك</h3>
        <p class=" text-light">صفحة مهتمة بالصحة والجمال و الغذاء</p>
      </div>
    </div>
    <carousel-home class="carousel_home"/>
  </div>
</div>
</template>

<script>
import carouselHome from './carousel'

export default {
  components:{ carouselHome }
}
</script>

<style lang='scss' scoped>
.home{
  background: url('../assets/bg-home.jpg') no-repeat center center;
  background-size: cover;
  position: absolute;
  width: 100%;
  height: fit-content;
  direction: rtl;

  .layer{
    padding-top: 100px;
    position: relative;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0, 0.75);

    .carousel_home{
      margin-top: 150px;
      padding-bottom: 120px;

      @media (max-width) {
          
      }
    }
  }

  .title {
    padding-top: 150px;

      @media (max-width: 767px) {
      }    

    h1{
      font-family: 'Reem Kufi';
      font-size: 7rem !important;
      @media (max-width: 767px) {
        font-size: 3rem !important;
      }
    }

    h3{
      // width: fit-content;
      padding: 5px;
      border-radius: 5px;
      font-size: 4rem !important;
      font-family: 'Reem Kufi';


      @media (max-width: 992px) {
          font-size: 3rem !important;
      }
    }

    p{
      font-size: 3rem;
      color: #ccc;
      font-family: 'Reem Kufi';


      @media (max-width: 705px) {
        font-size: 2rem !important;
      }

      span{
        color: var(--primary-color);
        background: rgba(1, 1, 1, 0.4);
        width: fit-content;
      }
    }

    h1, h3{
      color: var(--secondary-color);
      // font-size: 7rem;
      // font-family: 'Abril Fatface';
    }

    h1, p{
      color: #ccc;
    }
  }
}


</style>