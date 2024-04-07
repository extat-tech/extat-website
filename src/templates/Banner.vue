<template>
  <section>
    <h1>{{ title }}</h1>
    <p>{{ description }}</p>
    <div>
      <ButtonPrime class="bg-blue-500 px-4 py-2 rounded-md" label="Submit"></ButtonPrime>
    </div>
  </section>
</template>

<!-- Props and Component Name -->
<script setup>

import ButtonPrime from 'primevue/button';

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
