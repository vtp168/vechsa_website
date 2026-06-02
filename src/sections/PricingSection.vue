<template>
  <section id="pricing" class="py-24 bg-white dark:bg-slate-950">
    <div class="container mx-auto px-6">

      <!-- Header -->
      <div class="text-center mb-16">

        <span
          class="inline-block px-4 py-2 rounded-full bg-blue-100 text-blue-600 font-semibold mb-4"
        >
          {{ $t('pricing.badge') }}
        </span>

        <h2 class="text-5xl font-bold dark:text-white mb-6">
          {{ $t('pricing.title') }}
        </h2>

        <p class="text-gray-500 dark:text-slate-400 max-w-2xl mx-auto text-lg">
          {{ $t('pricing.subtitle') }}
        </p>

      </div>

      <!-- Pricing Cards -->
      <div class="grid lg:grid-cols-3 gap-8">

        <div
          v-for="plan in plans"
          :key="plan.title"
          :class="plan.cardClass"
        >

          <!-- Badge -->
          <div
            v-if="plan.badge"
            class="absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-400 text-slate-900 px-5 py-2 rounded-full text-sm font-bold shadow-lg"
          >
            {{ plan.badge }}
          </div>

          <!-- Title -->
          <h3
            class="text-3xl font-bold mb-4"
            :class="plan.textClass"
          >
            {{ plan.title }}
          </h3>

          <!-- Description -->
          <p
            class="mb-8"
            :class="plan.descriptionClass"
          >
            {{ plan.description }}
          </p>

          <!-- Price -->
          <div class="mb-8">

            <span
              class="text-6xl font-bold"
              :class="plan.priceClass"
            >
              {{ plan.price }}
            </span>

            <span
              v-if="plan.month"
              class="text-lg"
              :class="plan.descriptionClass"
            >
              /month
            </span>

          </div>

          <!-- Features -->
          <ul class="space-y-4 mb-10">

            <li
              v-for="feature in plan.features"
              :key="feature"
              class="flex items-center gap-3"
              :class="plan.textClass"
            >
              ✅ {{ feature }}
            </li>

          </ul>

          <!-- Button -->
          <button
            :class="plan.buttonClass"
          >
            {{ plan.button }}
          </button>

        </div>

      </div>

    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const plans = computed(() => [
  {
    title: t('pricing.starter.title'),
    description: t('pricing.starter.description'),
    price: '$99',
    month: true,

    features: [
      t('pricing.features.patient'),
      t('pricing.features.reports'),
      t('pricing.features.dashboard'),
      t('pricing.features.emailSupport'),
    ],

    button: t('pricing.starter.button'),

    cardClass:
      'relative bg-gray-50 dark:bg-slate-800 rounded-3xl p-10 shadow-xl border border-gray-200 dark:border-slate-700 hover:-translate-y-2 transition duration-300',

    textClass: 'dark:text-white',

    descriptionClass:
      'text-gray-500 dark:text-slate-400',

    priceClass: 'text-blue-600',

    buttonClass:
      'w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-2xl font-semibold transition',
  },

  {
    title: t('pricing.professional.title'),

    description: t('pricing.professional.description'),

    badge: t('pricing.professional.badge'),

    price: '$299',
    month: true,

    features: [
      t('pricing.features.multiBranch'),
      t('pricing.features.aiAnalytics'),
      t('pricing.features.realtime'),
      t('pricing.features.priority'),
    ],

    button: t('pricing.professional.button'),

    cardClass:
      'relative bg-gradient-to-br from-blue-600 to-cyan-500 rounded-3xl p-10 shadow-2xl text-white scale-105 border-4 border-cyan-300',

    textClass: 'text-white',

    descriptionClass: 'text-cyan-100',

    priceClass: 'text-white',

    buttonClass:
      'w-full bg-white text-blue-700 hover:bg-slate-100 py-4 rounded-2xl font-bold transition',
  },

  {
    title: t('pricing.enterprise.title'),

    description: t('pricing.enterprise.description'),

    price: 'Custom',
    month: false,

    features: [
      t('pricing.features.unlimited'),
      t('pricing.features.microsoft'),
      t('pricing.features.api'),
      t('pricing.features.server'),
      t('pricing.features.premium'),
    ],

    button: t('pricing.enterprise.button'),

    cardClass:
      'relative bg-slate-900 rounded-3xl p-10 shadow-xl text-white hover:-translate-y-2 transition duration-300',

    textClass: 'text-white',

    descriptionClass: 'text-slate-400',

    priceClass: 'text-cyan-400',

    buttonClass:
      'w-full bg-cyan-500 hover:bg-cyan-600 py-4 rounded-2xl font-bold transition',
  },
])
</script>