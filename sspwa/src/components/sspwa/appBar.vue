<template>
  <div id="appBar">
    <metamask />
  </div>
</template>

<script>
import metamask from '../dapp/metamask.vue'

export default {
  name: 'appBar',
  components: {
    metamask
  }
}
</script>

<style scoped>
#appBar {
  width: 100%;
  height: 10%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  position: absolute;
  bottom: 0;
  background: rgba(51,148,64,95%);
  border-top: 2px solid rgb(51,148,64);
  box-sizing: border-box;
  z-index: 2;
}
</style>
