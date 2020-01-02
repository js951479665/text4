<template>
  <div id="app">
    <router-view />
    <div id="nav">
      <Foot></Foot>
    </div>
  </div>
</template>
<script>
import Foot from "./components/footer";
export default {
  components: {
    Foot
  }
};
</script>
<style lang="scss">
#nav {
  position: absolute;
  width: 100vw;
  bottom: 0;
}
</style>


