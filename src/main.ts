import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";

Office.onReady((info) => {
  console.log(info);
});
createApp(App).mount("#app");
