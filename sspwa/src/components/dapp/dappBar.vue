<template>
  <div id="dappBar">
    <button @click="ldna">LDNA</button>
    <button @click="lkc">LKC</button>
    <button @click="lnfts">LNFTS</button>
  </div>
</template>

<script>
export default {
  name: 'dappBar',
  methods: {
    ldna() {
      this.$emit("load", "ldna");
    },
    lkc() {
      this.$emit("load", "lkc");
    },
    lnfts() {
      this.$emit("load", "lnfts");
    }
  }
}
</script>

<style scoped>
#dappBar {
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
#dappBar button {
  width: 100px;
  max-width: 30%;
  max-height: 90%;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border-color: rgb(255,255,255);
  color: rgb(255,255,255);
}
#dappBar button:hover {
  background: rgb(255,255,255);
  color: rgb(51,148,64);
}
</style>
