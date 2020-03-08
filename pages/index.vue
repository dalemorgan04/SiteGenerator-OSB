<template>
  <div>
    <section class="jumbotron-container">
      <div class="container-image">
        <img src="../assets/images/lounge.jpg" />
      </div>
      <div class="container-text">
        <div class="inner-container-text">
          <h1 class="jumbotron-heading accent">
            Inspiring Architectural Design Solutions for your home
          </h1>
          <p>
            OSB-Architects work to create inspiring spaces through functional
            and uplifting design with the overall aim of making that perfect
            "happy home" for you to enjoy
          </p>
        </div>
      </div>
    </section>

    <section class="summary-container">
      <div class="summary-content">
        OSB-Architects offer residential design services throughout the East
        Midlands region, including minor property alterations, residential
        remodelling projects, house extensions, loft and garage conversions, and
        new build homes. We specialise in thoughtful architectural design
        projects personalised to your requirements and focussed on improving
        your wellbeing. OSB-Architects can guide and advice you through any
        property design alteration work, including feasibility ideas, planning
        applications and building regulations applications. Please browse our
        website for further information or get in touch via our contact page.
      </div>

      <div class="summary-tag accent">
        <h1><span>15</span> years experience</h1>
      </div>
    </section>

    <section>
      <projects></projects>
    </section>
  </div>
</template>

<script>
import Projects from '../components/projects.vue'

export default {
  components: {
    projects: Projects
  },
  data() {
    return {
      projects: [{ image: '', imageAlt: '', text: 'this is a test' }]
    }
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
@import '../assets/theme.scss';

h1 {
  color: $dark;
  font-size: 30px;
}

.jumbotron-container {
  padding-top: 125px;
  height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;

  .container-image {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    img {
      height: auto;
      width: 100%;
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
      margin-bottom: 20px;
    }
  }
  .container-text {
    padding: 10px;
    flex: 0 1 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;

    .inner-container-text {
      padding-bottom: 20px;
      .jumbotron-heading {
        padding: 0 30px 0 10px;
        text-align: left;
      }
      p {
        padding: 0 40px;
        text-align: center;
      }
    }
  }
}

.summary-container {
  .summary-content {
    padding: 40px;
    text-align: center;
  }
  .summary-tag {
    padding-left: 10px;
    span {
      color: $secondary;
    }
  }
}

@media (min-width: $tablet) {
  .container-left {
    flex: 1 1 50%;
    z-index: 2;
  }

  .container-right {
    flex: 1 1 65%;
    z-index: 1;
    position: relative;

    .container-image {
      img {
        width: 100%;
        height: auto;
      }
    }
  }
}

@media (min-width: $desktop) {
}
</style>
