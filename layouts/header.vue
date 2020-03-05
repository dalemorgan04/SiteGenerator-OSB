<template>
  <header id="header">
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
  beforeMount() {
    window.addEventListener('scroll', this.navScroll)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.navScroll)
  },
  methods: {
    navScroll(event) {
      const nav = document.getElementById('header')
      if (
        document.body.scrollTop > 75 ||
        document.documentElement.scrollTop > 75
      ) {
        nav.classList.add('minified')
      } else {
        nav.classList.remove('minified')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/theme.scss';

header {
  position: absolute;
  top: 0;
  left: 0;
  height: 125px;
  width: 100%;
  text-align: center;
  z-index: 100;

  .brand {
    img {
      width: 100%;
      height: 75px;
    }
  }

  &.minified {
    position: fixed;
    .brand {
      display: none;
      transition: cubic-bezier(0.075, 0.82, 0.165, 1);
    }
    /deep/ nav {
      transition: 0.4s;
      width: 100%;
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
    }
  }
}

h1 {
  color: $secondary;
}
</style>
