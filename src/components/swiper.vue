<template>
    <div v-swiper:mySwiper="swiperOption">
        <swiper :options='swiperOption' ref="mySwiper" >     
            <swiper-slide><img src="../assets/image/banner_large1.png" class="slide-large"/></swiper-slide>
            <swiper-slide><img src="../assets/image/banner_large2.png" class="slide-large"/></swiper-slide>
            <swiper-slide><img src="../assets/image/banner_large3.png" class="slide-large"/></swiper-slide>
        </swiper>
        <div class="swiper-pagination" slot="pagination"></div>
    </div>
</template>
<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
    components: {
        swiper,
        swiperSlide
    },
    data () {
      return {
        // banners: [ '/1.jpg', '/2.jpg', '/3.jpg' ],
        swiperOption: {
          autoplay: 5000,
          initialSlide: 1,
          loop: true,
          pagination: '.swiper-pagination',
        //   onSlideChangeEnd: swiper => {
        //     console.log('onSlideChangeEnd', swiper.realIndex)
        //   }
        }
      }
    },
    mounted() {
    //   console.log('app init')
    //   setTimeout(() => {
    //     this.banners.push('/5.jpg')
    //     console.log('banners update')
    //   }, 3000)
    //   console.log(
    //     'This is current swiper instance object', this.mySwiper, 
    //     'It will slideTo banners 3')
    //   this.mySwiper.slideTo(3)
    }
  }
</script>