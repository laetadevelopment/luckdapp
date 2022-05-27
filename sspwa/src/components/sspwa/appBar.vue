<template>
  <div id="appBar">
    <div>
      <a class="github-button" href="https://github.com/laetadevelopment/luckdapp" data-color-scheme="no-preference: dark; light: light; dark: dark;" data-icon="octicon-star" data-size="large" data-show-count="true" aria-label="Star the SSPWA Template on GitHub">Star</a>
    </div>
    <div>
      <a class="github-button" href="https://github.com/laetadevelopment/luckdapp/discussions" data-color-scheme="no-preference: light; light: light; dark: dark;" data-icon="octicon-comment-discussion" data-size="large" aria-label="Discuss laetadevelopment/luckdapp on GitHub">Discuss</a>
    </div>
    <div>
      <a class="github-button" href="https://github.com/sponsors/laetadevelopment" data-color-scheme="no-preference: light; light: light; dark: dark;" data-icon="octicon-heart" data-size="large" aria-label="Sponsor @laetadevelopment on GitHub">Sponsor</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'appBar',
  mounted() {
    const plugin = document.createElement("script");
    plugin.setAttribute(
      "src",
      "//buttons.github.io/buttons.js"
    );
    plugin.async = true;
    document.head.appendChild(plugin);
  }
}
</script>

<style scoped>
#appBar {
  width: 100%;
  height: 10%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: absolute;
  bottom: 0;
  background: rgba(51,148,64,95%);
  border-top: 2px solid rgb(51,148,64);
  box-sizing: border-box;
  z-index: 2;
}
#appBar div {
  height: 28px;
}
</style>
