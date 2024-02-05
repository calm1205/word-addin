import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";

window.Office.onReady((info) => {
  console.log(info);
});
createApp(App).mount("#app");
