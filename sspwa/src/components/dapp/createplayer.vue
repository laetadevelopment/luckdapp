<template>
  <div id="createplayer">
    <input v-if="metamask.installed" ref="name" placeholder="Enter Name" @change="setName" />
    <div v-if="!metamask.installed" class="metamask-install">
      <button class="background-animation" @click="install"><img alt="Install MetaMask" src="../../assets/metamask-fox.svg">Install MetaMask</button>
    </div>
    <div v-if="metamask.installed" class="metamask-installed">
      <button v-if="!wait" class="background-animation" @click="create"><img alt="Connect MetaMask" src="../../assets/metamask-fox.svg">Create Player</button>
      <button v-if="wait" class="wait" disabled><img alt="Connect MetaMask" src="../../assets/metamask-fox.svg">Please wait&nbsp;<span class="dot-flashing"/></button>
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
      name: '',
      wait: false
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
          this.wait = true;
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
#createplayer .wait {
  color: rgb(255,255,255);
}
.dot-flashing {
  width: 5px;
  height: 5px;
  top: 4px;
  left: -3px;
  margin-left: 8px;
  position: relative;
  border-radius: 5px;
  background-color: rgb(255,255,255);
  color: rgb(255,255,255);
  animation: dotFlashing 1s infinite linear alternate;
  animation-delay: .5s;
}
.dot-flashing::before, .dot-flashing::after {
  content: '';
  display: inline-block;
  position: absolute;
  top: 0;
}
.dot-flashing::before {
  left: -7px;
  width: 5px;
  height: 5px;
  border-radius: 5px;
  background-color: rgb(255,255,255);
  color: rgb(255,255,255);
  animation: dotFlashing 1s infinite alternate;
  animation-delay: 0s;
}
.dot-flashing::after {
  left: 7px;
  width: 5px;
  height: 5px;
  border-radius: 5px;
  background-color: rgb(255,255,255);
  color: rgb(255,255,255);
  animation: dotFlashing 1s infinite alternate;
  animation-delay: 1s;
}
@keyframes dotFlashing {
  0% {
    background-color: rgb(255,255,255);
  }
  50%,
  100% {
    background-color: rgba(255,255,255,50%);
  }
}
</style>
