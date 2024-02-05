<script setup lang="ts">
import { onMounted } from "vue";

onMounted(async () => {
  await window.Office.onReady();
});
</script>

<template>
  <div>hello world</div>
  <router-view></router-view>
  <p>hogehoge</p>
</template>

<style scoped></style>
