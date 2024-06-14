<script>
import PersonalIndicator from "@/components/UI/PersonalIndicator.vue";

export default {
  name: "PersonalData",

  components: {
    "personal-indicator": PersonalIndicator,
  },

  computed: {
    users() {
      return this.$users;
    },
  },
};
</script>

<template>
  <section class="personal">
    <span class="personal-name">{{ users[0].name }}</span>
    <span class="personal-birth">{{ users[0].birth }}</span>
    <span class="personal-tab">{{ users[0].tab }}</span>
    <span class="personal-vacancy">{{ users[0].vacancy }}</span>
  </section>
  <section class="indicators">
    <personal-indicator
      percent="20"
      status="true"
      text="Инструктаж"
      imageSrc="/src/assets/images/ico-personal--instruction.svg"
    />
    <personal-indicator
      percent="100"
      status="true"
      text="Предсменный экзаменатор"
      imageSrc="/src/assets/images/ico-personal--test.svg"
    />
    <personal-indicator
      percent="25"
      status="true"
      text="Тестов выполнено"
      :testsCompleted="users[0].testsCompleted"
    />
    <personal-indicator
      percent="20"
      status="false"
      text="Аттестация через"
      :AttestationDays="users[0].AttestationDays"
    />
  </section>
</template>

<style lang="scss" scoped>
@import "@/assets/styles/variables.scss";

.personal {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  margin-bottom: 58px;
  padding: 10px 15px;
  gap: 10px;

  background-color: $menu-secondary;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);

  &-name {
    font-size: 32px;
  }

  &-birth {
    font-size: 24px;
  }

  &-tab {
    font-size: 16px;
  }
  &-vacancy {
    font-size: 16px;
  }
}

.indicators {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 20px;
  grid-row-gap: 20px;
  justify-items: center;
  align-items: center;
}
</style>
