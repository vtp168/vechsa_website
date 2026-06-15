<template>
  <div class="bg-white dark:bg-slate-950 min-h-screen transition" :class="fontClass">
    <Navbar />
    <router-view />
    <Footer />
  </div>
</template>

<script setup>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'

import { computed,watch
 } from 'vue'
import { useI18n } from 'vue-i18n'
const { locale } = useI18n() 
// Auto Change Font 
const fontClass = computed(() => { return locale.value === 'km' ? 'font-khmer' : 'font-sans' })
watch(
  locale,
   (newLocale) => {
     // Remove old font classes 
     document.body.classList.remove( 'font-sans', 'font-khmer' )
      // Apply new font 
       if (newLocale === 'km') 
      { document.body.classList.add( 'font-khmer' ) }
       else { document.body.classList.add( 'font-sans' ) } }
       , 
       { immediate: true, }
    )
</script>