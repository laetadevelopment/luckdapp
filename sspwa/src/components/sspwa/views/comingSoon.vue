<template>
  <div v-if="showComingSoon" id="comingSoon" class="page">
    <div class="page-title">
      <h1 ref="title">Coming Soon!</h1>
    </div>
    <div class="page-content" ref="content">
      <p>Soon players will be able to convert the LDNA in their wallet to Luckcoins (LKC). The amount of LKC the player will receive will be based on the value of the LDNA they are converting. The value is determined based on the opacity of the LDNA. The opacity can be anywhere from zero to one hundred percent and the value of each LDNA is equal to the percentage.</p>
      <p>Once the ability to convert LDNA to LKC is released the HiLo Challenge will be released as well. In this challenge you will be able to challenge another player to a game of luck. More details about the HiLo Challenge are coming soon.</p>
    </div>
    <div class="page-cta" ref="cta">
      <button class="background-animation" @click="view"><img alt="View on GitHub" src="../../../assets/github-mark.svg">GitHub</button>
      <button class="background-animation" @click="load">Home</button>
      <button class="background-animation" @click="load">Learn More</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'comingSoon',
  data() {
    return {
      showComingSoon: true
    }
  },
  methods: {
    overflow() {
      if (this.$refs.title) {
        if (this.$refs.title.scrollHeight > this.$refs.title.clientHeight) {
          this.$refs.title.style.fontSize = "4vw";
          if (this.$refs.title.scrollHeight > this.$refs.title.clientHeight) {
            this.$refs.title.style.fontSize = "3vw";
            if (this.$refs.title.scrollHeight > this.$refs.title.clientHeight) {
              this.$refs.title.style.fontSize = "2vw";
              if (this.$refs.title.scrollHeight > this.$refs.title.clientHeight) {
                this.$refs.title.style.fontSize = "1vw";
              }
            }
          }
        }
      }
      if (this.$refs.content) {
        if (this.$refs.content.scrollHeight > this.$refs.content.clientHeight) {
          this.$refs.content.style.fontSize = ".8em";
          if (this.$refs.content.scrollHeight > this.$refs.content.clientHeight) {
            this.$refs.content.style.fontSize = ".7em";
            if (this.$refs.content.scrollHeight > this.$refs.content.clientHeight) {
              this.$refs.content.style.fontSize = ".6em";
              if (this.$refs.content.scrollHeight > this.$refs.content.clientHeight) {
                this.$refs.content.style.fontSize = ".5em";
              }
            }
          }
        }
      }
    },
    view() {
      window.open('https://github.com/laetadevelopment/luckdapp','_blank');
    },
    load() {
      if (event.target.innerText == "Home") {
        this.$emit("load", "home");
      }
      if (event.target.innerText == "Learn More") {
        this.$emit("load", "learnmore");
      }
    },
  },
  mounted() {
    this.overflow();
    window.addEventListener("resize", this.overflow);
  }
}
</script>

<style scoped>
.page-cta button {
  max-width: 30%;
}
.page-cta button img {
  max-height: 70%;
  margin-right: 5px;
}
</style>
