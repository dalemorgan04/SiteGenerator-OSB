<template>
  <nav>
    <ul class="d-flex flex-row justify-content-center align-items-center">
      <li class="selected"><nuxt-link to="/">Home</nuxt-link></li>
      <li><nuxt-link to="/project">Projects</nuxt-link></li>
      <li><a href="#">About</a></li>
      <li><a href="#">Contact</a></li>
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
@import '../assets/theme.scss';

nav {
  background-color: white;
  height: 50px;
  width: 100%;

  ul {
    margin: 0;
    padding: 0;
    text-align: center;
    height: 100%;
    li {
      list-style-type: none;
      font-size: 20px;

      a {
        color: $dark;

        &:hover {
          text-decoration: none;
        }
      }
    }
  }
}

/* li hover effect */
ul li {
  margin: 0 10px;

  a {
    position: relative;
  }

  a::before,
  a::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    width: 2px;
    background-color: $secondary;
    transform: scaleY(0);
    transition: transform 0.5s ease;
  }

  a::before {
    left: -10px;
    transform-origin: center top;
  }

  a:hover::before {
    transform-origin: center bottom;
    transform: scaleY(1);
  }

  a::after {
    right: -10px;
    transform-origin: center bottom;
  }

  a:hover::after {
    transform-origin: center top;
    transform: scaleY(1);
  }
}
</style>
