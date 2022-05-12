<template>
  <div v-if="showLearnMore" id="learnMore" class="page">
    <div class="page-title">
      <h1 ref="title">Learn More</h1>
    </div>
    <div class="page-content" ref="content">
      <p>Players are able to view their home screen once they have entered their name and linked their wallet. From there they can view their available challenges. The player must have at least one LDNA in their connected wallet to start the Luck Challenge. The propability of winning the Luck Challenge is exactly 50%. If the challenge is won the player recieves one new LDNA in their wallet. If the challenge is lost one LDNA from their wallet is burned making the token available to be minted again.</p>
      <p>When a player has zero LDNA in their connected wallet they are given the option to purchase one more LDNA. The purchase amount is set by the DApp and sent to the treasury. If a new LDNA is purchased two more tokens are minted. One is sent to the player that makes the purchase and one is sent to the treasury.</p>
    </div>
    <div class="page-cta" ref="cta">
      <button class="background-animation" @click="view">View on GitHub</button>
      <button class="background-animation" @click="load">Go Home</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'learnMore',
  data() {
    return {
      showLearnMore: true
    }
  },
  methods: {
    overflow() {
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
    },
    view() {
      window.open('https://github.com/laetadevelopment/luckdapp','_blank');
    },
    load() {
      this.$emit("load", "home");
    }
  },
  mounted() {
    this.overflow();
    window.addEventListener("resize", this.overflow);
  }
}
</script>
