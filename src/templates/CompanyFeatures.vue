<template>
  <section class="px-6 py-24 xl:px-16 flex flex-col justify-center items-center bg-white">
    <!-- Container -->
    <div class="grid grid-cols-1 gap-10 max-w-7xl w-full">
      <!-- Texts -->
      <div class="flex flex-col max-w-2xl gap-6 lg:gap-10">
        <h2 class="text-brand-950 w-full md:text-4xl text-2xl font-medium">
          {{ title }}
        </h2>
        <p class="w-full text-gray-950/70">{{ description }}</p>
        <PrimeButton
            @click="redirectToContact"
            class="w-full md:w-fit"
            size="large"
            label="Quero organizar meu financeiro"
             
             
          />
      </div>
      <CardGrid :cardList="items"></CardGrid>
    </div>
  </section>
</template>

<script setup>
import CardGrid from './CardGrid.vue'
import PrimeButton from 'primevue/button'

defineOptions({
  name: 'company-features'
})

const redirectToContact = () => {
  window.location.href = '/contato';
}

const props = defineProps({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  items: {
    type: Array,
    required: true
  }
})


</script>
