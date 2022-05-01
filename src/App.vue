<script>
export default {
   name: 'app',
};
</script>

<template>
   <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.global-page {
   height: 100vh;
   min-height: 100vh;
   width: 100%;
   padding: 60px;
}
</style>
