import { ref, computed } from 'vue';
import { defineStore } from 'pinia';

export const useCounterStore = defineStore('counter', () => {
  const all = ref([]);
  const cart = ref([]);

  
  const getAll = async () => {
   await fetch('https://www.omdbapi.com/?apikey=626e1ee7&s=lion')
    .then((res) => res.json())
    .then((jsonObj) => all.value = jsonObj.Search)
    .catch((err) => console.log(err))
  }
  
  const add = (item) => {
    if (cart.value.indexOf(item) == -1)
      cart.value = [...cart.value, item]
  }
  return { all, getAll, cart, add };
});
