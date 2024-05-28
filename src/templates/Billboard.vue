<template>
  <section class="px-6 py-24 flex justify-center  bg-white">
    <!-- Container -->
    <!-- Texts -->
    <div
    class="rounded-2xl flex flex-col items-center hover:shadow-2xl  hover:scale-105 transition-all bg-brand-700 p-6 xl:p-16 justify-center gap-6"
    >
    <h3 class="text-white w-full text-center text-pretty lg:max-w-2xl text-xl md:text-2xl font-medium">
      {{ title }}
    </h3>
    <p class="text-white/80 max-w-xl text-center">{{ description }}</p>
    <PrimeButton
    @click="redirectToContact"
    severity="secondary"
    class="w-full lg:w-fit"
    size="large"
    label="Quero organizar meu financeiro"
    rounded
    />

    </div>
  </section>
</template>

<script setup>
import PrimeButton from 'primevue/button';

const redirectToContact = () => {
  window.location.href = '/contato';
}

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
