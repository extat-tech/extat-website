<template>
  <section>
    <h1>{{ title }}</h1>
    <p>{{ description }}</p>
    <div class="w-full justify-center p-10 bg-gray-200 items-center flex flex-col gap-4">
      <div class="flex flex-wrap items-center gap-2">
        <Button label="Small" icon="pi pi-check" size="small" />
        <Button label="Medium" icon="pi pi-check" />
        <Button label="Large" icon="pi pi-check" size="large" />
      </div>
      <div class="flex flex-wrap gap-2">
          <Button label="Primary" />
          <Button link label="Link" />
          <Button label="Secondary" severity="secondary" />
      </div>
      <div class="flex flex-wrap gap-2">
        <Button icon="pi pi-check" size="" aria-label="Filter" />
          <Button icon="pi pi-check" severity="secondary" aria-label="Bookmark" /> 
      </div>
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
