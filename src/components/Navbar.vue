<template>
  <nav
    ref="menuRef"
    class="fixed top-0 left-0 w-full bg-white/80 dark:bg-slate-900/80 backdrop-blur border-b border-gray-200 dark:border-slate-800 z-50"
  >
    <div
      class="container mx-auto px-6 py-4 flex justify-between items-center"
    >

      <!-- Logo -->
      <div class="flex items-center gap-3">

        <div
          class="w-10 h-10 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 flex items-center justify-center text-white font-bold"
        >
          L
        </div>

        <div>
          <h1 class="text-2xl font-bold text-blue-600 dark:text-cyan-400">
            LMIS
          </h1>

          <p class="text-xs text-gray-500 dark:text-slate-400">
            {{ $t('nav.laboratory') }}
          </p>
        </div>

      </div>

      <!-- Desktop Menu -->
      <div
        class="hidden lg:flex items-center gap-3 bg-gray-200 dark:bg-slate-800 p-2 rounded-2xl"
      >

        <a
          v-for="item in menus"
          :key="item.href"
          :href="item.href"
          @click.prevent="scrollToSection(item.href)"
          class="px-5 py-3 rounded-xl text-sm font-medium transition-all duration-300 hover:bg-white hover:shadow dark:hover:bg-slate-700 dark:text-white"
        >
          {{ item.label }}
        </a>

      </div>

      <!-- Right Actions -->
      <div class="flex items-center gap-3">

        <!-- Language -->
        <button
          @click="toggleLang"
          class="px-4 py-2 rounded-xl bg-gray-100 dark:bg-slate-800 dark:text-white"
        >
          {{ locale === 'en' ? 'KH' : 'EN' }}
        </button>

        <!-- Dark Mode -->
        <button
          @click="toggleDark"
          class="px-4 py-2 rounded-xl bg-gray-100 dark:bg-slate-800 dark:text-white"
        >
          🌙
        </button>

        <!-- Demo Button -->
        <button
          class="hidden md:block bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-6 py-3 rounded-2xl shadow-lg hover:scale-105 transition"
        >
          {{ $t('nav.requestDemo') }}
        </button>

        <!-- Mobile Toggle -->
        <button
          @click.stop="mobileMenu = !mobileMenu"
          class="lg:hidden p-3 rounded-xl bg-gray-100 dark:bg-slate-800 dark:text-white"
        >
          ☰
        </button>

      </div>

    </div>

    <!-- Mobile Menu -->
    <div
      v-if="mobileMenu"
      class="lg:hidden px-6 pb-6"
    >

      <div
        class="bg-gray-100 dark:bg-slate-900 rounded-3xl shadow-2xl p-3 space-y-2"
      >

        <a
          v-for="item in menus"
          :key="item.href"
          :href="item.href"
          @click.prevent="scrollToSection(item.href)"
          class="block p-3 rounded-2xl bg-gray-50 dark:bg-slate-800 dark:text-white hover:bg-blue-50 dark:hover:bg-slate-700 transition"
        >
          {{ item.label }}
        </a>

      </div>

    </div>

  </nav>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import { useI18n } from 'vue-i18n'

const { locale, t } = useI18n()

const mobileMenu = ref(false)
const menuRef = ref(null)

// Dynamic Menu Translation
const menus = computed(() => [
  {
    label: t('nav.home'),
    href: '#home',
  },
  {
    label: t('nav.features'),
    href: '#features',
  },
  {
    label: t('nav.dashboard'),
    href: '#dashboard',
  },
  {
    label: t('nav.pricing'),
    href: '#pricing',
  },
  {
    label: t('nav.testimonials'),
    href: '#testimonials',
  },
  {
    label: t('nav.contact'),
    href: '#contact',
  },
])

// Toggle Language
const toggleLang = () => {
  locale.value = locale.value === 'en' ? 'km' : 'en'
}

// Toggle Dark Mode
const toggleDark = () => {
  document.documentElement.classList.toggle('dark')
}

// Smooth Scroll
const scrollToSection = (id) => {

  // close mobile menu
  mobileMenu.value = false

  const element = document.querySelector(id)

  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
    })
  }
}

// Close menu when clicking outside
const handleClickOutside = (event) => {
  if (
    mobileMenu.value &&
    menuRef.value &&
    !menuRef.value.contains(event.target)
  ) {
    mobileMenu.value = false
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onBeforeUnmount(() => {
  document.removeEventListener('click', handleClickOutside)
})
</script>