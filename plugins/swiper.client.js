import { defineNuxtPlugin } from "#app";
import { Swiper, SwiperSlide } from "swiper/vue";

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

export default defineNuxtPlugin((NuxtApp) => {
    NuxtApp.vueApp.component('Swiper', Swiper)
    NuxtApp.vueApp.component('SwiperSlide', SwiperSlide)
})