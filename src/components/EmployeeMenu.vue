<script>
import ClockComponent from "@/components/UI/ClockComponent.vue";
import ChangeTheme from "@/components/UI/ChangeTheme.vue";
import PersonalData from "@/components/PersonalData.vue";

export default {
  name: "EmployeeMenu",

  components: {
    "clock-component": ClockComponent,
    "change-theme": ChangeTheme,
    "personal-data": PersonalData,
  },
};
</script>

<template>
  <aside class="content">
    <section class="menu">
      <clock-component />
      <div class="exit">
        <span>Выход</span>
        <img
          class="icon-exit"
          src="@/assets/images/ico-exit.svg"
          alt="Exit Icon"
        />
      </div>
    </section>
    <!-- /.menu -->
    <section class="theme">
      <change-theme />
    </section>
    <!-- /.theme -->
    <section>
      <personal-data />
    </section>
    <!-- /.personal -->
  </aside>
</template>

<style lang="scss" scoped>
@import "@/assets/styles/variables.scss";

.content {
  display: flex;
  flex-direction: column;

  width: 662px;
  height: inherit;
  padding: 30px 40px;
  font-size: 24px;

  background-color: $menu;

  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  box-shadow: 4px 0 10px rgba(0, 0, 0, 0.25);
}

.menu {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 88px;
}

.exit {
  display: flex;
  flex-direction: row;
  align-items: center;

  height: max-content;
  font-size: 24px;

  gap: 10px;
  cursor: pointer;
}

.icon-exit {
  width: 54px;
  height: 54px;
}

.theme {
  display: flex;
  flex-direction: row;
  justify-content: end;

  margin-bottom: 82px;
}

@import "@/assets/styles/media.scss";
</style>
