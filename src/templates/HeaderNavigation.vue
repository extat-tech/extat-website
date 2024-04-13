<template>
  <header  @scroll="manageNavBarAnimations" class=" transition-all  z-10 fixed flex w-full items-center justify-center px-8 bg-white 0 h-20  ">
    <div class="flex justify-between items-center max-w-7xl w-full">
      <!-- Back to Home -->
      <Logo></Logo>
      <!-- Buttons  -->
      <div class="flex gap-2">
        <PrimeButton @click="redirectLogin" label="Acesso para empresas" />
        <PrimeButton severity="secondary" icon="pi pi-bars" @click="visible = true" />
      </div>
    </div>
  </header>
  <!-- Navigation -->
  <SideNavigation class="" position="right" v-model:visible="visible" header="Navigation">
    <span class="h-10 w-10 bg-gray-100">
      content goes here
    </span>
  </SideNavigation>
</template>

<!-- Props and Component Name -->
<script setup>

import Logo from '../components/Logo.vue';
import PrimeButton from 'primevue/button'
import SideNavigation from 'primevue/sidebar'
import { onMounted } from 'vue';


defineOptions({
  name: 'header-navigation'
})
import { ref } from 'vue';
const visible = ref(false);
const redirectLogin = () => {
  window.open('https://extat.evolutto.com.br/', '_blank')
}

let previousScrollTop = 0;

const manageNavBarAnimations = () => {
  const header = document.querySelector("header");
  const scrollTop = document.documentElement.scrollTop || window.scrollY;

  if (scrollTop > previousScrollTop || !previousScrollTop) {
    header.style.top = "-80px";
  } else {
    header.style.top = "0";
  }

  previousScrollTop = scrollTop;
};

onMounted(() => {
  window.addEventListener('scroll', manageNavBarAnimations);
});


</script>
