<script setup lang="ts">
import { ref, reactive, onMounted} from 'vue'
import { useCounterStore } from '@/stores/counter.ts'
  
const products = useCounterStore()

onMounted(() => {
  products.getAll()
})
</script>

<template>
  <main>
    <h1>商品一覽</h1>
    <p><router-link to="/cart">查看購物車</router-link></p>
    <div class="product">
        <p v-for="item in products.all">
          {{ item.Title }}
          <input type="button" value="加入" @click="products.add(item)" />
        </p>
    </div>
  </main>
</template>

<style scoped>
  .product{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
  
</style>
