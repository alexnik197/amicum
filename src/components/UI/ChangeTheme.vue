<script>
export default {
  name: "ChangeTheme",
};
</script>

<template>
  <div class="toggle">
    <img
      class="icon-toggle"
      src="@/assets/images/ico-toggle.svg"
      alt="Exit Icon"
    />
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/styles/variables.scss";

.toggle {
  display: flex;
  align-items: center;
  justify-content: start;
  //   justify-content: end;
  position: relative;
  width: 76px;
  height: 20px;
  border-radius: 10px;

  background-color: $menu-secondary;

  cursor: pointer;
}

.icon-toggle {
  position: absolute;
  left: -16px;
  //   right: -16px;

  height: 63.2px;
  width: 63.2px;
}
</style>
