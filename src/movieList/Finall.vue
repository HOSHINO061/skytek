<script setup>
import { ref, reactive } from 'vue'

const userInput = ref("")
const result = ref({})
const hadSubmit = ref(false)
const likeList = ref([])
const dialogOpen = ref(false)

const submit = async (input) => {
  result.value = {}
  input.trim() && await fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=626e1ee7&t=${input}`)
    .then((res) => res.json())
    .then((jsonObj) => result.value = jsonObj)
    .finally(() => hadSubmit.value = true)
}

const addLikeList = (item) => likeList.value.includes(item) || likeList.value.push(item)

const delLikeList = (item) => likeList.value = likeList.value.filter((v) => v != item)

const showLikeList = () => dialogOpen.value = !dialogOpen.value

const searchDetail = (item) => {
  submit(item)
  userInput.value = item
  dialogOpen.value = false
}
</script>

<template>
  <input type="text" v-model="userInput" />
  <input type="button" value="提交" @click="submit(userInput)" />
  <figure class="result" v-if="hadSubmit">
    <div class="result__img-container">
      <img class="result__img" :src="result.Poster" />
    </div>
    <figcaption class="result__info">
      <p class="result__info-title">{{result.Title}}</p>
      <p class="result__info-plot">{{result.Plot}}</p>
      <p class="result__info-rating" v-for="rating in result.Ratings">
        {{rating.Source}}
        評分：{{rating.Value}}
      </p>
      <p class="result__info-addLike" @click="addLikeList(result.Title)">❤️</p>
    </figcaption>
  </figure>

  <div class="likeLength" @click="showLikeList()">{{likeList.length}}</div>
  <dialog class="likeDialog" :open="dialogOpen && likeList.length != 0">
    <div class="likeDialog__item" v-for="item in likeList">
      <p class="likeDialog__item-title" @click="searchDetail(item)">{{item}}</p>
      <input class="likeDialog__item-close" type="button" value="X" @click="delLikeList(item)" />
    </div>
  </dialog>
</template>

<style lang="scss">
  $fzSmall: 1rem;
  $fz: 1.2rem;
  $fzLike: 1.5rem;
  $fzLarge: 1.8rem;
  $mg: 15px;

  .result {
    display: grid;
    grid-template-columns: 30% 1fr;
    gap: 5%;
  
    &__img-container {
      display: flex;
      justify-content: center;
    }
  
    &__img {
      margin: auto;
      width: 100%;
      user-select: none;
    }
  
    &__info {
      display: flex;
      flex-direction: column;
      height: 100%;
  
      &-title {
        margin-bottom: $mg;
        font-size: $fzLarge;
      }
      &-plot {
        margin-bottom: 10px;
        font-size: $fzSmall;
        word-wrap: break-word;
      }
      &-rating {
        font-size: $fz;
      }
      &-addLike {
        margin: auto 0 0 auto;
        font-size: $fzLike;
        cursor: pointer;
        user-select: none;
      }
    }
  }

  .likeLength {
    position: fixed;
    bottom: 10px;
    left: 10px;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    font-size: $fz;
    text-align: center;
    line-height: 30px;
    background-color: pink;
    cursor: pointer;
    user-select: none;
  }

  .likeDialog {
    position: fixed;  
    bottom: 10px;
    left: 40px;
    max-height: 100px;
    overflow-y: auto;
    border: 1px gray solid;

    &::backdrop {}

    &__item {
      display: grid;
      grid-template-columns: 2fr 1fr;
      gap: 15px;

      &-title {
        cursor: pointer;
      }

      &-close {
        cursor: pointer;
        background-color: transparent;
        border: none;
        user-select: none;
      }
    }
  }
</style>