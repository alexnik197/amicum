<template>
  <div class="currentDate">
    <span>{{ this.currentDate }}</span>
    <span
      >{{
        this.currentHours > 9 ? this.currentHours : "0" + this.currentHours
      }}:{{
        this.currentMinutes > 9
          ? this.currentMinutes
          : "0" + this.currentMinutes
      }}</span
    >
  </div>
</template>

<script>
export default {
  name: "ClockComponent",

  data() {
    return {
      currentDate: this.getCurrentDate(),
      currentHours: this.getCurrentHours(),
      currentMinutes: this.getCurrentMinutes(),
    };
  },
  methods: {
    getCurrentDate() {
      return new Date().toISOString().split("T")[0];
    },
    getCurrentHours() {
      return new Date().getHours();
    },
    getCurrentMinutes() {
      return new Date().getMinutes();
    },

    updateTime() {
      this.currentDate = this.getCurrentDate();
      this.currentHours = this.getCurrentHours();
      this.currentMinutes = this.getCurrentMinutes();
    },
  },

  mounted() {
    this.timer = setInterval(this.updateTime, 1000);
  },
  beforeDestroy() {
    clearInterval(this.timer);
  },
};
</script>

<style lang="scss" scoped>
.currentDate {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;

  height: max-content;

  gap: 5px;
}
</style>
