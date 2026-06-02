<template>
  <section
    id="contact"
    class="relative py-24 overflow-hidden bg-gradient-to-br from-blue-950 via-blue-900 to-cyan-700 text-white"
  >

    <!-- Background Effects -->
    <div
      class="absolute top-0 left-0 w-96 h-96 bg-cyan-400/20 blur-3xl rounded-full"
    ></div>

    <div
      class="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/20 blur-3xl rounded-full"
    ></div>

    <div class="container relative mx-auto px-6">

      <div class="grid lg:grid-cols-2 gap-16 items-center">

        <!-- Left Content -->
        <div>

          <span
            class="inline-block px-5 py-2 rounded-full bg-white/10 border border-white/20 text-cyan-200 font-medium mb-6"
          >
            {{ $t('contact.badge') }}
          </span>

          <h2 class="text-5xl lg:text-6xl font-bold leading-tight mb-8">
            {{ $t('contact.title') }}
          </h2>

          <p class="text-cyan-100 text-xl leading-relaxed mb-10">
            {{ $t('contact.subtitle') }}
          </p>

          <!-- Contact Info -->
          <div class="space-y-6">

            <!-- Phone -->
            <div class="flex items-start gap-4">
              <div
                class="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center text-2xl"
              >
                📞
              </div>

              <div>
                <h4 class="font-bold text-xl mb-1">
                  {{ $t('contact.phone') }}
                </h4>

                <p class="text-cyan-100">
                  +855 12 345 678
                </p>
              </div>
            </div>

            <!-- Email -->
            <div class="flex items-start gap-4">
              <div
                class="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center text-2xl"
              >
                ✉️
              </div>

              <div>
                <h4 class="font-bold text-xl mb-1">
                  {{ $t('contact.email') }}
                </h4>

                <p class="text-cyan-100">
                  info@lmis-system.com
                </p>
              </div>
            </div>

            <!-- Location -->
            <div class="flex items-start gap-4">
              <div
                class="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center text-2xl"
              >
                📍
              </div>

              <div>
                <h4 class="font-bold text-xl mb-1">
                  {{ $t('contact.location') }}
                </h4>

                <p class="text-cyan-100">
                  Phnom Penh, Cambodia
                </p>
              </div>
            </div>

          </div>

        </div>

        <!-- Contact Form -->
        <div
          class="bg-white/10 backdrop-blur-2xl border border-white/20 rounded-[2rem] shadow-2xl p-10"
        >

          <div class="mb-8">
            <h3 class="text-3xl font-bold mb-3">
              {{ $t('contact.formTitle') }}
            </h3>

            <p class="text-cyan-100">
              {{ $t('contact.formSubtitle') }}
            </p>
          </div>

          <form class="space-y-6">

            <!-- Name -->
            <div>
              <label class="block mb-2 text-sm font-medium text-cyan-100">
                {{ $t('contact.fullName') }}
              </label>

              <input
                type="text"
                :placeholder="$t('contact.placeholders.name')"
                class="w-full p-4 rounded-2xl bg-white/10 border border-white/20 placeholder:text-cyan-200/70 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              />
            </div>

            <!-- Email -->
            <div>
              <label class="block mb-2 text-sm font-medium text-cyan-100">
                {{ $t('contact.emailAddress') }}
              </label>

              <input
                type="email"
                :placeholder="$t('contact.placeholders.email')"
                class="w-full p-4 rounded-2xl bg-white/10 border border-white/20 placeholder:text-cyan-200/70 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              />
            </div>

            <!-- Organization -->
            <div>
              <label class="block mb-2 text-sm font-medium text-cyan-100">
                {{ $t('contact.organization') }}
              </label>

              <input
                type="text"
                :placeholder="$t('contact.placeholders.organization')"
                class="w-full p-4 rounded-2xl bg-white/10 border border-white/20 placeholder:text-cyan-200/70 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              />
            </div>

            <!-- Message -->
            <div>
              <label class="block mb-2 text-sm font-medium text-cyan-100">
                {{ $t('contact.message') }}
              </label>

              <textarea
                rows="5"
                :placeholder="$t('contact.placeholders.message')"
                class="w-full p-4 rounded-2xl bg-white/10 border border-white/20 placeholder:text-cyan-200/70 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              ></textarea>
            </div>

            <!-- Button -->
            <button
              class="w-full bg-white text-blue-900 py-4 rounded-2xl font-bold text-lg hover:scale-[1.02] hover:bg-cyan-50 transition duration-300 shadow-xl"
            >
              {{ $t('contact.send') }}
            </button>

          </form>

        </div>

      </div>

    </div>
  </section>
</template>