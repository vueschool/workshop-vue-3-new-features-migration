import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import ExerciseHeader from "@/completed/components/ExerciseHeader.vue";
import AppSpinner from "./components/AppSpinner.vue";

import "./assets/main.css";

const app = createApp(App);

app.use(router);
app.component("ExerciseHeader", ExerciseHeader);
app.component("AppSpinner", AppSpinner);

app.mount("#app");
