<template>
  <section class="relative min-h-screen overflow-hidden" id="home">

    <!-- Slides -->
    <div
      v-for="(slide, index) in slides"
      :key="index"
      class="absolute inset-0 transition-opacity duration-1000"
      :class="currentSlide === index ? 'opacity-100 z-10' : 'opacity-0 z-0'"
    >

      <!-- Background Image -->
      <div
        class="absolute inset-0 bg-cover bg-center scale-105"
        :style="{
          backgroundImage: `url(${slide.image})`
        }"
      ></div>

      <!-- Dark Overlay -->
      <div class="absolute inset-0 bg-black/60"></div>

      <!-- Content -->
      <div class="relative min-h-screen flex items-center">
        <div
          class="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center"
        >

          <!-- Left Content -->
          <div>
            <h1 class="text-5xl lg:text-7xl font-bold text-white mb-6">
              {{ slide.title }}
            </h1>

            <p class="text-xl text-gray-200 mb-8 max-w-xl">
              {{ slide.subtitle }}
            </p>

            <button
              class="bg-white text-blue-900 px-8 py-4 rounded-2xl font-bold hover:scale-105 transition"
            >
              {{ slide.button }}
            </button>
          </div>

          <!-- Right Card -->
          <div
            class="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl shadow-2xl p-10 text-white"
          >

            <div class="grid grid-cols-2 gap-4">

              <div class="bg-white/10 rounded-2xl p-6">
                <p class="text-gray-300">Patients</p>
                <h3 class="text-4xl font-bold">
                  {{ slide.patients }}
                </h3>
              </div>

              <div class="bg-white/10 rounded-2xl p-6">
                <p class="text-gray-300">Tests</p>
                <h3 class="text-4xl font-bold">
                  {{ slide.tests }}
                </h3>
              </div>

              <div
                class="col-span-2 bg-black/30 rounded-2xl p-10 text-center text-2xl font-bold"
              >
                {{ slide.analytics }}
              </div>

            </div>

          </div>

        </div>
      </div>

    </div>

    <!-- Navigation Dots -->
    <div
      class="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex gap-3"
    >
      <button
        v-for="(slide, index) in slides"
        :key="index"
        @click="currentSlide = index"
        class="w-4 h-4 rounded-full transition-all duration-300"
        :class="
          currentSlide === index
            ? 'bg-white scale-125'
            : 'bg-white/40'
        "
      />
    </div>

    <!-- Prev -->
    <button
      @click="prevSlide"
      class="absolute left-5 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 text-white p-4 rounded-full backdrop-blur"
    >
      ❮
    </button>

    <!-- Next -->
    <button
      @click="nextSlide"
      class="absolute right-5 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 text-white p-4 rounded-full backdrop-blur"
    >
      ❯
    </button>

  </section>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const currentSlide = ref(0)

const slides = [
  {
    title: 'Modern Laboratory Management',
    subtitle: 'Fast, secure and intelligent healthcare system.',
    button: 'Get Demo',
    patients: '1,245',
    tests: '3,540',
    analytics: 'Dashboard Analytics',
    image:
      'https://images.unsplash.com/photo-1666214280391-8ff5bd3c0bf0?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?q=80&w=1600&auto=format&fit=crop',
  },

  {
    title: 'Smart Patient Tracking',
    subtitle: 'Monitor patients and test results in real time.',
    button: 'Explore',
    patients: '2,430',
    tests: '5,890',
    analytics: 'Patient Monitoring',
    image:
      'https://plus.unsplash.com/premium_photo-1681995161394-ddd007a79b4b?q=80&w=1154&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?q=80&w=1600&auto=format&fit=crop',
  },

  {
    title: 'Advanced Medical Reports',
    subtitle: 'Generate powerful laboratory reports instantly.',
    button: 'Start Now',
    patients: '4,120',
    tests: '8,200',
    analytics: 'Medical Reporting',
    image:
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1600&auto=format&fit=crop',
  },
]

const nextSlide = () => {
  currentSlide.value =
    (currentSlide.value + 1) % slides.length
}

const prevSlide = () => {
  currentSlide.value =
    (currentSlide.value - 1 + slides.length) % slides.length
}

// Auto Slide
let interval = null

onMounted(() => {
  interval = setInterval(() => {
    nextSlide()
  }, 5000)
})

onBeforeUnmount(() => {
  clearInterval(interval)
})
</script>