import { createApp } from "vue";
import App from "./App.vue";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import components from "@/plugins/element";

const app = createApp(App);
app.use(ElementPlus);

components.forEach((component) => {
  app.component(component, component);
});

app.mount("#app");
