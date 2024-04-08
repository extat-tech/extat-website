<template>
    <header class="flex w-full items-center justify-center px-8 bg-white 0 h-20  ">
      <div class="flex justify-between items-center max-w-7xl w-full">
      <!-- Back to Home -->
        <Logo></Logo>
      <!-- Buttons  -->
        <div class="flex gap-2">
          <Button label="Acesso para empresas"/>
          <Button severity="secondary" icon="pi pi-bars" @click="visible = true" />
        </div>
      </div>
    </header>
    <!-- Navigation -->
    <Sidebar class="" position="right" v-model:visible="visible" header="Navigation">
      <span class="h-10 w-10 bg-gray-100">
          content goes here
        </span>
    </Sidebar>
</template>

<!-- Props and Component Name -->
<script setup>
import Logo from '../components/Logo.vue';
  defineOptions({ 
    name: 'header' 
  })
  import { ref } from 'vue';
  const visible = ref(false);
</script>
