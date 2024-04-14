<template>
  <div class="bg-gray-900 px-32 pt-16 pb-24">
    <div class="flex flex-col gap-6 mb-12">
      <h1 class="text-6xl font-body font-semibold text-white">{{ title }}</h1>
      <p class="text-2xl text-white font-medium font-body opacity-60">
        {{ subtitle }}
      </p>
    </div>
    <ScheduleCall />
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
