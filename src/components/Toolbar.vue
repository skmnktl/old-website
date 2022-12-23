<template>
  <div class="toolbar">
    <span id="name">
      śrīnivāsa kaśyap munukutla
    </span>
    
    <span id="links">
      <router-link to="/writing" align="right" style="text-decoration: none; color: inherit;"> writing |</router-link>
      <router-link to="/cv" align="right" style="text-decoration: none; color: inherit;"> resume |</router-link>
      <router-link to="/photography" align="right" style="text-decoration: none; color: inherit;"> photography |</router-link>
      <router-link to="/about" align="right" style="text-decoration: none; color: inherit;"> about me </router-link>
    </span>
</div>
</template>

<script>
export default {
  name: 'ToolBar'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.toolbar{
  float: left;
  width: 100%;
  clear: none;
  display: grid;
  grid-template-columns: 50% 50%;
}

#name {
  float: left;
  font-size: 1em;
  align-content: center;
  font-weight: medium;
  font-family: 'Alegreya Sans SC', serif;
  
  vertical-align: bottom;
}

#links{
  color: rgb(109, 110, 110);
  float: left;
  font-family: 'Alegreya Sans', sans-serif;
  font-size: 1em;
  text-decoration: none;
  vertical-align: bottom;
}

</style>
