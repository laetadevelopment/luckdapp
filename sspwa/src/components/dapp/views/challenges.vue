<template>
  <div id="challenges" class="page">
    <div class="page-title">
      <h1 ref="title">Challenges</h1>
    </div>
    <div class="page-content" ref="content">
      <h2>Try your luck at the Luck Challenge and win more LDNA!</h2>
      <p>Choose a LDNA to use in the challenge and if you win you will receive another LDNA. If you loose the challenge the LDNA you chose will be burned making it available to be minted again.</p>
      <h3>The HiLo Challenge is coming soon!</h3>
    </div>
    <div class="page-cta" ref="cta">
      <button class="background-animation" @click="challenge">Luck Challenge</button>
      <button class="background-animation" @click="challenge">HiLo Challenge</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'challenges',
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
    challenge() {
      if (event.target.innerText == "Luck Challenge") {
        this.$emit("load", "luckchallenge");
      }
      if (event.target.innerText == "HiLo Challenge") {
        this.$emit("load", "hilochallenge");
      }
    }
  },
  mounted() {
    this.overflow();
    window.addEventListener("resize", this.overflow);
  }
}
</script>

<style scoped>
.page-content {
  justify-content: center;
}
.page-content h2 {
  font-size: 1.1em;
  text-align: center;
}
.page-content h3 {
  font-size: 1em;
}
</style>
