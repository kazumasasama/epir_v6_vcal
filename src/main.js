import { createApp } from "vue";
import Vue from "vue";
import App from "./App.vue";
import Calendar from "v-calendar/lib/components/calendar.umd";
import DatePicker from "v-calendar/lib/components/date-picker.umd";

Vue.component("calendar", Calendar);
Vue.component("date-picker", DatePicker);

createApp(App).mount("#app");
