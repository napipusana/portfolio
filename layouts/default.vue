<script setup lang="ts">
import Header from '@/components/Layouts/Header.vue'
import Footer from '@/components/Layouts/Footer.vue'

</script>
<template>
   <div class="bg-gray-100 dark:bg-gray-900">
        <Header />
        <slot/>
        <Footer />
   </div>
</template>

<style scoped>
    /* .bg-grid-dots {
        background-image: radial-gradient(rgb(52, 47, 47) 1px, transparent 0.5px);
        background-size: 20px 20px;
        @apply bg-gray-950
    } */
</style>