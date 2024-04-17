<template>
  <section class="px-8 py-24 xl:px-16 flex justify-center bg-brand-950">
    <!-- Container -->
    <div
      class="flex flex-col max-w-7xl justify-start md:justify-center items-center w-full"
    >
      <!-- Texts -->
      <div
        class="flex flex-col justify-start md:justify-center items-center max-w-4xl"
      >
        <!-- Quote -->
        <h3 class="text-white md:text-center text-3xl md:text-5xl">
          {{ quote }}
        </h3>
        <div class="grid mt-10 gap-4 w-full md:place-items-center">
          <Avatar
            image="/client.png"
            class="w-16 h-16"
            size="xlarge"
            shape="circle"
          />
          <p
            class="text-xl max-w-md w-full md:text-center font-medium text-white"
          >
            {{ client }}
          </p>
          <p class="max-w-md w-full md:text-center text-base text-white/70">
            {{ role }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import Avatar from 'primevue/avatar'

defineOptions({
  name: 'banner'
})

const props = defineProps({
  quote: {
    type: String,
    required: true
  },
  client: {
    type: String,
    required: true
  },
  role: {
    type: String,
    required: true
  }
})
</script>
