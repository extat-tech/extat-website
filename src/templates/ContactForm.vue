<template>
    <div class="grid grid-cols-2 sticky top-0 overflow-auto">
        <div class="p-10 h-fit  border">
            <h1>Contatos</h1>
        </div>
        <div class="grid grid-cols-2 gap-8 p-10">
            <div class="flex flex-col gap-2 col-span-2">
                <label class="font-medium text-brand-950" for="name">Meu nome é</label>
                <InputText size="large" placeholder="Digite seu nome" id="name" type="text" v-model="value" />
            </div>
            <div class="flex flex-col gap-2 col-span-2">
                <label class="font-medium text-brand-950" for="name">Meu e-mail</label>
                <InputText  placeholder="Seu melhor e-mail" type="email" size="large" id="name" v-model="value" />
            </div>
            <div class="flex flex-col gap-2">
                <label class="font-medium text-brand-950" for="name">Minha empresa é</label>
                <InputText placeholder="Seu melhor e-mail" size="large" id="name" type="text" v-model="value" />
            </div>
            <div class="flex flex-col gap-2">
                <label class="font-medium text-brand-950" for="name">Whatsapp</label>
                <InputText placeholder="(00) 00000-0000"  size="large" id="name" type="text" v-model="value" />
            </div>
            <div class="flex flex-col gap-2 col-span-2">
                <label class="font-medium text-brand-950" for="name">Número de colaboradores da minha empresa</label>
                <SelectButton v-model="option" :options="options" aria-labelledby="basic" />
            </div>
            <div class="flex flex-col gap-2 col-span-2">
                <label class="font-medium text-brand-950" for="name">Eu preciso de ajuda com</label>
                <SelectButton v-model="option" :options="services" aria-labelledby="basic" />
            </div>
            <PrimeButton class="col-span-2" label="Enviar informações"></PrimeButton>
           
        </div>
    </div>
</template>

<script setup>

import InputText from 'primevue/inputtext';
import SelectButton from 'primevue/selectbutton';
import PrimeButton from 'primevue/button';

import { ref } from 'vue';

const value = ref(null);
const option = ref('Off');
const options = ref(['1-10 colaboradores','11-50 colaboradores', '51-100 colaboradores', '100 ou mais colaboradores']);
const services = ref(['Reestruturação Financeira','Indicadores e Métricas', 'Treinamento e Capacitação']);

defineOptions ({
    name:'contact-form'
})

</script>
