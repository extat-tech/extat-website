<template>
  <div class="bg-brand-950 flex justify-center px-8 pt-[152px] pb-24 xl:px-16">
    <div class="max-w-7xl w-full">
      <div class="flex flex-col gap-6 mb-12">
        <h1 class="w-full lg:max-w-3xl text-4xl lg:text-6xl font-medium text-white">{{ title }}</h1>
        <p class="text-xl w-full md:max-w-2xl text-brand-50/80">
          {{ subtitle }}
        </p>
      </div>
      <ScheduleCall />
    </div>
    
  </div>
</template>

<script setup>
import ScheduleCall from '../components/ScheduleCall.vue'

defineOptions({
  name: 'service-banner'
})

defineProps({
  title: {
    required: true,
    type: String
  },
  subtitle: {
    required: true,
    type: String
  }
})
</script>
