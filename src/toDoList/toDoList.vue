<script setup>
import List from './ListComponent.vue'
import ToDoForm from './FormComponent.vue'

import { reactive } from 'vue'

let list = reactive([]);
</script>

<template>
  <ToDoForm :data="list" />
  <List :data="list" />
</template>
