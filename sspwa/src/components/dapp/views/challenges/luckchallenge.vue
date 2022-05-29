<template>
  <div id="luckchallenge" class="page">
    <div class="page-title">
      <h1 ref="title">Luck Challenge</h1>
    </div>
    <div class="page-content" ref="content">
      <div v-if="showChallenge">
        <h2>Are you ready to try your luck?</h2>
        <p>You must have at least one LDNA in your wallet to start the challenge. When you are ready to begin select the Choose LDNA button in the bottom right of the screen. The propability of winning the challenge is exactly 50%. If you win the challenge a new LDNA will be minted and transferred to your wallet. If you loose the challenge the LDNA you chose will be burned.</p>
      </div>
      <ldnaselector v-if="chooseLDNA" @selected="selected" />
    </div>
    <div class="page-cta" ref="cta">
      <button v-if="!chooseLDNA" class="background-animation" @click="challenges">Challenges</button>
      <button v-if="chooseLDNA" class="background-animation" @click="challenge">Luck Challenge</button>
      <button v-if="chooseLDNA" id="refresh" class="background-animation" @click="refresh"><img alt="Refresh LDNA" src="../../../../assets/ldna-refresh.svg"></button>
      <button v-if="!chooseLDNA && player.ldna" class="background-animation" @click="choose">Choose LDNA</button>
      <button v-if="!chooseLDNA && !player.ldna" class="background-animation" @click="get">Get LDNA</button>
      <button v-if="chooseLDNA && player.ldna" class="background-animation" @click="start">Let's go!</button>
      <button v-if="chooseLDNA && !player.ldna" class="background-animation" @click="get">Get LDNA</button>
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
    metamask() {
      return this.$store.state.metamask;
    },
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
    refresh() {
      if (this.metamask.web3.currentProvider.networkVersion == 42) {
        this.$store.dispatch("refreshLDNA");
      } else {
        this.$store.dispatch('switchNetwork');
      }
    },
    selected(ldna) {
      this.selectedLDNA = ldna;
      if (this.$refs.content.querySelectorAll(".warning").length > 0) {
        this.$refs.content.querySelectorAll(".warning").forEach(el => el.remove());
      }
    },
    start() {
      if (this.selectedLDNA) {
        if (this.metamask.web3.currentProvider.networkVersion == 42) {
          this.$store.dispatch("startLuckChallenge", this.selectedLDNA);
        } else {
          this.$store.dispatch('switchNetwork');
        }
      } else {
        if (this.$refs.content.querySelectorAll(".warning").length == 0) {
          let div = document.createElement("div");
          div.innerText = "Choose a LDNA for the challenge.";
          div.style = "position: absolute; bottom: 0; color: rgb(255,150,102); font-size: .8em; font-weight: bold;";
          div.classList.toggle("warning");
          this.$refs.content.append(div);
        }
      }
    },
    get() {
      this.$store.dispatch("getLDNA");
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
  position: relative;
  justify-content: center;
}
.page-content h2 {
  font-size: 1.2em;
  text-align: center;
}
.page-cta button {
  max-width: 40%;
}
.page-cta #refresh {
  width: 40px;
}
.page-cta #refresh img {
  width: 30px;
  height: 30px;
}
</style>
