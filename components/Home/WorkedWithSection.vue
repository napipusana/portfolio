<script setup lang="ts">

</script>
<template>
   <div class="py-6 lg:py-24">
        <div class="text-2xl lg:text-4xl font-black text-center">Worked With</div>
        <NuxtMarquee class="w-full h-full mt-6 lg:mt-12" speed="50" pauseOnHover autoFill>
            <div class="flex justify-between gap-6 items-center px-3">
                <img class="w-16 lg:w-20 rounded-lg object-cover" src="@/public/worked-with/kbtg.jpeg" alt="kbtg">
                <img class="w-16 lg:w-20 rounded-lg object-cover" src="@/public/worked-with/mfec.png" alt="mfec">
                <img class="w-16 lg:w-20 rounded-lg object-cover" src="@/public/worked-with/thanachart.jpg" alt="thanachart">
                <img class="w-16 lg:w-20 rounded-lg object-cover" src="@/public/worked-with/scg.png" alt="scg">
                <img class="w-16 lg:w-20 rounded-lg object-cover" src="@/public/worked-with/roots.png" alt="roots">
                <img class="w-16 lg:w-20 rounded-lg object-cover" src="@/public/worked-with/buzzebees.png" alt="buzzebees">
                <img class="w-16 lg:w-20 rounded-lg object-cover" src="@/public/worked-with/mywawa.png" alt="mywawa">
                <img class="w-16 lg:w-20 rounded-lg object-cover" src="@/public/worked-with/wawa-x.jpg" alt="wawa-x">
            </div>
        </NuxtMarquee>
    </div>
</template>

<style>

</style>