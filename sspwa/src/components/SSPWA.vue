<template>
  <div id="sspwa">
    <div id="viewable">
      <div v-if="showIntro" id="intro">
        <div class="intro">
          <h2>Do you feel lucky?</h2>
          <p>New players are given their first LuckDNA Token (LDNA) in order to try their luck in the Luck Challenge.</p>
          <button @click="load">Learn More</button>
        </div>
        <video-background 
          ref="videobackground"
          :src="require('@/assets/luckdapp-intro.mp4')"
          :muted="false"
          :loop="false"
          @click="play"
        />
        <div class="intro-cta">
          <h3>Create a player, get your first LDNA!</h3>
          <button class="background-animation">Create New Player</button>
        </div>
      </div>
      <index v-if="loadIndex" />
    </div>
  </div>
</template>

<script>
import index from './sspwa/index.vue'
import VideoBackground from 'vue-responsive-video-background-player'

export default {
  name: 'SSPWA',
  components: {
    index,
    VideoBackground
  },
  data() {
    return {
      showIntro: true,
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
#intro h2, #intro h3, #intro p {
  color: rgb(255,255,255);
}
.intro, .intro-cta {
  height: 15%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.intro button {
  height: 40px;
  border-radius: 40px;
  color: rgb(255,255,255);
  border-color: rgb(255,255,255);
}
.intro button:hover {
  background: rgb(255,255,255);
  color: rgb(26,117,133);
}
.intro-cta button {
  width: 75%;
  height: 50px;
  border-radius: 50px;
  border-color: rgb(255,255,255) !important;
}
#intro .vue-responsive-videobg {
  height: 70%;
  max-height: 45vh;
  cursor: pointer;
}
</style>
