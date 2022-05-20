<template>
  <header>
    <div id="menuButton">
      <button class="background-animation" @click="toggleDAppMenu">
        <img alt="Toggle Menu" src="../../assets/luckdapp-icon.svg">
      </button>
    </div>
    <div id="logo">
      <img @click="home" alt="SSPWA logo" src="../../assets/luckdapp-logo.png">
    </div>
    <div id="dappBarButton">
      <button class="background-animation" @click="toggleDAppBar">
        <img alt="Toggle App Bar" src="../../assets/luckdapp-coin-icon.svg">
      </button>
    </div>
  </header>
</template>

<script>
export default {
  name: 'dappHeader',
  methods: {
    toggleDAppMenu() {
      this.$emit("toggle", "dappMenu");
    },
    home() {
      this.$emit("load", "playerhome");
    },
    toggleDAppBar() {
      this.$emit("toggle", "dappBar");
    }
  }
}
</script>

<style scoped>
header {
  width: 100%;
  height:  15%;
  position: relative;
}
#menuButton {
  width: 40px;
  height: 40px;
  position: absolute;
  left: 10px;
  top: 10px;
}
header button {
  width: 100%;
  height: 100%;
  padding: 0;
  border-radius: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
}
header button img {
  width: 25px;
  height: 25px;
}
/* TODO: animate fill of SVG */
header #logo {
  max-width: 50%;
  height: 100%;
  position: absolute;
  left: 50%;
  top: 5px;
  transform: translate(-50%, 0%);
  cursor: pointer;
}
header #logo img {
  max-width: 100%;
  max-height: 100%;
}
#dappBarButton {
  width: 40px;
  height: 40px;
  position: absolute;
  right: 10px;
  top: 10px;
}
</style>
