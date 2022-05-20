<template>
  <footer>
    <h3>Copyright &copy; 2022 <a href="https://laetadevelopment.com" target="_blank" title="Laeta Development">Laeta Development</a></h3>
  </footer>
</template>

<script>
export default {
  name: 'dappFooter'
}
</script>

<style scoped>
footer {
  width: 100%;
  height: 10%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  position: absolute;
  bottom: 0;
  z-index: 1;
}
footer h3 {
  margin: 0;
  font-size: .75em;
}
</style>
