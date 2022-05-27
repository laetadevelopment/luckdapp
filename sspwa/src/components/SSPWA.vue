<template>
  <div id="sspwa">
    <div id="viewable">
      <div v-if="showIntro && !player.name" id="intro">
        <div class="intro">
          <div class="intro-header">
            <button @click="install">Install DApp</button>
            <h2>Do you feel lucky?</h2>
            <button @click="load">Learn More</button>
          </div>
          <p>New players are given their first LuckDNA token so they can try their luck on LuckD.App!</p>
        </div>
        <video-background 
          v-if="showVideoBackground"
          ref="videobackground"
          :src="require('@/assets/luckdapp-intro.mp4')"
          :muted="false"
          :loop="false"
          @click="play"
        />
        <createplayer v-if="createNewPlayer" />
        <div class="intro-cta">
          <button v-if="!createNewPlayer" class="background-animation" @click="newPlayer">Create New Player</button>
          <h3 v-if="createNewPlayer">Enter your name and connect your wallet to gain access to LuckD.App.</h3>
          <p v-if="createNewPlayer">After creating a player you will be transferred your first LDNA!</p>
        </div>
      </div>
      <index v-if="loadIndex" />
      <playerindex v-if="player.name" />
    </div>
  </div>
</template>

<script>
import VideoBackground from 'vue-responsive-video-background-player'
import createplayer from './dapp/createplayer.vue'
import index from './sspwa/index.vue'
import playerindex from './dapp/playerindex.vue'

export default {
  name: 'SSPWA',
  components: {
    VideoBackground,
    createplayer,
    index,
    playerindex
  },
  computed: {
    player() {
      return this.$store.state.player;
    }
  },
  data() {
    return {
      showIntro: true,
      showVideoBackground: false,
      createNewPlayer: false,
      loadIndex: false
    }
  },
  created() {
    window.addEventListener("beforeinstallprompt", e => {
      e.preventDefault();
      this.installApp = e;
    });
    window.addEventListener("appinstalled", () => {
      this.installApp = null;
    });
    this.$store.dispatch('setMetaMask');
  },
  methods: {
    async install() {
      this.installApp.prompt();
    },
    load() {
      this.showIntro = false;
      this.loadIndex = true;
    },
    play() {
      this.$refs.videobackground.player.play();
    },
    newPlayer() {
      this.showVideoBackground = false;
      this.createNewPlayer = true;
    }
  }
}
</script>

<style scoped>
#sspwa {
  width: 100%;
  height: 100%;
}
#viewable {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
#intro {
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  background: rgb(26,117,133);
  font-family: lato, sans-serif;
  font-weight: 400;
  font-style: normal;
  text-align: center;
}
#intro h2, #intro p {
  margin: 0;
  color: rgb(255,255,255);
}
#intro h3 {
  color: rgb(255,255,255);
}
.intro, .intro-cta {
  width: 95%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.intro p {
  font-size: 1em;
}
.intro-header {
  width: 100%;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.intro-header button {
  width: 50px;
  height: 50px;
  border-radius: 50px;
  border-color: rgb(255,255,255);
  font-size: .7em;
  color: rgb(255,255,255);
  text-align: center;
}
.intro-header button:hover {
  background: rgb(255,255,255);
  color: rgb(26,117,133);
}
.intro-header h2 {
  font-size: 1.7em;
}
#intro .vue-responsive-videobg {
  height: 70%;
  max-height: 45vh;
  cursor: pointer;
}
.intro-cta button {
  width: 250px;
  height: 50px;
  border-radius: 50px;
  border-color: rgb(255,255,255) !important;
  font-size: 1.1em;
}
</style>
