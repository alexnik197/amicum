<script>
export default {
  name: "PersonalIndicator",

  props: {
    percent: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
    },
    imageSrc: {
      type: String,
      required: false,
    },
    text: {
      type: String,
      required: true,
    },
    testsCompleted: {
      type: Number,
      required: false,
    },
    AttestationDays: {
      type: Number,
      required: false,
    },
  },
  computed: {
    statusClass() {
      if (this.status === "true") return "circle-green";
      if (this.status === "false") return "circle-orange";
      return "circle-gray";
    },
  },
};
</script>

<template>
  <div class="indicator-content">
    <span class="indicator-name">{{ text }}</span>
    <div class="donut-chart">
      <svg viewBox="0 0 36 36" class="circular-chart">
        <path
          class="circle-bg"
          d="M18 2.0845
                     a 15.9155 15.9155 0 0 1 0 31.831
                     a 15.9155 15.9155 0 0 1 0 -31.831"
        />
        <path
          class="circle"
          :class="statusClass"
          :stroke-dasharray="percent + ', 100'"
          d="M18 2.0845
                     a 15.9155 15.9155 0 0 1 0 31.831
                     a 15.9155 15.9155 0 0 1 0 -31.831"
        />
      </svg>
      <div class="indicator-center">
        <img
          v-if="imageSrc"
          class="indicator-image"
          :src="imageSrc"
          alt="image"
        />
        <span v-else-if="testsCompleted" class="indicator-percent">
          {{ testsCompleted }}
        </span>
        <span v-else-if="AttestationDays" class="indicator-percent">
          {{ AttestationDays }}
        </span>
      </div>
      <!-- .indicator-center -->
    </div>
    <!-- /.donut-chart -->
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/styles/variables.scss";

.indicator {
  &-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    width: 281px;
    height: 260px;
    padding: 30px;

    background-color: $menu-secondary;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
  }
  &-center {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  &-name {
    text-align: center;
    line-height: 1;

    font-size: 20px;
  }
  &-image {
    width: 74px;
    height: 74px;
  }
  &-percent {
    font-size: 45px;
  }
}

.donut-chart {
  position: relative;
  height: max-content;
}
.circular-chart {
  display: block;
  margin: 0px auto;
  width: 145px;
  height: 145px;
}
.circle-bg {
  fill: none;
  stroke: $menu;
  stroke-width: 3;
}
.circle {
  fill: none;
  stroke-width: 3;
  stroke-linecap: round;
  transition: stroke-dasharray 0.6s ease 0s, stroke 0.6s ease;
}
.circle-green {
  stroke: #b2d63c;
}
.circle-orange {
  stroke: #ef7f1a;
}
.circle-gray {
  stroke: #353d54;
}
.percentage {
  fill: #666;
  font-size: 0.5em;
  text-anchor: middle;
}
</style>
