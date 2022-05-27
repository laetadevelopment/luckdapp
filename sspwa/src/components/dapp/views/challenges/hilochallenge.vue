<template>
  <div id="hilochallenge" class="page">
    <div class="page-title">
      <h1 ref="title">HiLo Challenge</h1>
    </div>
    <div class="page-content" ref="content">
      <h2>The ability to test your luck against other Luck.DApp players is coming. Check back soon!</h2>
    </div>
    <div class="page-cta" ref="cta">
      <button class="background-animation" @click="challenges">Challenges</button>
      <button class="background-animation" @click="challenge">Luck Challenge</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'hilochallenge',
  computed: {
    player() {
      return this.$store.state.player;
    }
  },
  methods: {
    // TODO: refactor this method to be dynamic and enlarge font as well
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
    challenges() {
      this.$emit("load", "challenges");
    },
    challenge() {
      this.$emit("load", "luckchallenge");
    }
  },
  mounted() {
    this.overflow();
    window.addEventListener("resize", this.overflow);
  }
}
</script>

<style scoped>
.page, .page-title {
  width: 100%;
}
.page-content {
  position: relative;
  justify-content: center;
}
.page-content h2 {
  font-size: 1.2em;
  text-align: center;
}
</style>
