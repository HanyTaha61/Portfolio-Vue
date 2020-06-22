<template>
  <div>
    <b-container>
        <b-carousel
        class="home_carousel"
        id="carousel-1"
        :interval="4000"
        controls
        indicators
        @sliding-start="onSlideStart"
        @sliding-end="onSlideEnd"
        >
            <b-carousel-slide
                v-for="(img,i) in 5" :key="i"
                :img-src='require(`../assets/carousel/${i+1}.webp`)'
            ></b-carousel-slide>
        </b-carousel>
    </b-container>
  </div>
</template>

<script>
  export default {
    data() {
      return {

      }
    },
    methods: {
      onSlideStart(slide) {
        this.sliding = true
      },
      onSlideEnd(slide) {
        this.sliding = false
      }
    }
  }
</script>

<style lang="scss" scoped>
.home_carousel{
    box-shadow: 20px 20px 30px #000 !important;
}
</style>
