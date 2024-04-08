<template>
  <div class="flex gap-2 w-full justify-center items-center p-10">
    <Button class="w-full" label="Button Example"></Button>
    <Button class="w-full" label="Button Example"></Button>
  </div>
  
  <Sidebar v-model:visible="visible" header="Sidebar">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
  </Sidebar>
  <Button icon="pi pi-arrow-right" @click="visible = true" />
</template>
  
<script setup>
  defineOptions({
    name: 'playground-view'
  })
  import { ref } from 'vue';
  const visible = ref(true);
  
</script>
  