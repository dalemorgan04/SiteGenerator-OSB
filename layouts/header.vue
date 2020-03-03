<template>
  <header>
    <div class="brand">
      <img src="../assets/images/logo.svg" />
    </div>
    <app-nav />
  </header>
</template>

<script>
import AppNav from './nav.vue'
export default {
  components: {
    'app-nav': AppNav
  },
  data() {
    return {}
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
@import '../assets/theme.scss';

header {
  position: absolute;
  top: 0;
  left: 0;
  height: 125px;
  text-align: center;

  .brand {
    img {
      width: 100%;
      height: 75px;
    }
  }
}

h1 {
  color: $secondary;
}
</style>
