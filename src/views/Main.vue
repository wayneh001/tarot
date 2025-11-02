<script setup>
import {ref} from 'vue';

// Mark: Properties
let pickCount = ref(1);
let cards = ref([]);
let pickedCardsSave = ref([]);
let randomGeneratedCards = ref([])
let cardIsShowed = ref(false);
let resultIsShowed = ref(false);

// Mark: Function
function toPick(card) {
  if (pickedCardsSave.value.length <= pickCount.value) {
    const divElement = document.getElementById(`tarot-card-${card}`)
    if (pickedCardsSave.value.indexOf(card) > -1) {
      pickedCardsSave.value.splice(pickedCardsSave.value.indexOf(card), 1);
      divElement.style.opacity = "100%";
    } else {
      if (pickedCardsSave.value.length < pickCount.value) {
        pickedCardsSave.value.push(card);
        divElement.style.opacity = "50%";
      }
    }
  }
}

function restart() {
  cardIsShowed.value = false;
  resultIsShowed.value = false;
  pickCount.value = 1;
  pickedCardsSave.value = [];
}

function randomInteger(min, max) {
  return Math.floor(min + Math.random() * (max + 1 - min));
}

function showResult() {
  while (true) {
    let isExists = false;
    let random = randomInteger(1, 60)
    for (let i = 0; i < randomGeneratedCards.value.length; i++) {
      if (random === randomGeneratedCards[i]) {
        isExists = true;
        break;
      }
    }
    if (!isExists) randomGeneratedCards.value.push(random);
    if (randomGeneratedCards.value.length === pickedCardsSave.value.length) break;
  }
  resultIsShowed.value = true;
  cardIsShowed.value = false;
}

function toReturnSrcPath(card) {
  return new URL(`../public/img/${card}.jpg`, import.meta.url).href;
}

setInterval(() => {
  if (cards.value.length < 60) {
    cards.value.push(cards.value.length + 1);
  }
}, 0);
</script>

<template>
  <div class="container-xxl p-5">
    <div v-show="cardIsShowed === false && resultIsShowed === false" class="bg-light mb-3 p-3">
      <h3 class="my-3 text-center">請選擇測算的卡片數量</h3>
      <div class="d-flex justify-content-center align-items-center w-100 p-3">
        <div v-for="n in 5" :key="n" class="form-check form-check-inline">
          <input class="form-check-input" type="radio" name="inlineRadioOptions" :id="`inlineRadio1n-${n}`" :value="n"
                 v-model="pickCount">
          <label class="form-check-label" :for="`inlineRadio1-${n}`">{{ n }}</label>
        </div>
      </div>
      <div class="d-flex justify-content-center align-items-center w-100 p-3">
        <button type="button" class="btn btn-primary w-100 w-md-25" @click.prevent="cardIsShowed = true">開始測算</button>
      </div>
    </div>
    <div v-if="cardIsShowed && pickedCardsSave.length <= pickCount">
      <ul class="row row-cols-3 row-cols-md-6 g-2 list p-0">
        <li v-for="card in cards" :key="card" class="col" @click.prevent="toPick(card)">
          <div class="pointer tarot-card" :id="`tarot-card-${card}`">
            <img src="../public/img/cover.jpg" class="image-style" alt="">
          </div>
        </li>
      </ul>
    </div>
    <div v-if="resultIsShowed">
      <ul class="row row-cols-1 row-cols-md-6 g-2 list p-0">
        <li v-for="card in randomGeneratedCards" :key="card" class="d-flex justify-content-center col">
          <div class="tarot-card-selected" :id="`tarot-card-selected-${card}`">
            <img :src="toReturnSrcPath(card)" class="image-style" :alt="card">
          </div>
        </li>
      </ul>
    </div>
    <div v-if="pickedCardsSave.length === pickCount" class="bg-light mb-3 p-3">
      <div class="d-md-flex justify-content-md-center align-items-md-center w-100 w-md-50 p-3">
        <button type="button" class="btn btn-primary w-100 mb-3 mb-md-0 me-md-3" :class="{disabled: resultIsShowed === true}" @click.prevent="showResult()">查看結果</button>
        <button type="button" class="btn btn-success w-100" @click.prevent="restart()">重新開始</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
li {
  list-style: none;
}

.tarot-card, tarot-card-selected {
  aspect-ratio: 0.64;
  border-radius: 0.1rem;
  box-shadow: 0 0 0.2rem rgba(0, 0, 0, 0.5);
}

.tarot-card:hover {
  transform: scale(1.2);
  transition: all 0.1s ease-out;
}

.pointer {
  cursor: pointer;
}

.image-style {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

</style>