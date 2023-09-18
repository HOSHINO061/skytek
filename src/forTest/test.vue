<script setup>
import { ref, reactive } from 'vue'

const test1 = ref(0)
const test2 = ref(0)
const test3 = ref(0)
const hadChanged = ref(false)
  
const arr1 = [1, 2, 4, 5]
const arr2 = [1, 2, 3, 4]
const arr3 = [2, 3, 4, 5]
  
const testFn = (arr) => {
  hadChanged.value = true
  let result
  for (let i = 0; i < arr.length ; i++) {
    if (arr[i] != i+1) {
      result = i+1
      break
    } else {
      result = arr[i]+1
    }
  }
  return result
}

test1.value = testFn(arr1)
test2.value = testFn(arr2)
test3.value = testFn(arr3)
</script>

<template>
  <div>真的有在動{{ hadChanged }}</div>
  {{ test1 }}
  {{ test2 }}
  {{ test3 }}
</template>