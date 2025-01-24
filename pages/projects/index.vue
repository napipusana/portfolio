<script setup lang="ts">
import { gsap } from 'gsap';

useHead({
    title: 'Projects'
})

const projects = ref([
    {
        link: 'https://rootsplatform.com/',
        image: '/projects/rootsplatform.png',
        title: 'Rootsplatform'
    },
    {
        link: 'https://www.mywawa.me/',
        image: '/projects/mywawa.png',
        title: 'MyWaWa'
    },
    {
        link: 'https://www.mywawa.me/wawaprovince',
        image: '/projects/wawaprovince.png',
        title: 'WaWaProvince'
    },
    {
        link: 'https://www.wawa-x.com/en',
        image: '/projects/wawa-x.png',
        title: 'Wawa-x'
    },
    {
        link: 'https://thaikk-shop.com/',
        image: '/projects/thaikk.png',
        title: 'Thaikk'
    },
    {
        link: 'https://staging.tcrss.com/',
        image: '/projects/tcrss.png',
        title: 'TCRSS'
    },
])

onMounted(() => {
    const projectElements = document.querySelectorAll('.project-item'); // อ้างอิง class ของแต่ละโปรเจกต์
    gsap.fromTo(
        projectElements, // อ้างอิง elements ที่จะสร้างแอนิเมชัน
        { opacity: 0, y: 50 }, // เริ่มต้นที่ opacity 0 และเลื่อนลงมาจากตำแหน่ง 50px
        {
            opacity: 1, 
            y: 0, 
            duration: 0.8, 
            stagger: 0.2 // ระยะเวลาในการแสดงผลแต่ละไอเท็ม (0.2 วินาที)
        }
    );
});
</script>
<template>
   <UContainer class="py-12">
        <div class="text-2xl lg:text-4xl font-bold text-center">
            Projects
        </div>
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
            <div v-for="project in projects" :key="project.title" class="project-item">
                <a :href="project.link" target="_bank" class="flex flex-col border-b rounded shadow h-full transition duration-300 hover:rotate-3 hover:brightness-50">
                    <img class="rounded-t" :src="project.image" alt="rootsplatform">
                    <div class="text-lg font-bold p-4">{{project.title }} </div>
                </a>
            </div>
        </div>
        
   </UContainer>
</template>

<style>

</style>