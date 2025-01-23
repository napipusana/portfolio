<script setup lang="ts">
import { gsap } from 'gsap';

const colorMode = useColorMode()
const isDark = computed({
  get() {
    return colorMode.value === 'dark'
  },
  set() {
    colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
  }
})

onMounted(async () => {
  await nextTick();
  
  // สร้าง Timeline
  const tl = gsap.timeline();
  
  // แอนิเมชันเริ่มต้นทีละช่วง
  tl.fromTo(
    "#content1", 
    { opacity: 0, y: 50 }, // เริ่มต้นที่โปร่งใสและเลื่อนลง
    { opacity: 1, y: 0, duration: 1 } // จบด้วยแสดงผลและกลับมาตำแหน่งเดิม
  )
  .fromTo(
    "#content2", 
    { opacity: 0, y: 30 }, 
    { opacity: 1, y: 0, duration: 0.8, stagger: 0.2 }
  )
//   .fromTo(
//     ".grid .col-span-1", 
//     { opacity: 0, scale: 0.8 }, 
//     { opacity: 1, scale: 1, duration: 1, stagger: 0.2 } // แสดงแต่ละส่วนด้วยการขยายทีละช่วง
//   )
//   .fromTo(
//     ".flex.justify-between a", 
//     { opacity: 0, x: -20 }, 
//     { opacity: 1, x: 0, duration: 0.8, stagger: 0.1 } // ไอคอน Social Media
//   );
});
</script>
<template>
   <div>
    <UContainer id="content" class="py-6 lg:py-24">
            <div id="content1" class="relative">
                <div class="absolute inset-0 flex flex-col items-center justify-center font-mono text-outline text-5xl lg:text-9xl uppercase font-bold z-0 top-24 lg:top-8">
                    <span>I'M FRONTEND</span>
                    <span>DEVELOPER</span>
                </div>
            </div>
            <div id="content2" class="grid grid-cols-1 lg:grid-cols-2 gap-8 relative z-10">
                <div class="col-span-1 flex flex-col gap-4 my-auto">
                    <div class="font-black text-2xl">Hello, World!</div>
                    <div>Welcome to my portfolio</div>
                    <div class="uppercase font-black text-4xl lg:text-7xl text-blue-700">pipusana</div>
                    <div class="uppercase font-black text-4xl lg:text-7xl">kumvongdee</div>
                </div>
                <div class="col-span-1 w-60 h-60 lg:w-[480px] lg:h-[480px] mx-auto lg:ml-auto">
                    <img class="rounded-full object-cover w-full h-full" src="@/public/img/profile.jpg" alt="pipusana">
                </div>
            </div>
            <div class="flex justify-between items-center mt-8">
                <div class="flex gap-4 items-center">
                    <div>Contact:</div>
                    <a href="https://www.facebook.com/pipusana.kumvongdee" target="_bank">
                        <img v-show="isDark" class="w-8" src="@/public/icon/facebook.png" alt="facebook"> 
                        <img v-show="!isDark" class="w-8" src="@/public/icon/facebook-black.png" alt="facebook">
                    </a>
                    <a href="https://www.instagram.com/napipusana" target="_bank">
                        <img v-show="isDark" class="w-8" src="@/public/icon/instagram.png" alt="instagram">
                        <img v-show="!isDark" class="w-8" src="@/public/icon/instagram-black.png" alt="instagram">
                    </a>
                    <a href="https://www.tiktok.com/@pipu_nana" target="_bank">
                        <img v-show="isDark" class="w-8" src="@/public/icon/tiktok.png" alt="tiktok">
                        <img v-show="!isDark" class="w-8" src="@/public/icon/tiktok-black.png" alt="tiktok">
                    </a>
                </div>
                <a 
                    href="mailto:napipusana@gmail.com" 
                    class="flex gap-2 items-center font-bold bg-black text-white dark:bg-white dark:text-black rounded-full p-4"
                >
                    <span>Mail</span>
                    <UIcon name="i-heroicons-arrow-right-20-solid" class="w-5 h-5" />
                </a>
            </div>
        </UContainer>
        <div class="relative py-12 overflow-hidden">
            <div class="w-full top-0 bg-blue-900 h-16 lg:h-24"></div>
            <div class="flex absolute top-11 lg:top-12 left-0 whitespace-nowrap gap-2 lg:gap-4 bg-black text-white uppercase -rotate-2 text-sm lg:text-2xl py-4 lg:py-6 font-bold tracking-wide">
                <span class="text-blue-500">developer</span>-
                <span>designer</span>-
                <span class="text-blue-500">front end</span>-
                <span>nuxtjs</span>-
                <span class="text-blue-500">vue</span>-
                <span>web app</span>-
                <span class="text-blue-500">nuxtui</span>-
                <span>tailwind</span>-
                <span class="text-blue-500">software developer</span>-
                <span>nuxtjs</span>
            </div>
        </div>
   </div>
</template>

<style scoped>
.text-outline{
    /* transform: translate3d(-50%, -50%, 0); */
    text-fill-color: transparent;
    text-stroke: 1px rgb(204, 201, 201);
    -webkit-text-fill-color: transparent;
    -webkit-text-stroke: 1px rgb(204, 201, 201);
    -moz-text-fill-color: transparent;
}
</style>