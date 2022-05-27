<template>
  <header>
    <div id="menuButton">
      <button @click="menu">
        <img alt="Menu" src="../../assets/luckdapp-icon.svg">
      </button>
    </div>
    <div id="logo">
      <img @click="home" alt="SSPWA logo" src="../../assets/luckdapp-logo.png">
    </div>
    <div id="disconnectButton">
      <button @click="disconnect">
        <img alt="Disconnect MetaMask" src="../../assets/metamask-fox.svg">
      </button>
    </div>
  </header>
</template>

<script>
export default {
  name: 'dappHeader',
  methods: {
    menu() {
      this.$emit("toggle", "dappMenu");
    },
    home() {
      this.$emit("load", "playerhome");
    },
    disconnect() {
      if (event.target.type) {
        event.target.disabled = true;
      } else {
        event.target.parentElement.disabled = true;
      }
      this.$store.dispatch('disconnectMetaMask');
    }
  }
}
</script>

<style scoped>
header {
  width: 100%;
  height: 15%;
  position: relative;
}
#menuButton {
  position: absolute;
  top: 10px;
  left: 10px;
}
header button {
  width: 40px;
  padding: 0;
  background: rgba(51,148,64,95%);
  border-color: rgb(51,148,64);
  display: flex;
  justify-content: center;
  align-items: center;
}
header button:hover {
  background: rgba(51,148,64,75%);
}
header button img {
  width: 30px;
  height: 30px;
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
#disconnectButton {
  position: absolute;
  top: 10px;
  right: 10px;
}
</style>
