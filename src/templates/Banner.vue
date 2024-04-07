<template>
  <section>
    <h1>{{ title }}</h1>
    <p>{{ description }}</p>
    <div>
      <ButtonPrime class=" bg-primary" label="Submit"></ButtonPrime>
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
