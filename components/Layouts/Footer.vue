<script setup lang="ts">
const colorMode = useColorMode()
const isDark = computed({
  get() {
    return colorMode.value === 'dark'
  },
  set() {
    colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
  }
})
</script>
<template>
   <UContainer>
        <hr class="gradient-line">
        <div class="grid lg:flex justify-between gap-4 py-8 items-center">
            <div class="grid lg:flex gap-4 lg:gap-24">
                <div class="flex flex-col gap-2">
                    <div class="font-bold">Phone</div>
                    <div class="text-sm">082-7801156</div>
                </div>
                <div class="flex flex-col gap-2">
                    <div class="font-bold">Email</div>
                    <div class="text-sm">napipusana@gmail.com</div>
                </div>
                <div class="flex flex-col gap-2">
                    <div class="font-bold">Contact</div>
                    <div class="flex gap-2 items-center">
                        <a href="https://www.facebook.com/pipusana.kumvongdee" target="_bank">
                            <img v-show="isDark" class="w-5" src="@/public/icon/facebook.png" alt="facebook"> 
                            <img v-show="!isDark" class="w-5" src="@/public/icon/facebook-black.png" alt="facebook">
                        </a>
                        <a href="https://www.instagram.com/napipusana" target="_bank">
                            <img v-show="isDark" class="w-5" src="@/public/icon/instagram.png" alt="instagram">
                            <img v-show="!isDark" class="w-5" src="@/public/icon/instagram-black.png" alt="instagram">
                        </a>
                        <a href="https://www.tiktok.com/@pipu_nana" target="_bank">
                            <img v-show="isDark" class="w-5" src="@/public/icon/tiktok.png" alt="tiktok">
                            <img v-show="!isDark" class="w-5" src="@/public/icon/tiktok-black.png" alt="tiktok">
                        </a>
                    </div>
                </div>
            </div>
            
            <div class="font-normal text-sm">
                © 2025 by Pipusana Kumvongdee
            </div>
        </div>
   </UContainer>
</template>

<style>
hr.gradient-line {
    border: none; /* ลบเส้นขอบ */
    height: 1px; /* ความหนาของเส้น */
    background: linear-gradient(to right, #00f, #0ff); /* ไล่สีฟ้า */
  }
</style>