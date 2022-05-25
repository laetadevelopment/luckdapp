<template>
  <h2>LDNA Selector</h2>
  <p>Choose the LDNA you would like to use in the challenge. Once you have chosen a LDNA you can start the challenge by selecting the Let's go! button in the bottom right.</p>
  <div class="playerLDNA">
    <div class="playerLDNA">
      <div v-for="ldna in playerLDNA" class="ldna" ref="token" @click="select(ldna)">
        <div class="tails"><img alt="LDNA Tails" src="../../../../assets/ldna-tails.svg"></div>
        <div class="heads"><img alt="LDNA Heads" src="../../../../assets/ldna-heads.svg" @load="set(ldna)"></div>
      </div>
    </div>
    <div v-if="!playerLDNA" class="warning">
      <p>You do not have any LDNA left. To purchase one more LDNA select the Get LDNA button in the bottom right.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ldnaselector',
  emits: ["selected"],
  computed: {
    playerLDNA() {
      if (this.$store.state.player.ldna) {
        this.$store.dispatch("playerLDNA");
        return this.$store.state.player.ldnaDetails;
      }
    }
  },
  data() {
    return {
      selected: null
    }
  },
  methods: {
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
    }
  }
}
</script>

<style scoped>
h2 {
  width: 100%;
  font-size: 1.5em;
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
.warning {
  color: rgb(255,150,102);
  font-size: 1em;
  font-weight: bold;
}
</style>
