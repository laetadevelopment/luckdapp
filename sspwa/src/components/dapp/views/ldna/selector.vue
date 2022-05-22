<template>
  <h2>LDNA Selector</h2>
  <p>Choose the LDNA you would like to use in the challenge. Once you have chosen a LDNA you can start the challenge by selecting the Let's go! button in the bottom right.</p>
  <div class="playerLDNA">
    <div v-for="ldna in playerLDNA">
      <button @click="select(ldna)">
        <img alt="LuckDNA Token" src="../../../../assets/luckdna-token.svg" />
      </button>
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
      this.selected = ldna.ldna;
      this.$emit("selected", this.selected);
      // let color = "rgba(" + ldna.r + "," + ldna.g + "," + ldna.b + "," + ldna.a + "%)";
      // event.target.style = "background: " + color + ";";
    },
  },
}
</script>

<style scoped>
.playerLDNA button {
  width: 50px;
  height: 50px;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.playerLDNA button img {
  width: 30px;
  height: 30px;
}
</style>
