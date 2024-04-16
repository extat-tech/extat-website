<template>
  <section
    class="px-8 py-24 xl:px-16 flex flex-col justify-center items-center bg-brand-50"
  >
    <!-- Container -->
    <div class="flex flex-col gap-16 max-w-7xl items-center w-full">
      <!-- Texts -->
      <div class="grid sm:grid-cols-2 w-full justify-between gap-10">
        <h1 class="text-brand-950 w-full max-w-80 text-4xl font-semibold">
          {{ title }}
        </h1>
        <p class="text-base w-full max-w-[540px] text-gray-950/70">
          {{ description }}
        </p>
      </div>
      <!-- Bento Grid -->
      <div
        class="grid md:grid-cols-2 grid-cols-1 grid-row-2 w-full min-h-[524px] gap-10"
      >
        <div
          class="md:first:row-span-2 h-auto flex gap-5"
          v-for="(service, index) in serviceList"
          :key="index"
        >
          <a
            href="/service/consultoria-financeira"
            class="focus:outline-none focus:ring-offset-2 focus:ring focus:ring-brand-950 group w-full p-8 md:p-10 cursor-pointer bg-white hover:bg-brand-700 transition-all flex flex-col justify-between"
          >
            <div class="space-y-4 w-full">
              <h3
                class="text-brand-950 group-hover:text-white text-xl font-bold"
              >
                {{ service.title }}
              </h3>
              <p class="text-gray-950/70 group-hover:text-white font-medium">
                {{ service.description }}
              </p>
            </div>
            <div
              class="rounded-full border-brand-200 border group-hover:-rotate-45 transition-all w-8 h-8 lg:w-16 lg:h-16 group-hover:bg-white bg-brand-50 text-brand-700 flex self-end mt-10 justify-center items-center"
            >
              <i :class="service.icon"></i>
            </div>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
defineOptions({
  name: 'featured-services'
})

const props = defineProps({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  serviceList: {
    type: Array,
    required: true
  }
})
</script>
