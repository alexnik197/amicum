import { createApp } from "vue";
import App from "./App.vue";
import { users } from "./data/user-data.js";

import "./style.css";

const app = createApp(App);

app.config.globalProperties.$users = users;

app.mount("#app");
