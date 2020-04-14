<template>
  <div id="app" class="d-flex flex-column">
    <app-header />

    <main role="main">
      <nuxt />
    </main>

    <app-footer />
  </div>
</template>

<script>
import AppHeader from './header.vue'
import AppFooter from './footer.vue'

export default {
  components: {
    'app-header': AppHeader,
    // 'app-nav': AppNav,
    'app-footer': AppFooter
  },
  data() {
    return {}
  },
  methods: {}
}
</script>

<style lang="scss">
@import '../assets/theme.scss';
@import 'node_modules/bootstrap/scss/bootstrap';
@import 'node_modules/bootstrap-vue/src/index.scss';

#app {
  height: 100vh;
}

main {
  flex: 1 0 auto;
}
</style>
