<template>
  <section
    id="testimonials"
    class="py-24 bg-gradient-to-b from-white to-blue-50 dark:from-slate-950 dark:to-slate-900 overflow-hidden"
  >

    <div class="container mx-auto px-6">

      <!-- Header -->
      <div class="text-center mb-20">

        <span
          class="inline-block px-5 py-2 rounded-full bg-blue-100 text-blue-600 font-semibold mb-5"
        >
          Testimonials
        </span>

        <h2 class="text-5xl lg:text-6xl font-bold dark:text-white mb-6">
          Trusted by Healthcare Professionals
        </h2>

        <p
          class="max-w-3xl mx-auto text-lg text-gray-500 dark:text-slate-400"
        >
          Discover how hospitals, laboratories, and clinics improve efficiency,
          patient care, and healthcare operations using our LMIS platform.
        </p>

      </div>

      <!-- Testimonials Grid -->
      <div class="grid lg:grid-cols-3 gap-8">

        <!-- Card -->
        <div
          v-for="item in testimonials"
          :key="item.name"
          class="group relative bg-white dark:bg-slate-800 rounded-[2rem] p-8 shadow-xl border border-gray-100 dark:border-slate-700 hover:-translate-y-3 hover:shadow-2xl transition duration-500"
        >

          <!-- Quote -->
          <div
            class="absolute top-6 right-6 text-6xl text-blue-100 dark:text-slate-700 font-bold"
          >
            "
          </div>

          <!-- Stars -->
          <div class="flex gap-1 mb-6 text-yellow-400 text-xl">
            ⭐ ⭐ ⭐ ⭐ ⭐
          </div>

          <!-- Message -->
          <p
            class="text-gray-600 dark:text-slate-300 leading-relaxed mb-8 text-lg"
          >
            {{ item.message }}
          </p>

          <!-- User -->
          <div class="flex items-center gap-4">

            <!-- Avatar -->
            <img
              :src="item.image"
              class="w-16 h-16 rounded-2xl object-cover border-4 border-blue-100 dark:border-slate-700"
            />

            <!-- Info -->
            <div>

              <h4 class="font-bold text-xl dark:text-white">
                {{ item.name }}
              </h4>

              <p class="text-blue-600 dark:text-cyan-400 font-medium">
                {{ item.role }}
              </p>

              <p class="text-gray-400 text-sm">
                {{ item.company }}
              </p>

            </div>

          </div>

        </div>

      </div>

      <!-- Stats -->
      <div
        class="grid md:grid-cols-4 gap-8 mt-24"
      >

        <div
          v-for="stat in stats"
          :key="stat.title"
          class="text-center bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-lg"
        >

          <h3
            class="text-5xl font-bold text-blue-600 dark:text-cyan-400 mb-3"
          >
            {{ stat.value }}
          </h3>

          <p class="text-gray-500 dark:text-slate-400 text-lg">
            {{ stat.title }}
          </p>

        </div>

      </div>

    </div>
  </section>
</template>

<script setup>
const testimonials = [
  {
    name: 'Dr. Sarah Johnson',

    role: 'Laboratory Director',

    company: 'Phnom Penh Medical Center',

    image:
      'https://randomuser.me/api/portraits/women/44.jpg',

    message:
      'This LMIS platform completely transformed our laboratory workflow. Reporting is now faster, more accurate, and highly automated.',
  },

  {
    name: 'Dr. Michael Chen',

    role: 'Hospital Administrator',

    company: 'Global Healthcare Hospital',

    image:
      'https://randomuser.me/api/portraits/men/32.jpg',

    message:
      'The dashboard analytics and patient tracking system significantly improved our healthcare operations and staff productivity.',
  },

  {
    name: 'Sok Dara',

    role: 'IT Manager',

    company: 'National Diagnostic Center',

    image:
      'https://randomuser.me/api/portraits/men/67.jpg',

    message:
      'Easy deployment, modern interface, and enterprise-level performance. The best laboratory management system we have used.',
  },

  {
    name: 'Dr. Emily Carter',

    role: 'Chief Medical Officer',

    company: 'Sunrise Medical Clinic',

    image:
      'https://randomuser.me/api/portraits/women/65.jpg',

    message:
      'The automated reporting and appointment system reduced manual work and improved patient satisfaction dramatically.',
  },

  {
    name: 'Chan Rithy',

    role: 'Laboratory Supervisor',

    company: 'Cambodia Health Lab',

    image:
      'https://randomuser.me/api/portraits/men/45.jpg',

    message:
      'Cloud backup, barcode integration, and real-time monitoring helped us modernize our entire laboratory process.',
  },

  {
    name: 'Dr. Lisa Brown',

    role: 'Healthcare Consultant',

    company: 'MedTech Asia',

    image:
      'https://randomuser.me/api/portraits/women/22.jpg',

    message:
      'A highly scalable healthcare solution suitable for hospitals, laboratories, and enterprise healthcare organizations.',
  },
]

const stats = [
  {
    value: '500+',
    title: 'Healthcare Organizations',
  },

  {
    value: '99.9%',
    title: 'System Uptime',
  },

  {
    value: '1M+',
    title: 'Laboratory Reports',
  },

  {
    value: '24/7',
    title: 'Technical Support',
  },
]
</script>