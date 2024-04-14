<template>
  <section class="px-8 py-24 flex justify-center bg-white">
    <!-- Container -->
    <div class="flex flex-col-reverse xl:flex-row max-w-screen-xl">
      <img
        class="h-full w-full xl:w-1/2"
        src="/src/assets/img/billboard.png"
        alt=""
        srcset=""
      />
      <!-- Texts -->
      <div
        class="flex flex-col bg-brand-700 p-10 xl:p-16 items-start justify-center gap-6 md:gap-10"
      >
        <h3 class="text-white text-2xl md:text-4xl font-medium">
          {{ title }}
        </h3>
        <p class="text-white/80">{{ description }}</p>
        <ScheduleCall class="w-full md:w-fit" severity="secondary" />
      </div>
    </div>
  </section>
</template>

<script setup>
import ScheduleCall from '../components/ScheduleCall.vue'

defineOptions({
  name: 'company-features'
})

const props = defineProps({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  }
})
</script>
