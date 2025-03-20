<script setup lang="ts">
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// const container = ref(null);
// const items = ref(null);

// onMounted(() => {
//   const sections = items.value.children;
//   const totalWidth = sections.length * sections[0].offsetWidth;

//   gsap.to(items.value, {
//     x: () => -(totalWidth - window.innerWidth),
//     ease: "none",
//     scrollTrigger: {
//       trigger: container.value,
//       start: "top 5%",
//       end: () => `+=${totalWidth}`,
//       pin: true,
//       scrub: 1,
//       invalidateOnRefresh: true,
//     },
//   });
// });
useHead({
    title: 'About me'
})


</script>
<template>
   <UContainer class="py-12">
        <div class="text-2xl lg:text-4xl font-bold text-center">
            About me
        </div>
        <div class="text-lg font-bold mt-6">
            Hobby
        </div>
        <div class="grid grid-cols-1 lg:grid-cols-4 gap-4 mt-4">
            <img class="w-full lg:h-full object-cover rounded" src="@/public/about-me/badminton1.jpg" alt="badminton">
            <img class="w-full lg:h-full object-cover rounded" src="@/public/about-me/badminton2.jpg" alt="badminton">
            <img class="w-full lg:h-full object-cover rounded" src="@/public/about-me/badminton3.jpg" alt="badminton">
            <img class="w-full lg:h-full object-cover rounded" src="@/public/about-me/badminton5.jpg" alt="badminton">
        </div>
        <!-- <div class="text-lg font-bold mt-6">
            Travel
        </div> -->
        <!-- <div ref="container" class="relative h-screen overflow-hidden mt-6">
            <div ref="items" class="flex w-max">
                <div class="w-screen h-[640px] bg-red-500 flex items-center justify-center text-white text-2xl font-bold">label1</div>
                <div class="w-screen h-[640px] bg-blue-500 flex items-center justify-center text-white text-2xl font-bold">label2</div>
                <div class="w-screen h-[640px] bg-green-500 flex items-center justify-center text-white text-2xl font-bold">label3</div>
                <div class="w-screen h-[640px] bg-yellow-500 flex items-center justify-center text-white text-2xl font-bold">label4</div>
                <div class="w-screen h-[640px] bg-gray-500 flex items-center justify-center text-white text-2xl font-bold">label5</div>
            </div>
        </div> -->
        <!-- <div class="lg:block relative md:mt-20 lg:mt-6 full-width">
            <div class="z-50">
                <div class="bg-white pb-12">
                    <div class="grid md:grid-cols-5 lg:grid-cols-2 md:px-12 lg:px-24">
                        <div class="md:col-span-2 lg:col-span-1"></div>
                        <div class="md:col-span-3 lg:col-span-1">
                            <div class="text-8xl text-grey-E7E7E7">HOBBY</div>
                            <div class="flex gap-2 mt-12">
                            <div class="flex flex-col">
                                <div class="text-lg">01</div>
                                <div class="border border-blue-603EBE rounded h-1 bg-blue-603EBE"></div>
                            </div>
                            <div class="text-4xl text-grey-C2C2C2">CONNECTION</div>
                            </div>
                            <div class="text-xl mt-8">Connect with coaches directly, you can ping coaches to view profile.</div>
                        </div>
                    </div>
                </div>
                <div class="bg-gray-500 py-12">
                    <div class="grid md:grid-cols-5 lg:grid-cols-2 md:px-12 lg:px-24">
                        <div class="md:col-span-2 lg:col-span-1"></div>
                        <div class="md:col-span-3 lg:col-span-1">
                            <div class="flex gap-2">
                                <div class="flex flex-col">
                                <div class="text-lg">02</div>
                                <div class="border border-blue-603EBE rounded h-1 bg-blue-603EBE"></div>
                                </div>
                                <div class="text-4xl text-grey-C2C2C2">COLLABORATION</div>
                            </div>
                            <div class="text-xl mt-8">Work with other student athletes to  increase visability. When you share and like other players videos it will increase your visability as a player. This is the team work aspect to Surface 1.</div>
                        </div>
                    </div>
                </div>
                <div class="bg-blue-800 py-12">
                    <div class="grid md:grid-cols-5 lg:grid-cols-2 md:px-12 lg:px-24">
                        <div class="md:col-span-2 lg:col-span-1"></div>
                        <div class="md:col-span-3 lg:col-span-1">
                            <div class="flex gap-2">
                                <div class="flex flex-col">
                                <div class="text-lg">03</div>
                                <div class="border border-white rounded h-1 bg-white"></div>
                                </div>
                                <div class="text-4xl text-grey-C2C2C2">GROWTH</div>
                            </div>
                            <div class="text-xl mt-8 text-white">Resources and tools for you to get better as a student Athelte. Access to training classes, tutor sessions, etc</div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="absolute left-0 top-40 lg:top-0 lg:left-36 w-full h-full z-10">
                <div class="w-full lg:w-[520px] h-full">
                    <img class="w-full h-full object-cover" src="@/public/about-me/test.png" alt="badminton">
                </div>
            </div>
        </div> -->
   </UContainer>
</template>

<style>

</style>