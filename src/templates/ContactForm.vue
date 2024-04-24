<template>
  <div
    class="grid grid-cols-1 lg:grid-cols-3 pb-24 px-6 w-full mx-auto max-w-screen-xl place-items-center items-start"
  >
    <!-- Aside -->
    <aside
      class="pt-24 bg-white w-full max-w-[360px] mr-auto flex flex-col gap-6 relative order-last lg:order-first lg:sticky top-0"
    >
      <h2 class="font-bold">Contatos</h2>
      <div class="flex flex-col gap-1">
        <span class="block font-bold text-brand-950/40">E-mail</span>
        <PrimeButton
          class="w-fit !p-0 h-8 !text-base text-brand-950"
          label="contato@extat.com.br"
          link
        />
      </div>
      <div class="flex flex-col gap-1">
        <span class="block font-bold text-brand-950/40">Whatsapp</span>
        <PrimeButton
          class="w-fit !p-0 h-8 !text-base text-brand-950"
          label="+55 98 98176-7129"
          link
        />
        <span class="block font-medium"></span>
      </div>
      <div class="flex items-center gap-4">
        <img
          class="aspect-square w-12 h-12"
          src="/src/assets/img/jozerly.png"
          alt=""
          srcset=""
        />
        <div class="flex flex-col">
          <span class="block font-bold text-brand-950/40"
            >Prefere uma chamada?</span
          >
          <PrimeButton
          class="w-fit !p-0 h-8 !text-base"
          label="Agende com o Jozerly"
          link
        />
        </div>
      </div>
    </aside>
    <!-- Form Fields -->
    <form class="grid grid-cols-2 col-span-2 gap-8 pt-20 w-full">
      <fieldset class="flex flex-col col-span-3 gap-10">
        <div class="flex flex-col gap-2 col-span-2">
          <label class="font-bold text-sm text-brand-950" for="name"
            >Meu nome é</label
          >
          <InputText
            size="large"
            placeholder="Digite seu nome"
            id="name"
            type="text"
            v-model="name"
          />
        </div>
        <div class="flex flex-col gap-2 col-span-2">
          <label class="font-bold text-sm text-brand-950" for="email"
            >Meu e-mail</label
          >
          <InputText
            placeholder="Seu melhor e-mail"
            type="email"
            size="large"
            id="email"
            v-model="email"
          />
        </div>
        <div class="flex flex-col gap-2 col-span-2 lg:col-span-1">
          <label class="font-bold text-sm text-brand-950" for="company"
            >Minha empresa é</label
          >
          <InputText
            placeholder="Nome da empresa"
            size="large"
            id="company"
            type="text"
            v-model="company"
          />
        </div>
        <div class="flex flex-col gap-2 col-span-2 lg:col-span-1">
          <label class="font-bold text-sm text-brand-950" for="phone"
            >Whatsapp</label
          >
          <InputText
            placeholder="(00) 00000-0000"
            size="large"
            id="phone"
            type="tel"
            v-model="whatsapp"
          />
        </div>
        <div class="flex flex-col gap-2 col-span-2">
          <label class="font-bold text-sm text-brand-950" for="employees"
            >Número de colaboradores da minha empresa</label
          >
          <SelectButton
            v-model="employees"
            :options="employeeOptions"
            aria-labelledby="basic"
          />
        </div>
        <div class="flex flex-col gap-2 col-span-2">
          <label class="font-bold text-sm text-brand-950" for="services"
            >Eu preciso de ajuda com</label
          >
          <SelectButton
            multiple
            v-model="service"
            :options="serviceOptions"
            aria-labelledby="basic"
          />
        </div>
        <div class="flex flex-col gap-2 col-span-2">
          <label class="font-bold text-sm text-brand-950" for="competitors"
            >Quais são seus concorrentes?</label
          >
          <InputText
            placeholder="Informe seus concorrentes"
            size="large"
            id="competitors"
            type="text"
            v-model="competitors"
          />
        </div>
        <div class="flex flex-col gap-2 col-span-2">
          <label class="font-bold text-sm text-brand-950" for="project"
            >Conte um pouco mais sobre o seu projeto</label
          >
          <Textarea
            placeholder="Descreva seu projeto aqui"
            rows="4"
            autoResize="autoResize"
            id="project"
            v-model="project"
          />
        </div>
        <PrimeButton
          class="md:w-fit"
          icon="pi pi-arrow-right"
          iconPos="right"
          size="large"
          label="Enviar informações"
        />
      </fieldset>
    </form>
  </div>
</template>

<script setup>
import InputText from 'primevue/inputtext'
import SelectButton from 'primevue/selectbutton'
import PrimeButton from 'primevue/button'

import Textarea from 'primevue/textarea'

import { ref } from 'vue'

const name = ref('')
const email = ref('')
const company = ref('')
const whatsapp = ref('')
const employees = ref(null)
const employeeOptions = ref([
  '1-10 colaboradores',
  '11-50 colaboradores',
  '51-100 colaboradores',
  '100 ou mais colaboradores'
])
const service = ref(null)
const serviceOptions = ref([
  'Reestruturação Financeira',
  'Indicadores e Métricas',
  'Treinamento e Capacitação'
])

defineOptions({
  name: 'contact-form'
})
</script>
