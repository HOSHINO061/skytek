<script setup>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
import { ref, reactive } from 'vue'

const uItem = ref("");
const uTime = ref("");

let id = 0;

let list = reactive([
  {
    id: id++,
    item: "上班",
    time: "all the time",
    completeOrNot: false
  }
]);

const addItem = () => {
  if (uItem.value == "" || uTime.value == "") return;
  
  list.push({
    id: id++,
    item: uItem.value,
    time: uTime.value,
    completeOrNot: false
  });
  uItem.value = "";
  uTime.value = "";
};

const changeItem = id => {
  for(let v of list) {
    if (v.id === id) v.completeOrNot = !v.completeOrNot;
  };
};

const delItem = id => list.splice(list.findIndex(v => v.id === id), 1);

</script>

<template>
  <div>
    <input type="text" v-model="uItem" placeholder="新增項目" />
    <input type="text" v-model="uTime" placeholder="期限" />
    <input type="button" value="新增" @click="addItem" />
  </div>
  <ul>
    <li v-for="item in list" :key="item.id" :class="item.completeOrNot && 'completeCls'" class="itemCls">
      <input type="checkbox" @click="changeItem(item.id)"/>
      <span>{{item.item}}</span>
      <span>{{item.time}}</span>
      <input type="button" value="刪除" @click="delItem(item.id)" />
    </li> 
  </ul>
</template>

<style scoped>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
  }

  .itemCls > * {
    margin-right: 8px
  }
  
  .completeCls {
    text-decoration: line-through;
  }
</style>
