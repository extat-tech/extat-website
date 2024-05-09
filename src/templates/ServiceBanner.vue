<template>
  <div
    class="bg-brand-950 relative flex justify-center px-6 pt-[152px] pb-24 xl:px-16"
  >
    <div class="max-w-7xl w-full">
      <div class="flex flex-col gap-6 mb-12">
        <h1
          class="w-full lg:max-w-3xl text-4xl font-medium text-white"
        >
          {{ title }}
        </h1>
        <p class="w-full md:max-w-2xl text-gray-50/70">
          {{ description }}
        </p>
      </div>
      <PrimeButton
        @click="redirectToContact"
        class="w-full sm:w-fit"
        size="large"
        label="Quero organizar meu financeiro"
        icon="pi pi-arrow-right"
        iconPos="right"
      />
    </div>
  </div>
</template>

<script setup>
import PrimeButton from 'primevue/button';

defineOptions({
  name: 'service-banner'
})

defineProps({
  title: {
    required: true,
    type: String
  },
  description: {
    required: true,
    type: String
  }
})

const redirectToContact = () => {
  window.location.href = '/contato';
}
</script>
