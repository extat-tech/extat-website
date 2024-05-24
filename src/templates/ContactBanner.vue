<template>
  <section class="pt-32 pb-16 flex relative justify-center bg-gray-900">
    <!-- Container -->    
    <div class="max-w-screen-xl px-6 w-full">
      <!-- Texts -->
      <div class="flex flex-col w-full text-center gap-6 lg:gap-10">
        <h1 class="sm:text-5xl text-2xl text-white font-medium">
          {{ title }}
        </h1>
      </div>
    </div>
  </section>
</template>

<script setup>

defineOptions({
  name: 'banner'
})

const props = defineProps({
  title: {
    type: String,
    required: true
  }
})
</script>
