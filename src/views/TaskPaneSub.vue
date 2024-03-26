<script setup lang="ts">
import { onMounted, watch } from "vue";

import { useUploadStore } from "@/store/uploadStore";
import { storeToRefs } from "pinia";

const uploadStore = useUploadStore();
const { isUploaded } = storeToRefs(uploadStore);

const toggle = () => {
  if (!isUploaded.value) {
    console.log("uploading");
    uploadStore.upload();
  } else {
    console.log("resetting");
    uploadStore.reset();
  }
};

watch(
  () => uploadStore.isUploaded,
  (value) => {
    if (value) return console.log("upload済みです");
    uploadStore.upload();
    console.log("再uploadedが完了", value);
  }
);

onMounted(async () => {
  uploadStore.upload();
  console.log("初回uploadが完了");
});
</script>

<template>
  <h1>Task pane sub</h1>
  <p>{{ isUploaded }}</p>
  <button @click="toggle">toggle</button>
</template>

<style scoped>
h1 {
  color: white;
}
</style>
