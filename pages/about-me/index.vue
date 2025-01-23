<script setup lang="ts">
useHead({
    title: 'About me'
})
</script>
<template>
   <UContainer class="py-12">
        <div class="text-2xl lg:text-4xl font-bold text-center">
            About me
        </div>
        <div class="text-lg font-bold">
            Hobby
        </div>
        <div class="grid grid-cols-1 lg:grid-cols-4 gap-4 mt-4">
            <img class="h-full object-cover rounded" src="@/public/about-me/badminton1.jpg" alt="badminton">
            <img class="h-full object-cover rounded" src="@/public/about-me/badminton2.jpg" alt="badminton">
            <img class="h-full object-cover rounded" src="@/public/about-me/badminton3.jpg" alt="badminton">
            <img class="h-full object-cover rounded" src="@/public/about-me/badminton5.jpg" alt="badminton">
        </div>
   </UContainer>
</template>

<style>

</style>