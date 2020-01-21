<template>
  <div>
    <!-- Desktop Navbar -->
    <div class="desktop d-flex">
      <div class="brand">
        <h1>OSB Architects</h1>
      </div>


      <nav>
        <ul class="d-flex flex-row justify-content-center align-items-center">
          <li><a href="#">About</a></li>
          <li><a href="#">Gallery</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
    </div>

  </div>
</template>

<script>
</script>

<style lang="scss" scoped>
@import '../assets/theme.scss';

.desktop {
    background-color: transparent;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: 2;

    .brand{
        flex: 1 1 40%
    }

    nav {
        flex: 1 1 60%;

        ul {
            height: 100%;

            li {
                list-style-type: none;
                font-size: 2rem;
                margin: 0 20px;
                
                a {
                    color: $dark;

                    &:hover {
                        text-decoration: none;
                    }
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

    a::before, a::after {
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
