<template>
  <header>
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
  text-align: center;
  background: $primary;
}

h1 {
  color: $secondary;
}
</style>
