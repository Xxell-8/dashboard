<template>
  <router-view/>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
body {
  margin: 0;
}
#app {
  font-family: 'Noto Sans KR', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: linear-gradient(120deg,#232334 40%, #13131f 100%);
  color: #f1f1f1;
  width: 100vw;
  height: 100vh;
}
* {
  box-sizing: border-box;
}
</style>
