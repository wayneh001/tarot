<script setup>
import {ref} from 'vue';

// Mark; - Properties
let show = ref(false);
let limit = 60;
let randomNumber = 0

// Mark: - Functions
function toShowModal() {
  getRandomNumber()
  show.value = true;
}
function getRandomNumber() {
  randomNumber = Math.floor(Math.random() * Math.floor(limit));
  console.log(randomNumber);
}

function toHideModal() {
  show.value = false;
}

defineExpose({
  toShowModal,
  toHideModal
})
</script>

<template>
  <div :class="{ 'd-block': show }" class="modal" tabindex="-1" @click.stop="toHideModal">
    <div class="modal-dialog modal-xl vh-100 d-flex justify-content-center align-items-center my-0">
      <div class="row bg-white p-2 modal-container">
        <div class="col-8 p-2">
          <div class="d-flex justify-content-center align-items-center p-4 content">
            <div class="d-flex justify-content-center align-items-center bg-danger-subtle tarot-card-full">
              <h3>{{ randomNumber }}</h3>
            </div>
          </div>
        </div>
        <div class="col-4 p-2 instruction-view">
          <div class="p-4 content">
            <h3 class="mb-3">{{ randomNumber }} 卡牌名稱</h3>
            <p>卡牌說明</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.modal {
  background-color: rgba(0, 0, 0, 0.75);
}

.modal-container {
  width: 100%;
  aspect-ratio: 16/9;
  border-radius: 1rem;
}

.content {
  height: 100%;
}

.instruction-view {
  border-left: 1px solid rgba(0, 0, 0, 0.5);
}

.tarot-card-full {
  height: 30rem;
}
</style>