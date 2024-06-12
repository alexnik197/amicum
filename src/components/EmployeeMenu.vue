<script>
import ClockComponent from "./ClockComponent.vue";

export default {
  name: "EmployeeMenu",
  components: {
    "clock-component": ClockComponent,
  },
};
</script>

<template>
  <div class="menu">
    <clock-component />
  </div>
</template>

<style lang="scss">
@import "../assets/styles/variables.scss";

.menu {
  width: 662px;
  padding: 30px 40px;

  background-color: $menu;

  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  box-shadow: 4px 0 10px rgba(0, 0, 0, 0.25);
}

@import "../assets/styles/media.scss";
</style>
