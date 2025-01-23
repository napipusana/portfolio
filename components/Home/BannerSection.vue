<script setup lang="ts">
import {Autoplay} from "swiper/modules";
import {Swiper, SwiperSlide} from "swiper/vue";

const lists = ref([
    {
        image: '/home/designer.webp',
        title: 'Design',
    },
    {
        image: '/home/developer.webp',
        title: 'Develop',
    },
    {
        image: '/home/tester.webp',
        title: 'Test',
    },
    {
        image: '/home/improve.jpg',
        title: 'Improve',
    },
])

</script>
<template>
   <div class="py-24">
        <swiper
            :modules="[Autoplay]"
            :autoplay="{ delay: 3000, disableOnInteraction: false }"
            :centeredSlides="true"
            :loop="true"
            :slides-per-view="'auto'"
            :space-between="20"
        >
            <swiper-slide v-for="item in lists" :key="item.title">
                <div class="relative h-64 lg:h-[30rem]">
                    <!-- รูปภาพ -->
                    <div 
                        class="absolute inset-0 bg-center bg-cover brightness-50"
                        :style="`background-image: url(${item.image})`">
                    </div>
                        <!-- ข้อความ -->
                    <div class="relative text-3xl lg:text-5xl font-black flex flex-col justify-center items-center h-full text-white">
                        {{item.title}}
                    </div>
                </div>
            </swiper-slide>
        </swiper>

   </div>
</template>

<style scoped>
.swiper-slide {
    @apply w-[80%] lg:w-1/2
}
</style>