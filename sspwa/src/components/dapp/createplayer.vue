<template>
  <div id="createplayer">
    <input v-if="metamask.installed" ref="name" placeholder="Enter Name" @change="setName" />
    <div v-if="!metamask.installed" class="metamask-install">
      <button class="background-animation" @click="install"><img alt="Install MetaMask" src="../../assets/metamask-fox.svg">Install MetaMask</button>
    </div>
    <div v-if="metamask.installed" class="metamask-installed">
      <button class="background-animation" @click="create"><img alt="Connect MetaMask" src="../../assets/metamask-fox.svg">Create Player</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'createplayer',
  computed: {
    metamask() {
      return this.$store.state.metamask;
    }
  },
  data() {
    return {
      name: ''
    }
  },
  methods: {
    setName() {
      if (!this.name) {
        this.$refs.name.style.borderColor = "rgb(255,255,255)";
      }
      this.name = event.target.value;
    },
    install() {
      event.target.disabled = true;
      this.$store.dispatch('installMetaMask');
    },
    create() {
      if (this.name) {
        if (this.metamask.web3.currentProvider.networkVersion == 42) {
          event.target.disabled = true;
          this.$store.dispatch({
            type: 'createPlayer',
            name: this.name
          });
        } else {
          this.$store.dispatch('switchNetwork');
        }
      } else {
        this.$refs.name.style.borderColor = "rgb(255,150,102)";
      }
    }
  }
}
</script>

<style scoped>
#createplayer {
  height: 70%;
  max-height: 45vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
#createplayer input {
  width: 250px;
  height: 50px;
  margin-bottom: 25px;
  padding: 0;
  box-sizing: border-box;
  background: none;
  border-radius: 50px;
  border: 3px solid rgb(255,255,255);
  color: rgb(255,255,255);
  font-size: 1.1em;
  font-weight: bold;
  text-align: center;
}
#createplayer input::placeholder {
  color: rgba(23,76,79,90);
}
#createplayer button {
  width: 250px;
  height: 50px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  border-color: rgb(255,255,255) !important;
  font-size: 1.1em;
}
#createplayer button img {
  max-height: 90%;
  margin-right: 10px;
}
</style>
