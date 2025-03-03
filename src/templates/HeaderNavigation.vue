<template>
  <header
    class="transition-all z-30 fixed top-0 backdrop-blur-lg flex w-full items-center justify-center bg-gray-100/80 pl-6 h-[72px] shadow-sm border-brand-200"
  >
    <div class="flex justify-between items-center w-full pr-6">
      <!-- Back to Home -->
      <Logo></Logo>
      <!-- Buttons  -->
      <div class="flex gap-3 items-center">
        <PrimeButton
          size="large"
          class="hidden h-[44px] !px-4 md:block"
          @click="redirectLogin"
          label="Acesso para empresas"
        />
        <PrimeButton
          class="h-[44px] w-[44px]"
          severity="secondary"
          icon="pi pi-bars"
          @click="visible = true"
        />
      </div>
    </div>
  </header>

  <!-- Navigation -->
  <SideNavigation position="right" v-model:visible="visible" header=" ">
    <div class="flex flex-col h-full justify-between">
      <Menu :model="items">
        <template #item="{ item }">
          <router-link :to="item.route">
            <span class="flex items-center py-3 px-3 text-sm font-medium">{{
              item.label
            }}</span>
          </router-link>
        </template>
      </Menu>
      <div class="">
        <PrimeButton
          class="w-full"
          size="large"
          @click="redirectLogin"
          label="Acesso para empresas"
        />
      </div>
    </div>
  </SideNavigation>
</template>

<script setup>
import Logo from '../components/Logo.vue'
import PrimeButton from 'primevue/button'
import SideNavigation from 'primevue/sidebar'
import Menu from 'primevue/menu'
import { ref } from 'vue'

const visible = ref(false)

const redirectLogin = () => {
  window.open('https://app.extat.com.br/', '_blank')
}

const items = ref([
  {
    label: 'Inicio',
    route: '/'
  },
  {
    label: 'Contato',
    route: '/contact'
  },
  {
    label: 'Serviços',
    items: [
      {
        label: 'Reestruturação Financeira',
        route: '/service/reestruturacao-financeira'
      },
      {
        label: 'Outros Serviços',
        route: '/service/outros-servicos'
      }
    ]
  }
])
</script>
