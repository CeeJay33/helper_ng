<template>
    <div class="cardd">
  <ProgressBar/>
  </div>
   <div class="main__container">
  <Carousel :loop="true" :autoplayTimeout="3000" :slidesPerView="1" :spaceBetween="0">
    <Slide v-for="(image, index) in images" :key="index">
      <div class="carousel__item">
        <img :src="image.src" :alt="image.alt" class="carousel__image" />
        <div class="carousel__caption">{{ image.caption }}</div>
      </div>
    </Slide>

    <template #addons>
      <Navigation />
      <Pagination />
    </template>
  </Carousel>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import { Carousel, Navigation, Pagination, Slide } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'
import ProgressBar from '@/components/ProgressBar.vue'

export default defineComponent({
  name: 'CustomCarousel',
  components: {
    Carousel,
      Slide,
    ProgressBar,
    Pagination,
    Navigation,
  },
  data() {
    return {
      images: [
        { src: 'https://www.yudiz.com/codepen/expandable-animated-card-slider/pubg.jpg', alt: 'Image 1', caption: 'Beautiful Scenery 1' },
        { src: 'https://www.yudiz.com/codepen/expandable-animated-card-slider/dota-2.jpg', alt: 'Image 2', caption: 'Beautiful Scenery 2' },
        { src: 'https://www.yudiz.com/codepen/expandable-animated-card-slider/winter-3.jpg', alt: 'Image 3', caption: 'Beautiful Scenery 3' },
        // // Add more images as needed
      ],
    }
  },
  


})

</script>



<style scoped>
.carousel__item {
  margin-top: 2rem;
  position: relative;
  min-height: 500px;
  width: 100%;
  height: 100%;
  border-radius: 8px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
}

.carousel__image {
  width: 100%;
  height: 100%;
  object-fit: cover; 
  border-radius: 8px;
}

.carousel__caption {
  position: absolute;
  bottom: 0; 
  /* left: 20px; */ 
  background-color: rgba(0, 0, 0, 0.852);
  color: white;
  /* padding: 10px 20px; */
  width: 100%;
  height: 200px;
  border-radius: 4px;
  font-size: 18px;
}

.carousel__slide {
  padding: 0;
}

.carousel__prev,
.carousel__next {
  box-sizing: content-box;
  border: 5px solid rgb(136, 19, 19);
  background-color: rgba(0, 0, 0, 0.5); /* Adding background color */
  color: white;
}

.carousel__prev:hover,
.carousel__next:hover {
  background-color: rgba(136, 19, 19, 0.8);
}
</style>
