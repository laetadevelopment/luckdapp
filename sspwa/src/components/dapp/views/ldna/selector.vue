<template>
  <h2>LDNA Selector</h2>
  <p>Choose the LDNA you would like to use in the challenge. Once you have chosen a LDNA you can start the challenge by selecting the Let's go! button in the bottom right.</p>
  <div class="playerLDNA">
    <div v-for="ldna in playerLDNA">
      <img alt="LuckDNA Token" src="../../../../assets/luckdna-token.svg" @click="select(ldna)">
    </div>
  </div>
</template>

<script>
export default {
  name: 'ldnaselector',
  emits: ["selected"],
  computed: {
    playerLDNA() {
      this.$store.dispatch('playerLDNA');
      return this.$store.state.player.ldnaDetails;
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
        event.target.style = "background: none;";
        event.target.classList.toggle("selected");
        this.selected = null;
        this.$emit("selected", this.selected);
      } else {
        let color = "rgba(" + ldna.r + "," + ldna.g + "," + ldna.b + "," + ldna.a + "%)";
        event.target.style = "background: " + color + ";";
        event.target.classList.toggle("selected");
        this.selected = ldna.ldna;
        this.$emit("selected", this.selected);
      }
    },
  },
}
</script>

<style scoped>
.playerLDNA {
  display: flex;
  justify-content: space-evenly;
}
.playerLDNA img {
  width: 50px;
  height: 50px;
  border-radius: 50px;
  cursor: pointer;
}
</style>
