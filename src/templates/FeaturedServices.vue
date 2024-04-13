<template>
  <section class="px-8 py-24 xl:px-16 flex flex-col justify-center items-center bg-white">
    <!-- Container -->
    <div class="flex flex-col gap-16 max-w-7xl items-center w-full">
      <!-- Texts -->
      <div class="flex w-full flex-wrap justify-between gap-10">
        <h1 class="text-brand-950 w-full max-w-80 text-4xl font-display font-semibold">{{ title }}</h1>
        <p class="text-base w-full max-w-[540px] text-gray-950/60">{{ description }}</p>
      </div>
      <div class="flex flex-col w-full gap-10">
        <div class="w-full flex flex-col gap-9">
          <div class="flex py-4  border-b gap-5" 
          v-for="(service, index) in serviceList" :key="index">
          <div class="space-y-4 w-full">
            <h3 class="text-brand-950 font-display font-bold">{{ service.title }}</h3>
            <p class="text-gray-950/60 font-medium">{{ service.description }}</p>
          </div>
          <div class="min-w-16 min-h-16 bg-gray-200 flex justify-center items-center">
            <i :class="service.icon"></i>
          </div>
        </div>
        </div>
      </div>
    </div>
  </section>
</template>

<!-- Props and Component Name -->
<script setup>
defineOptions({
  name: 'featured-services'
})

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  serviceList: {
    type: Array,
    required: true,
  },
})
</script>