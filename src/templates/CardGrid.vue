<template>
  <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-screen-lg">
    <div
      v-for="(card, index) in cardList"
      :key="(card, index)"
      class="relative bg-brand-50 w-full h-[268px]"
    >
      <div class="flex gap-4 p-8 md:p-10 flex-col h-full justify-end">
        <h3 class="text-xl font-bold">{{ card.title }}</h3>
        <p class="font-body font-medium text-gray-950/70">
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
