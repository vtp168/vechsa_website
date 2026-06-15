<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import SlideOne from './hero/SlideOne.vue'
import SlideTwo from './hero/SlideTwo.vue'
import SlideThree from './hero/SlideThree.vue'

const current = ref(0)
const slides = [SlideOne, SlideTwo, SlideThree]

let interval

onMounted(() => {
  interval = setInterval(() => {
    current.value = (current.value + 1) % slides.length
  }, 5000)
})

onBeforeUnmount(() => clearInterval(interval))
</script>

<template>
  <section class="relative min-h-screen overflow-hidden bg-[#f5f9ff]" id="home">
    <transition name="fade" mode="out-in">
      <component :is="slides[current]" :key="current" />
    </transition>

    <div class="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3">
      <button
        v-for="(_, i) in slides"
        :key="i"
        @click="current = i"
        class="w-3 h-3 rounded-full"
        :class="current === i ? 'bg-blue-600' : 'bg-gray-300'"
      />
    </div>
  </section>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.8s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>