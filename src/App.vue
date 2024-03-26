<script setup lang="ts">
import { onMounted } from "vue";

import { useUploadStore } from "@/store/uploadStore";

const uploadStore = useUploadStore();

onMounted(async () => {
  await window.Office.onReady(() => {
    window.Office.actions.associate("showSubTaskpane", async (event) => {
      uploadStore.reset();
      console.log("upload reset");
      await window.Office.addin.showAsTaskpane();
      event.completed();
    });
  });
});
</script>

<template>
  <div>hello world</div>
  <router-view></router-view>
</template>

<style scoped></style>
