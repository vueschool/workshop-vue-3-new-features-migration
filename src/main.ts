import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import ExerciseHeader from "@/components/completed/ExerciseHeader.vue";

import "./assets/main.css";

const app = createApp(App);

app.use(router);
app.component("ExerciseHeader", ExerciseHeader);

app.mount("#app");
