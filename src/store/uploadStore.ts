import { defineStore } from "pinia";

interface State {
  isUploaded: boolean;
}

export const useUploadStore = defineStore("upload", {
  state: (): State => ({
    isUploaded: false,
  }),

  actions: {
    upload() {
      this.isUploaded = true;
    },
    reset() {
      this.isUploaded = false;
    },
  },
});
