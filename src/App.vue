<script>
import EmployeeMenu from "@/components/EmployeeMenu.vue";

export default {
  components: {
    "employee-menu": EmployeeMenu,
  },

  data() {
    return {
      BlackTheme: false,
    };
  },
  methods: {},
};
</script>

<template>
  <employee-menu />
</template>

<style lang="scss">
@import "@/assets/styles/main.scss";
@import "@/assets/styles/variables.scss";

#app {
  display: flex;
  flex-direction: row;
  width: 1920px;
  height: 1080px;
  background-color: $theme-dark;
  color: $theme-light;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

@import "@/assets/styles/media.scss";
</style>
