<script setup>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
import List from './List.vue'
import ToDoForm from './ToDoForm.vue'

import { reactive } from 'vue'

let list = reactive([]);

</script>

<template>
  <ToDoForm :data="list" />
  <List :data="list" />
</template>

<style scoped>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
  }
</style>
