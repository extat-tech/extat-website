<template>
  <section class="px-8 py-10 xl:px-16 flex justify-center bg-white">
    <!-- Container -->
    <div class=" grid grid-cols-1 xl:grid-cols-2 gap-10 max-w-7xl w-full"> 
      <!-- Texts -->
      <div class="flex flex-col justify-center max-w-xl gap-10">
        <h1 class="text-brand-950 text-6xl font-display font-semibold">{{ title }}</h1>
        <p class="text-xl max-w-md text-gray-950/60">{{ description }}</p>
        <!-- Buttons -->
        <div class="flex flex-wrap gap-3">
          <Button size="large" label="Nossos serviços" severity="secondary" />
          <Button size="large" label="Agende uma chamada" />
        </div>
      </div>
      <img  class="w-full max-w-[640px]" src="/src/assets/img/banner.png" alt="" srcset="">
    </div>
  </section>
</template>

<!-- Props and Component Name -->
<script setup>

  defineOptions({ 
    name: 'banner' 
  })

  const props = defineProps({
    title: { 
      type: String, 
      required: true, 
    },
    description: { 
      type: String, 
      required: true, 
    },
    primaryCallToAction: { 
      type: String, 
      required: false, 
    },
    secondaryCallToAction: { 
      type: String, 
      required: false, 
    },
  }
  )
</script>
