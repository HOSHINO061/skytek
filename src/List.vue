<script setup>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'

const { data } = defineProps({
  data: Array
});
  
const changeItem = id => {
  for(let v of data) {
    if (v.id === id) v.completeOrNot = !v.completeOrNot;
  };
};

const delItem = id => data.splice(data.findIndex(v => v.id === id), 1);

</script>

<template>
  <ul>
    <li v-for="item in data" :key="item.id" :class="item.completeOrNot && 'completeCls'" class="itemCls">
      <input type="checkbox" @click="changeItem(item.id)"/>
      <span>{{item.item}}</span>
      <span>{{item.time}}</span>
      <input type="button" value="刪除" @click="delItem(item.id)" />
    </li>
  </ul>
</template>

<style scoped>
  .itemCls > * {
    margin-right: 8px
  }
  
  .completeCls {
    text-decoration: line-through;
  }
</style>
