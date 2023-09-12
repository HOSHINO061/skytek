<script setup>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
import { ref } from 'vue'

const { data } = defineProps({
  data: Array
});
  
const uItem = ref("");
const uTime = ref("");

const addItem = () => {
  if (uItem.value == "" || uTime.value == "") return;

  const lastId = data.at(-1) ? data.at(-1).id : -1;
  data.push({
    id: lastId + 1,
    item: uItem.value,
    time: uTime.value,
    completeOrNot: false
  });
  uItem.value = "";
  uTime.value = "";
};
</script>

<template>
  <div>
    <input type="text" v-model="uItem" placeholder="新增項目" />
    <input type="text" v-model="uTime" placeholder="期限" @keydown.enter="addItem" />
    <input type="button" value="新增" @click="addItem" />
  </div>
</template>
