<script setup>

</script>

<template>
  <div class="vh-100 d-flex justify-content-center align-items-center">
    <router-link to="/main" class="text-decoration-none fs-1 fw-bolder text-black pointer main-title">
      <div class="d-flex justify-content-center align-items-center bg-light circle-shape shadow-lg">
        <div class="main-title-label">開始測算</div>
      </div>
    </router-link>
  </div>
</template>

<style scoped>
.main-title:hover {
  transform: scale(1.05);
  transition: all 0.5s ease-out;
}

.circle-shape {
  width: 25vw;
  aspect-ratio: 1;
  border-radius: 25vw;
  border: 4px solid #000;
}

.main-title-label:hover {
  transform: scale(1.25);
  transition: all 0.5s ease-out;
}
</style>