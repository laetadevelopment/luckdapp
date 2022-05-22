<template>
  <div id="lnfts" class="page">
    <div class="page-title">
      <h1 ref="title">LNFTS</h1>
    </div>
    <div class="page-content" ref="content">
      <h2>Coming Soon!</h2>
    </div>
    <div class="page-cta" ref="cta">
    </div>
  </div>
</template>

<script>
export default {
  name: 'lnfts',
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
    }
  },
  mounted() {
    this.overflow();
    window.addEventListener("resize", this.overflow);
  }
}
</script>

<style scoped>
.page {
  width: 100%;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: center;
}
.page-content {
  flex-wrap: nowrap;
  justify-content: center;
}
</style>
