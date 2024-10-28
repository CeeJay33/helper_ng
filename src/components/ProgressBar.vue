<template>
  <div>
    <span>Searching...</span>
       <div class="progress-wrap">
    <div class="progress-bar" :style="{ width: progressWidth + '%' }"></div>
  </div>
  </div>

</template>

<script>
export default {
  props: {
    progressPercent: {
      type: Number,
      default: 100, // Default progress percentage
    },
  },
  data() {
    return {
      progressWidth: 0,
    };
  },
  mounted() {
    this.moveProgressBar();

    window.addEventListener("resize", this.moveProgressBar);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.moveProgressBar);
  },
  methods: {
    moveProgressBar() {
      this.progressWidth = 0;
      const targetProgress = this.progressPercent;
      const animationLength = 9000; 

      const interval = setInterval(() => {
        if (this.progressWidth < targetProgress) {
          this.progressWidth += 1;
        } else {
          clearInterval(interval);
        }
      }, animationLength / targetProgress);
    },
  },
};
</script>

<style scoped>
.progress-wrap {
  width: 100%;
  height: 5px;
  background: #ddd; /* Grey background */
  /* margin: 20px 0; */
  overflow: hidden;
  position: relative;
  border-radius: 5px; /* Rounded corners */
}

.progress-bar {
  background: #00ae65; /* Orange color */
  height: 5px;
  position: absolute;
  top: 0;
  left: 0;
  transition: width 0.4s ease; /* Smooth width transition */
  border-radius: 5px; /* Rounded corners */
}
</style>
