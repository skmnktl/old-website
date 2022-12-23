<template>
    <ToolBar />
    <router-view></router-view>
</template>

<script>
import ToolBar from './components/Toolbar.vue'

export default {
  name: 'App',
  components: {
    ToolBar
  }
}
</script>

<style>

#app {
  font-family: 'Alegreya Sans', serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000000;
  margin-top: 30px;
}

h3 {
  font-family: 'Alegreya Sans SC', sans-serif;
}
p{
  font-family: 'Alegreya Sans', sans-serif;
}
</style>
