<script setup lang="ts">
import { ref, reactive, onMounted} from 'vue'
import { useCounterStore } from '@/stores/counter.ts'
  
const products = useCounterStore()
</script>

<template>
  <main>
    <h1>購物車</h1><router-link to="/">返回</router-link>
    <div class="product">
        <p v-for="item in products.cart">{{ item.Title }}</p>
    </div>
  </main>
</template>

<style scoped>
  .product{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
</style>
