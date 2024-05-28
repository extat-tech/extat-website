<template>
<div class="grid sm:grid-cols-2 lg:grid-cols-2 gap-20 mt-10">
  <div
    v-for="(card, index) in cardList"
    :key="(card, index)"
    class="w-full"
  >
  <!-- Content -->
    <div class="flex flex-col gap-10 mt-10 justify-end">
      <!-- Asset -->
      <div class="relative flex">
        <div class="bg-white/60 border-brand-200 border backdrop-blur-sm rounded-lg w-12 h-12 z-20 flex justify-center items-center">
          <i class="text-2xl text-brand-700" :class="card.icon"></i>
        </div>
        <span class="absolute order-1 -top-4 start-4 z-10 min-w-12 min-h-12 rounded-lg  bg-brand-700"></span>
        </div>
      <!-- Texts -->
        <div class="flex flex-col gap-2">
          <h3 class="text-brand-900 text-xl font-medium">{{ card.title }}</h3>
          <p class="h-fit text-balance max-w-96 leading-relaxed text-gray-950/60">{{ card.description }}</p>
        </div>
    </div>
  </div>
</div>

</template>

<script setup>
defineOptions({
  name: 'card-grid'
})

defineProps({
  cardList: {
    type: Array,
    required: true
  }
})
</script>
