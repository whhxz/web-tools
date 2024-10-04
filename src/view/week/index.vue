<template>
  <div class="body">
    <div class="container">
      <span id="current">{{ weekOfYear() }}</span>
      <span>/</span>
      <span id="total">52 周</span>
    </div>
  </div>
</template>

<script setup>
const weekOfYear = () => {
  let now = new Date();
  let startYear = new Date(now.getFullYear(), 0);
  let dayOfYear = Math.floor((now - startYear) / (24 * 60 * 60 * 1000));
  return Math.floor(dayOfYear / 7) + 1;
};
</script>

<style lang="css" scoped>
.body {
  height: 100vh;
  width: 100vw;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.container {
  font-size: 28px;
}
</style>
