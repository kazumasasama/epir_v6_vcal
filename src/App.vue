<template>
  <VCalendar />
  <v-calendar></v-calendar>
  <v-date-picker v-model='selectedDate' />
</template>

<script>
import VCalendar from "./components/VCalendar.vue";

export default {
  name: "App",
  components: {
    VCalendar
  },
};
</script>

<style></style>
