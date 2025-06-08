<script setup>
import {onMounted, ref} from 'vue';
import CModal from '../components/CModal.vue';

// Mark: Properties
const modal = ref();
let cards = ref([]);

// Mark: Function
function flop() {
  modal.value?.toShowModal();
}

setInterval(() => {
  if (cards.value.length < 60) {
    cards.value.push(cards.value.length + 1);
  }
}, 100);
</script>

<template>
  <div class="container-xxl p-5">
    <transition-group name="card" class="row row-cols-12 g-2 list p-0" tag="ul">
      <li v-for="card in cards" :key="card" class="col" @click.prevent="flop()">
        <div class="p-2 bg-danger-subtle pointer tarot-card"/>
      </li>
    </transition-group>
    <c-modal ref="modal"/>
  </div>
</template>

<style scoped>
li {
  list-style: none;
}

.row-cols-12 > * {
  flex: 0 0 auto;
  width: 8.33333334%;
}

.card-enter-active {
  opacity: 0;
  transform: translateX(100%);
}

.card-enter-to {
  opacity: 1;
  transform: translateX(0);
  transition: all 0.4s;
}

.card-enter-active {
  opacity: 0;
  transform: translateX(100%);
}

.card-enter-to {
  opacity: 1;
  transform: translateX(0);
  transition: all 0.4s;
}
</style>