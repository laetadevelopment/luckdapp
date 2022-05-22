<template>
  <div id="luckchallenge" class="page">
    <div class="page-title">
      <h1 ref="title">Luck Challenge</h1>
    </div>
    <div class="page-content" ref="content">
      <div v-if="showChallenge">
        <h2>Are you ready to try your luck?</h2>
        <p>You must have at least one LDNA in your wallet to start the challenge. When you are ready to begin select the Choose LDNA button in the bottom right. The propability of winning this challenge is exactly 50%. If you win the challenge a new LDNA will be minted and transferred to your wallet. If you loose the challenge the LDNA you chose will be burned making it available to be minted again.</p>
      </div>
      <ldnaselector v-if="chooseLDNA" @selected="selected" />
    </div>
    <div class="page-cta" ref="cta">
      <button v-if="!chooseLDNA" class="background-animation" @click="challenges">Challenges</button>
      <button v-if="chooseLDNA" class="background-animation" @click="challenge">Luck Challenge</button>
      <button v-if="!chooseLDNA" class="background-animation" @click="choose">Choose LDNA</button>
      <button v-if="chooseLDNA" class="background-animation" @click="start">Let's go!</button>
    </div>
  </div>
</template>

<script>
import ldnaselector from '../ldna/selector.vue'

export default {
  name: 'luckchallenge',
  components: {
    ldnaselector
  },
  computed: {
    player() {
      return this.$store.state.player;
    }
  },
  data() {
    return {
      showChallenge: true,
      chooseLDNA: false,
      selectedLDNA: null
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
      this.chooseLDNA = false;
      this.showChallenge = true;
    },
    choose() {
      this.showChallenge = false;
      this.chooseLDNA = true;
    },
    selected(ldna) {
      this.selectedLDNA = ldna;
    },
    start() {
      if (this.selectedLDNA) {
        console.log("Let's go!", this.selectedLDNA);
      } else {
        console.log("Select a LDNA first!");
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
}
.page-content {
  justify-content: center;
}
.page-content h2 {
  font-size: 1.2em;
  text-align: center;
}
.page-cta button {
  border-radius: 50px;
}
</style>
