<template>
  <div class="bg-white dark:bg-slate-950 min-h-screen transition">
    <Navbar />
    <router-view />
    <Footer />
  </div>
</template>

<script setup>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
</script>