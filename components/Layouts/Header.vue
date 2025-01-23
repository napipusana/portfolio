<script setup lang="ts">
import ColorModeButton from '@/components/ColorModeButton.vue'

const route = useRoute()
const isOpen = ref(false)

</script>
<template>
   <UContainer class="">
        <div class="hidden lg:flex justify-between items-center py-8">
            <NuxtLink to='/' class="flex items-center gap-2">
                <div class="w-6 h-6 bg-blue-500 rounded-full"></div>
                <div class="text-lg font-bold">
                    <span class="text-blue-500 text-xl">P</span>ipusana 
                    <span class="text-blue-500 text-xl">K</span>unvongdee
                </div>
            </NuxtLink>
            
            <div class="flex gap-8 items-center">
                <NuxtLink 
                    to='/projects' 
                    :class="route.fullPath.includes('/projects') ? 'font-bold' : ''"
                >
                    Projects
                </NuxtLink>
                <NuxtLink 
                    to='/resume' 
                    :class="route.fullPath.includes('/resume') ? 'font-bold' : ''"
                >
                    Resume
                </NuxtLink>
                <NuxtLink 
                    to='/about-me' 
                    :class="route.fullPath.includes('/about-me') ? 'font-bold' : ''"
                >
                    About me
                </NuxtLink>
                <ColorModeButton />
            </div>
        </div>
        <div class="flex lg:hidden justify-between items-center py-6">
            <NuxtLink to="/" class="text-lg font-bold">
                <span class="text-blue-800 text-xl">P</span>ipusana 
                <span class="text-blue-800 text-xl">K</span>unvongdee
            </NuxtLink>
            <UButton
                :icon="isOpen ? 'i-heroicons-x-mark' : 'i-heroicons-bars-3'"
                color="white"
                @click="isOpen = !isOpen"
            />
        </div>
        <USlideover
            v-model="isOpen"
            :prevent-close="true"
            :transition="false"
            class="!transform-none"
        >
            <div class="h-full py-6 px-4">
                <div class="flex lg:hidden justify-between items-center">
                    <NuxtLink to='/' class="text-lg font-bold" @click="isOpen = false">
                        <span class="text-blue-800 text-xl">P</span>ipusana 
                        <span class="text-blue-800 text-xl">K</span>unvongdee
                    </NuxtLink>
                    <UButton
                        :icon="isOpen ? 'i-heroicons-x-mark' : 'i-heroicons-bars-3'"
                        color="white"
                        @click="isOpen = !isOpen"
                    />
                </div>
                <div class="flex flex-col gap-8 text-center mt-12">
                    <NuxtLink 
                        to='/projects' 
                        :class="route.fullPath.includes('/projects') ? 'font-bold' : ''"
                        @click="isOpen = false"
                    >
                        Projects
                    </NuxtLink>
                    <NuxtLink 
                        to='/resume' 
                        :class="route.fullPath.includes('/resume') ? 'font-bold' : ''"
                        @click="isOpen = false"
                    >
                        Resume
                    </NuxtLink>
                    <NuxtLink 
                        to='/about-me' 
                        :class="route.fullPath.includes('/about-me') ? 'font-bold' : ''"
                        @click="isOpen = false"
                    >
                        About me
                    </NuxtLink>
                    <div class="flex justify-center">
                        <ColorModeButton />
                    </div>
                </div>
            </div>
        </USlideover>
   </UContainer>
</template>

<style>

</style>