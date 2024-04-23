<template>
  <section class="px-6 py-24 flex justify-center bg-white">
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
        class="flex flex-col bg-brand-700 p-6 xl:p-16 items-start justify-center gap-6 md:gap-10"
      >
        <h3 class="text-white w-full lg:max-w-3xl md:text-4xl text-2xl font-semibold">
          {{ title }}
        </h3>
        <p class="text-white/80">{{ description }}</p>
        <PrimeButton
            @click="redirectToContact"
            severity="secondary"
            class="w-full md:w-fit"
            size="large"
            label="Quero organizar meu financeiro"
            icon="pi pi-arrow-right"
            iconPos="right"
          />
      </div>
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
