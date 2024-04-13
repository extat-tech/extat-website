<template>
  <CardGrid :cardList="items"></CardGrid>
</template>
  
<script setup>
  import { comment } from 'postcss';
import CardGrid from '../../templates/CardGrid.vue';

  defineOptions({
    name: 'playground-view'
  })
  import { ref } from 'vue';
  const visible = ref(true);
  const items = [
    {
      title: 'Card',
      description: 'Description',
      icon: 'pi pi-comment'
    },
    {
      title: 'Card',
      description: 'Description',
      icon: 'pi pi-comment'
    },
    {
      title: 'Card',
      description: 'Description',
      icon: 'pi pi-comment'
    },
    {
      title: 'Card',
      description: 'Description',
      icon: 'pi pi-comment'
    },
    {
      title: 'Card',
      description: 'Description',
      icon: 'pi pi-comment'
    }
  ]
  
</script>
  