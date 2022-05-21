<template>
  <div id="index">
    <dappHeader @load="load" @toggle="toggle" />
    <main>
      <playerhome v-if="showPlayerHome" @load="load" />
      <challenges v-if="showChallenges" @load="load" />
      <luckchallenge v-if="showLuckChallenge" @load="load" />
      <hilochallenge v-if="showHiLoChallenge" @load="load" />
      <marketplace v-if="showMarketplace" @load="load" />
      <luckverse v-if="showLuckverse" @load="load" />
      <ldna v-if="showLDNA" @load="load" />
      <lkc v-if="showLKC" @load="load" />
      <lnfts v-if="showLNFTS" @load="load" />
    </main>
    <dappMenu v-if="showDAppMenu" @load="load" @toggle="toggle" />
    <dappBar v-if="showDAppBar" @load="load" />
    <dappFooter />
  </div>
</template>

<script>
import dappHeader from './dappHeader.vue'
import playerhome from './views/playerhome.vue'
import challenges from './views/challenges.vue'
import luckchallenge from './views/challenges/luckchallenge.vue'
import hilochallenge from './views/challenges/hilochallenge.vue'
import marketplace from './views/marketplace.vue'
import luckverse from './views/luckverse.vue'
import ldna from './views/ldna.vue'
import lkc from './views/lkc.vue'
import lnfts from './views/lnfts.vue'
import dappFooter from './dappFooter.vue'
import dappMenu from './dappMenu.vue'
import dappBar from './dappBar.vue'

export default {
  name: 'playerindex',
  components: {
    dappHeader,
    playerhome,
    challenges,
    luckchallenge,
    hilochallenge,
    marketplace,
    luckverse,
    ldna,
    lkc,
    lnfts,
    dappFooter,
    dappMenu,
    dappBar
  },
  computed: {
    player() {
      return this.$store.state.player;
    }
  },
  data() {
    return {
      showPlayerHome: true,
      showChallenges: false,
      showLuckChallenge: false,
      showHiLoChallenge: false,
      showMarketplace: false,
      showLuckverse: false,
      showLDNA: false,
      showLKC: false,
      showLNFTS: false,
      showDAppMenu: false,
      showDAppBar: true
    }
  },
  methods: {
    toggle(component) {
      if (component == 'dappMenu') {
        if (!this.showDAppMenu) {
          this.showDAppMenu = true;
        } else {
          this.showDAppMenu = false;
        }
      }
      if (component == 'dappBar') {
        if (!this.showDAppBar) {
          this.showDAppBar = true;
        } else {
          this.showDAppBar = false;
        }
      }
    },
    load(page) {
      if (page == 'playerhome') {
        this.showChallenges = false;
        this.showLuckChallenge = false;
        this.showHiLoChallenge = false;
        this.showMarketplace = false;
        this.showLuckverse = false;
        this.showLDNA = false;
        this.showLKC = false;
        this.showLNFTS = false;
        this.showPlayerHome = true;
        if (this.showDAppMenu) {
          this.showDAppMenu = false;
        }
      }
      if (page == 'challenges') {
        this.showPlayerHome = false;
        this.showLuckChallenge = false;
        this.showHiLoChallenge = false;
        this.showMarketplace = false;
        this.showLuckverse = false;
        this.showLDNA = false;
        this.showLKC = false;
        this.showLNFTS = false;
        this.showChallenges = true;
        if (this.showDAppMenu) {
          this.showDAppMenu = false;
        }
      }
      if (page == 'luckchallenge') {
        this.showPlayerHome = false;
        this.showChallenges = false;
        this.showHiLoChallenge = false;
        this.showMarketplace = false;
        this.showLuckverse = false;
        this.showLDNA = false;
        this.showLKC = false;
        this.showLNFTS = false;
        this.showLuckChallenge = true;
        if (this.showDAppMenu) {
          this.showDAppMenu = false;
        }
      }
      if (page == 'hilochallenge') {
        this.showPlayerHome = false;
        this.showChallenges = false;
        this.showLuckChallenge = false;
        this.showMarketplace = false;
        this.showLuckverse = false;
        this.showLDNA = false;
        this.showLKC = false;
        this.showLNFTS = false;
        this.showHiLoChallenge = true;
        if (this.showDAppMenu) {
          this.showDAppMenu = false;
        }
      }
      if (page == 'marketplace') {
        this.showPlayerHome = false;
        this.showChallenges = false;
        this.showLuckChallenge = false;
        this.showHiLoChallenge = false;
        this.showLuckverse = false;
        this.showLDNA = false;
        this.showLKC = false;
        this.showLNFTS = false;
        this.showMarketplace = true;
        if (this.showDAppMenu) {
          this.showDAppMenu = false;
        }
      }
      if (page == 'luckverse') {
        this.showPlayerHome = false;
        this.showChallenges = false;
        this.showLuckChallenge = false;
        this.showHiLoChallenge = false;
        this.showMarketplace = false;
        this.showLDNA = false;
        this.showLKC = false;
        this.showLNFTS = false;
        this.showLuckverse = true;
        if (this.showDAppMenu) {
          this.showDAppMenu = false;
        }
      }
      if (page == 'ldna') {
        this.showPlayerHome = false;
        this.showChallenges = false;
        this.showLuckChallenge = false;
        this.showHiLoChallenge = false;
        this.showMarketplace = false;
        this.showLKC = false;
        this.showLNFTS = false;
        this.showLDNA = true;
        if (this.showDAppMenu) {
          this.showDAppMenu = false;
        }
      }
      if (page == 'lkc') {
        this.showPlayerHome = false;
        this.showChallenges = false;
        this.showLuckChallenge = false;
        this.showHiLoChallenge = false;
        this.showMarketplace = false;
        this.showLDNA = false;
        this.showLNFTS = false;
        this.showLKC = true;
        if (this.showDAppMenu) {
          this.showDAppMenu = false;
        }
      }
      if (page == 'lnfts') {
        this.showPlayerHome = false;
        this.showChallenges = false;
        this.showLuckChallenge = false;
        this.showHiLoChallenge = false;
        this.showMarketplace = false;
        this.showLDNA = false;
        this.showLKC = false;
        this.showLNFTS = true;
        if (this.showDAppMenu) {
          this.showDAppMenu = false;
        }
      }
    }
  }
}
</script>
