<template>
  <div
    class="grid grid-cols-1 lg:grid-cols-3 pb-24 px-6 w-full mx-auto max-w-screen-xl place-items-center items-start"
  >
    <!-- Aside -->
    <aside
      class="pt-24 bg-white w-full max-w-[360px] mr-auto flex flex-col gap-6 relative order-last lg:order-first lg:sticky top-0"
    >
      <h2 class="font-medium">Contatos</h2>
      <div class="flex flex-col gap-1">
        <span class="block font-medium text-brand-950/40">E-mail</span>
        <PrimeButton
          class="w-fit !p-0 h-8 !text-base text-brand-950"
          label="contato@extat.com.br"
          link
        />
      </div>
      <div class="flex flex-col gap-1">
        <span class="block font-medium text-brand-950/40">Whatsapp</span>
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
          <span class="block font-medium text-brand-950/40"
            >Prefere uma chamada?</span
          >
          <PrimeButton
              @click="redirectCall"
              class="!px-0 rounded-none w-fit h-fit my-1 !text-base !py-0 text-brand-700"
              link
              label="Agende com o Jozerly"
            >
            </PrimeButton>
        </div>
      </div>
    </aside>
    <!-- Form Fields -->
    <form class="grid grid-cols-2 col-span-2 gap-8 pt-20 w-full">
      <fieldset class="flex flex-col col-span-3 gap-10">
        <div class="flex flex-col gap-2 col-span-2">
          <label class="font-medium text-sm text-brand-950" for="name"
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
          <label class="font-medium text-sm text-brand-950" for="email"
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
          <label class="font-medium text-sm text-brand-950" for="company"
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
          <label class="font-medium text-sm text-brand-950" for="phone"
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
          <label class="font-medium text-sm text-brand-950" for="employees"
            >Número de colaboradores da minha empresa</label
          >
          <SelectButton
            v-model="employees"
            :options="employeeOptions"
            aria-labelledby="basic"
          />
        </div>
        <div class="flex flex-col gap-2 col-span-2">
          <label class="font-medium text-sm text-brand-950" for="services"
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
          <label class="font-medium text-sm text-brand-950" for="competitors"
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
          <label class="font-medium text-sm text-brand-950" for="project"
            >Conta pra gente, como poderíamos lhe ajudar?</label
          >
          <Textarea
            placeholder="Descreva seu projeto aqui"
            rows="4"
            autoResize="autoResize"
            id="project"
            v-model="project"
          />
        </div>
        <Toast position="top-right">
          <template #message>
            <div class="flex gap-2 flex-col md:flex-row md:items-center w-full">
              <div
                class="bg-green-200 h-8 w-8 md:min-h-14 md:min-w-14 flex items-center justify-center"
              >
                <i class="pi pi-check text-green-700"></i>
              </div>
              <div
                class="flex flex-col items-center h-full w-full px-8 md:pb-0 pb-4 md:px-6"
              >
                <span class="truncated w-full text-sm font-medium"
                  >Informações enviadas</span
                >
                <span
                  class="truncated w-full text-sm font-medium text-brand-950/70"
                  >Consulte seu e-mail para mais informações</span
                >
              </div>
            </div>
          </template>
        </Toast>
        <PrimeButton
          :loading="isLoading"
          class="md:w-fit"
          rounded
          size="large"
          label="Enviar informações"
          @click="sendEmail"
        />
      </fieldset>
    </form>
  </div>
</template>

<script setup>
import InputText from 'primevue/inputtext'
import SelectButton from 'primevue/selectbutton'
import PrimeButton from 'primevue/button'
import Toast from 'primevue/toast'
import Textarea from 'primevue/textarea'
import { ref } from 'vue'
import { useToast } from 'primevue/usetoast'
import axios from 'axios'

defineOptions({
  name: 'contact-form'
})

const toast = useToast()

const isLoading = ref(false)
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
const competitors = ref('')
const project = ref('')

const sendEmail = async () => {
  try {
    isLoading.value = true
    await axios({
      method: 'post',
      url: 'https://extat-api.onrender.com/sendEmail',
      data: {
        params: {
          name: name.value,
          email: email.value,
          company: company.value,
          whatsapp: whatsapp.value,
          employees: employees.value,
          service: service.value,
          competitors: competitors.value,
          project: project.value
        }
      }
    })
    toast.add({
      severity: 'success',
      summary: 'Informações enviadas',
      detail: 'Consulte seu e-mail para mais detalhes'
    })
  } catch (error) {
    toast.add({
      severity: 'error',
      summary: 'Error ao enviar e-mail. :/',
      detail: 'error'
    })
  } finally {
    isLoading.value = false
  }
}

const redirectCall = () => {
  window.open('https://calendly.com/extat/conversa-para-falar-da-sua-empresa', '_blank');
};

</script>
