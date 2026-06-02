<template>
  <section id="features" class="py-24 bg-gray-50 dark:bg-slate-900">
    <div class="container mx-auto px-6">

      <!-- Header -->
      <div class="text-center mb-16">

        <span
          class="inline-block px-4 py-2 rounded-full bg-blue-100 text-blue-600 font-semibold mb-4"
        >
          {{ $t('features.badge') }}
        </span>

        <h2 class="text-5xl font-bold dark:text-white mb-6">
          {{ $t('features.title') }}
        </h2>

        <p
          class="max-w-3xl mx-auto text-lg text-gray-500 dark:text-slate-400"
        >
          {{ $t('features.subtitle') }}
        </p>

      </div>

      <!-- Features Grid -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

        <div
          v-for="item in items"
          :key="item.title"
          class="group bg-white dark:bg-slate-800 p-8 rounded-3xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300 border border-gray-100 dark:border-slate-700"
        >

          <!-- Icon -->
          <div
            class="w-20 h-20 rounded-3xl bg-gradient-to-r from-blue-600 to-cyan-500 flex items-center justify-center text-4xl mb-6 text-white group-hover:scale-110 transition"
          >
            {{ item.icon }}
          </div>

          <!-- Title -->
          <h3 class="text-2xl font-bold dark:text-white mb-4">
            {{ item.title }}
          </h3>

          <!-- Description -->
          <p class="text-gray-500 dark:text-slate-400 leading-relaxed">
            {{ item.description }}
          </p>

        </div>

      </div>

    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const items = computed(() => [
  {
    icon: '🧪',
    title: t('features.items.laboratory.title'),
    description: t('features.items.laboratory.description'),
  },

  {
    icon: '📊',
    title: t('features.items.analytics.title'),
    description: t('features.items.analytics.description'),
  },

  {
    icon: '💳',
    title: t('features.items.billing.title'),
    description: t('features.items.billing.description'),
  },

  {
    icon: '👨‍⚕️',
    title: t('features.items.patient.title'),
    description: t('features.items.patient.description'),
  },

  {
    icon: '🧬',
    title: t('features.items.sample.title'),
    description: t('features.items.sample.description'),
  },

  {
    icon: '📅',
    title: t('features.items.appointment.title'),
    description: t('features.items.appointment.description'),
  },

  {
    icon: '🔔',
    title: t('features.items.notification.title'),
    description: t('features.items.notification.description'),
  },

  {
    icon: '☁️',
    title: t('features.items.cloud.title'),
    description: t('features.items.cloud.description'),
  },

  {
    icon: '🔒',
    title: t('features.items.security.title'),
    description: t('features.items.security.description'),
  },

  {
    icon: '📱',
    title: t('features.items.mobile.title'),
    description: t('features.items.mobile.description'),
  },

  {
    icon: '🖨️',
    title: t('features.items.report.title'),
    description: t('features.items.report.description'),
  },

  {
    icon: '⚡',
    title: t('features.items.performance.title'),
    description: t('features.items.performance.description'),
  },
])
</script>