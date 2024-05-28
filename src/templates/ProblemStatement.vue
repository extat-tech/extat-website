<template>
  <section
    class="px-3 p-24 xl:px-16 flex justify-center"
  >
    <!-- Container -->
    <div
      class="max-w-7xl w-full bg-gradient-to-b from-brand-950 to-brand-900 p-6 md:p-10 lg:p-20 rounded-[24px] md:rounded-[40px] hover:shadow-2xl  hover:scale-105 transition-all "
    >
      <!-- Texts -->
      <div
        class="flex flex-col items-start w-full gap-10"
      >
        <div class="flex flex-wrap gap-10 w-full justify-between md:flex-row items-center"> 
          <h2
          class="order-2 lg:-order-1 w-full lg:max-w-xl text-2xl md:text-4xl text-white font-medium"
          >
          {{ title }}
        </h2>
        <svg
          class="self-start order-0 w-10 lg:w-20"
          viewBox="0 0 72 76"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.0906 13.5299L25.1121 13.5264L34.3099 27.7121L41.3695 38.7256L34.3142 49.5265L24.3962 64.9549H10.2856L27.259 38.6228L11.0906 13.5299Z"
            fill="#0042FF"
          />
          <path
            d="M58.2856 64.9549L41.4145 38.7264L57.5697 13.5264H43.4601L34.3592 27.72V49.5264L44.2773 64.9549H58.2856Z"
            fill="#0042FF"
            fill-opacity="0.6"
          />
        </svg>
      </div>
      <ul class="space-y-5 text-xl">
          <li
            class="flex gap-4 items-center text-white/75"
            v-for="item in problemList"
            :key="item.title"
          >
            <span
              class="bg-[#E55C5C]/20 flex rounded-md justify-center items-center min-w-6 min-h-6 md:min-w-10 md:min-h-10"
            >
              <i class="text-[#E55C5C] text-sm md:text-2xl" :class="item.icon"></i>
            </span>
            <span class="text-sm md:text-lg">{{ item.title }}</span>
          </li>
        </ul>
        <p class="text-base md:text-xl w-full md:max-w-2xl text-white">
          {{ description }}
        </p>
        <!-- Buttons -->
        <div class="flex flex-col w-full gap-6">
          <PrimeButton
            rounded
            @click="redirectToContact"
            class="w-full sm:w-fit"
            size="large"
            label="Quero organizar meu financeiro"
            />
            <p class=" text-sm md:text-base  text-white/75">Agende uma conversa conosco clicando no botão acima.</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>

import PrimeButton from 'primevue/button';

defineOptions({
  name: 'problem-statement'
})

const redirectToContact = () => {
  window.location.href = '/contact';
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
  problemList: {
    type: Array,
    required: true
  }
})
</script>
