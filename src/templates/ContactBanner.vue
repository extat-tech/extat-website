<template>
  <section
    class="px-6 pt-[152px] pb-24 xl:px-16 flex justify-center bg-gradient-to-b from-brand-950 to-brand-900"
  >
    <!-- Container -->
    <div
      class="grid grid-cols-1 lg:grid-cols-2 place-content-start lg:place-items-center gap-20 max-w-7xl w-full"
    >
      <!-- Texts -->
      <div
        class="flex  items-center max-w-screen-sm w-full xl:text-left gap-6 lg:gap-10"
      >
        <svg
          width="72"
          height="76"
          viewBox="0 0 72 76"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.0907 13.5299L25.1121 13.5264L34.3099 27.7121L41.3695 38.7256L34.3143 49.5265L24.3962 64.9549H10.2857L27.259 38.6228L11.0907 13.5299Z"
            fill="#0042FF"
          />
          <path
            d="M58.2857 64.9549L41.4146 38.7264L57.5698 13.5264H43.4602L34.3593 27.72V49.5264L44.2773 64.9549H58.2857Z"
            fill="#0042FF"
            fill-opacity="0.6"
          />
        </svg>

        <h1
          class="w-full lg:max-w-3xl md:text-4xl text-2xl text-white font-semibold"
        >
          {{ title }}
        </h1>
      </div>
    </div>
  </section>
</template>

<script setup>
import PrimeButton from 'primevue/button'

defineOptions({
  name: 'banner'
})

const props = defineProps({
  title: {
    type: String,
    required: true
  }
})
</script>
