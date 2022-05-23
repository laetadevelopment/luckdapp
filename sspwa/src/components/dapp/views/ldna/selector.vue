<template>
  <h2>LDNA Selector</h2>
  <p>Choose the LDNA you would like to use in the challenge. Once you have chosen a LDNA you can start the challenge by selecting the Let's go! button in the bottom right.</p>
  <div class="playerLDNA">
    <div v-for="ldna in playerLDNA" class="ldna" ref="token">
      <img alt="LuckDNA Token" src="../../../../assets/luckdna-token.svg" @click="select(ldna)" @load="set(ldna)">
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
      if (event.target.classList.contains("selected")) {
        event.target.classList.toggle("selected");
        this.selected = null;
        this.$emit("selected", this.selected);
      } else {
        this.$refs.token.forEach(unselect);
        function unselect(item) {
          if (item.children[0].classList.contains("selected")) {
            item.children[0].classList.toggle("selected");
          }
        }
        event.target.classList.toggle("selected");
        this.selected = ldna.ldna;
        this.$emit("selected", this.selected);
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
.playerLDNA {
  width: 100%;
  display: flex;
  justify-content: space-evenly;
}
.playerLDNA .ldna {
  display: flex;
}
.playerLDNA .ldna img {
  width: 50px;
  height: 50px;
  border-radius: 50px;
  cursor: pointer;
}
.playerLDNA .ldna .selected {
  box-shadow: 0px 0px 5px 3px rgba(51,148,64,100%);
  animation: shadow 5s infinite alternate;
}
.warning {
  color: rgb(255,150,102);
  font-size: 1em;
  font-weight: bold;
}
@keyframes shadow {
  0% {
    box-shadow: 0px 0px 5px 3px rgba(51,148,64,100%);
  }
  25% {
    box-shadow: 0px 0px 5px 3px rgba(186,220,221,100%);
  }
  50% {
    box-shadow: 0px 0px 5px 3px rgba(255,150,102,100%);
  }
  75% {
    box-shadow: 0px 0px 5px 3px rgba(26,117,133,100%);
  }
  100% {
    box-shadow: 0px 0px 5px 3px rgba(23,76,79,100%);
  }
}
</style>
