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
          :loop="false"
          :muted="muted"
          @click="play"
          @ended="ended"
        />
        <div v-if="showVideoBackground" class="video-buttons">
          <button v-if="muted" @click="unmute"><img alt="Unmute Video" src="../assets/unmute.svg"></button>
          <button v-if="!muted" @click="mute"><img alt="Mute Video" src="../assets/mute.svg"></button>
        </div>
        <createplayer v-if="createNewPlayer" />
        <div v-if="!createNewPlayer" class="intro-cta">
          <button v-if="metamask.installed" class="background-animation" @click="connect"><img alt="Connect MetaMask" src="../assets/metamask-fox.svg">Connect</button>
          <button class="background-animation" @click="newPlayer">Create New Player</button>
        </div>
        <div v-if="createNewPlayer" class="intro-footer">
          <h3 v-if="metamask.installed">Enter your name and connect your wallet to gain access to LuckD.App.</h3>
          <h3 v-if="!metamask.installed">You must have MetaMask installed to gain access to LuckD.App.</h3>
          <p>After creating a player you will receive your first LuckDNA token in your wallet!</p>
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
    },
    metamask() {
      return this.$store.state.metamask;
    }
  },
  data() {
    return {
      showIntro: true,
      showVideoBackground: true,
      paused: false,
      finished: false,
      muted: true,
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
      if (this.finished || this.paused) {
        this.paused = false;
        this.finished = false;
        this.$refs.videobackground.player.play();
      } else {
        this.paused = true;
        this.$refs.videobackground.player.pause();
      }
    },
    ended() {
      this.finished = true;
    },
    unmute() {
      this.muted = false;
    },
    mute() {
      this.muted = true;
    },
    connect() {
      this.$store.dispatch('reconnectMetaMask');
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
.intro {
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
.video-buttons {
  width: 100%;
  display: flex;
  justify-content: center;
}
.video-buttons button {
  width: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-color: rgb(255,255,255);
}
.video-buttons button:hover {
  background: rgba(255,255,255,50%);
}
.video-buttons button img {
  width: 25px;
  height: 25px;
}
.intro-cta {
  width: 95%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}
.intro-cta button {
  width: 160px;
  height: 50px;
  border-radius: 50px;
  border-color: rgb(255,255,255) !important;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1em;
}
.intro-cta button img {
  max-height: 90%;
  margin-right: 10px;
}
.intro-footer {
  width: 95%;
  display: flex;
  flex-direction: column;
}
</style>
