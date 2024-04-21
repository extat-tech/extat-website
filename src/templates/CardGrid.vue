<template>
  <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-screen-lg">
    <div
      v-for="(card, index) in cardList"
      :key="(card, index)"
      class="relative bg-brand-50 w-full md:h-[268px]"
    >
      <div class="flex gap-4 p-10 md:p-10 flex-col h-full justify-end">
        <h3 class="mt-7 text-brand-900 group-hover:text-white md:text-xl font-bold">{{ card.title }}</h3>
        <p class=" h-16 text-gray-950/70 group-hover:text-white text-sm md:text-base">
          {{ card.description }}
        </p>
      </div>
      <div
        class="absolute bg-brand-200 w-10 h-10 top-0 flex justify-center items-center"
      >
        <i class="text-2xl text-brand-700" :class="card.icon"></i>
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
