<template>
  <div id="ldna" class="page">
    <div class="page-title">
      <h1 ref="title">LuckDNA</h1>
    </div>
    <div class="page-content" ref="content">
      <h2>These are your LDNA. Select a token to see more details about it!</h2>
      <div class="playerLDNA">
        <div v-for="ldna in playerLDNA" class="ldna" ref="token" @click="select(ldna)">
          <div class="tails"><img alt="LDNA Tails" src="../../../assets/ldna-tails.svg"></div>
          <div class="heads"><img alt="LDNA Heads" src="../../../assets/ldna-heads.svg" @load="set(ldna)"></div>
        </div>
        <div v-if="!playerLDNA" class="warning">
          <p>You do not have any LDNA left. To purchase one more LDNA select the Get LDNA button in the bottom right.</p>
        </div>
      </div>
      <div v-if="showDetails" class="ldnaDetails">
        <h3>LDNA #{{ ldnaDetails.ldna }}</h3>
        <p>rgba({{ ldnaDetails.r }},{{ ldnaDetails.g }},{{ ldnaDetails.b }},{{ ldnaDetails.a }})</p>
      </div>
    </div>
    <div class="page-cta" ref="cta">
      <button class="background-animation" @click="home">Home</button>
      <button v-if="player.ldna" class="background-animation" @click="challenge">Luck Challenge</button>
      <button v-if="!player.ldna" class="background-animation" @click="get">Get LDNA</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ldna',
  computed: {
    player() {
      return this.$store.state.player;
    },
    playerLDNA() {
      if (this.$store.state.player.ldna) {
        this.$store.dispatch("playerLDNA");
        return this.$store.state.player.ldnaDetails;
      }
    }
  },
  data() {
    return {
      selected: null,
      showDetails: false,
      ldnaDetails: null
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
    select(ldna) {
      if (event.target.parentElement.classList.contains("heads")) {
        if (event.target.parentElement.parentElement.classList.contains("selected")) {
          event.target.parentElement.parentElement.classList.toggle("selected");
          this.selected = null;
          this.$emit("selected", this.selected);
          this.showDetails = false;
        } else {
          this.$refs.token.forEach(unselect);
          function unselect(item) {
            if (item.classList.contains("selected")) {
              item.classList.toggle("selected");
            }
          }
          event.target.parentElement.parentElement.classList.toggle("selected");
          this.selected = ldna.ldna;
          this.$emit("selected", this.selected);
          this.ldnaDetails = ldna;
          this.showDetails = true;
        }
      } else if (event.target.parentElement.classList.contains("tails")) {
        if (event.target.parentElement.parentElement.classList.contains("selected")) {
          event.target.parentElement.parentElement.classList.toggle("selected");
          this.selected = null;
          this.$emit("selected", this.selected);
          this.showDetails = false;
        } else {
          this.$refs.token.forEach(unselect);
          function unselect(item) {
            if (item.classList.contains("selected")) {
              item.classList.toggle("selected");
            }
          }
          event.target.parentElement.parentElement.classList.toggle("selected");
          this.selected = ldna.ldna;
          this.$emit("selected", this.selected);
          this.ldnaDetails = ldna;
          this.showDetails = true;
        }
      } else {
        if (event.target.classList.contains("selected")) {
          event.target.classList.toggle("selected");
          this.selected = null;
          this.$emit("selected", this.selected);
          this.showDetails = false;
        } else {
          this.$refs.token.forEach(unselect);
          function unselect(item) {
            if (item.classList.contains("selected")) {
              item.classList.toggle("selected");
            }
          }
          event.target.classList.toggle("selected");
          this.selected = ldna.ldna;
          this.$emit("selected", this.selected);
          this.ldnaDetails = ldna;
          this.showDetails = true;
        }
      }
    },
    set(ldna) {
      let color = "rgba(" + ldna.r + "," + ldna.g + "," + ldna.b + "," + ldna.a + "%)";
      event.target.style.background = color;
    },
    home() {
      this.$emit("load", "playerhome");
    },
    challenge() {
      this.$emit("load", "luckchallenge");
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
.playerLDNA {
  width: 100%;
  display: flex;
  justify-content: space-evenly;
}
.ldna {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  position: relative;
  transform-style: preserve-3d;
  cursor: pointer;
  animation: spin 2s linear infinite;
}
@keyframes spin {
  0% {
    transform: rotateY(0deg);
  }
  100% {
    transform: rotateY(360deg);
  }
}
.ldna:before {
  background-color: rgb(255,212,84);
  position: absolute;
  border-radius: 50%;
  content: '';
  height: 50px;
  width: 50px;
  transform: translateZ(-3.75px);
}
.ldna:after {
  background-color: rgb(255,212,84);
  content: '';
  left: 21.25px;
  position: absolute;
  height: 50px;
  width: 3.75px;
  z-index: -10;
  transform: rotateY(-90deg);
  transform-origin: 100% 50%;
}
.tails {
  background-color: rgb(255,212,84);
  position: absolute;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  width: 50px;
  color: rgb(255,255,255);
  transform: translateZ(-0.025px);
  border: 1px solid rgb(255,212,84);
  font-family: proxima-nova, sans-serif;
  font-weight: 700;
  font-style: normal;
}
.heads {
  background: rgb(255,255,255);
  position: absolute;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  width: 50px;
  transform: translateZ(-3.755px);
  border: 1px solid rgb(255,212,84);
}
.ldna img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}
.selected {
  box-shadow: 0px 0px 7px 5px rgba(51,148,64,100%);
  transform: rotateY(180deg);
  animation: shadow 5s infinite alternate;
}
@keyframes shadow {
  0% {
    box-shadow: 0px 0px 7px 5px rgba(51,148,64,100%);
  }
  25% {
    box-shadow: 0px 0px 7px 5px rgba(186,220,221,100%);
  }
  50% {
    box-shadow: 0px 0px 7px 5px rgba(255,150,102,100%);
  }
  75% {
    box-shadow: 0px 0px 7px 5px rgba(26,117,133,100%);
  }
  100% {
    box-shadow: 0px 0px 7px 5px rgba(23,76,79,100%);
  }
}
.ldnaDetails {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 0;
}
.ldnaDetails h3 {
  margin: 0;
}
.ldnaDetails p {
  margin: 0;
}
.warning {
  color: rgb(255,150,102);
  font-size: 1em;
  font-weight: bold;
}
.page-cta button {
  border-radius: 50px;
}
</style>
