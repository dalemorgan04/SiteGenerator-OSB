<template>
  <div>
    <section
      class="jumbotron-container d-flex flex-row justify-content-between"
    >
      <div class="container-left d-flex flex-column justify-content-center p-5">
        <h1 class="jumbotron-heading accent">
          Inspiring Architecural Design Solutions for your home
        </h1>
        <p>
          OSB-Architects work to create inspiring spaces through functional and
          uplifting design with the overall aim of making that perfect "happy
          home" for you to enjoy
        </p>
      </div>
      <div class="container-right d-flex justify-content-center flex-column">
        <div class="container-image">
          <img src="../assets/images/lounge.jpg" />
        </div>
      </div>
    </section>

    <section class="summary-container d-flex flex-row">
      <div class="container-left d-flex justify-content-between flex-column">
        <div class="summary-heading">
          <h1>helping you create your HAPPY HOME</h1>
        </div>

        <div class="summary-content">
          OSB-Architects offer residential design services throughout the East
          Midlands region, including minor property alterations, residential
          remodelling projects, house extensions, loft and garage conversions,
          and new build homes. We specialise in thoughtful architectural design
          projects personalised to your requirements and focussed on improving
          your wellbeing. OSB-Architects can guide and advice you through any
          property design alteration work, including feasibility ideas, planning
          applications and building regulations applications. Please browse our
          website for further information or get in touch via our contact page.
        </div>
      </div>
      <div class="container-right">
        <div class="container-image">
          <img src="../assets/images/house.jpg" />
        </div>
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
@import '../assets/theme.scss';
.jumbotron-container {
  padding-top: 100px;
  height: 100vh;

  jumbotron-heading {
    font-size: 50px;
    color: $dark;
  }

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

.summary-container {
  margin: 100px 0;
  text-align: center;

  .container-left,
  .container-right {
    flex: 1 1 100%;
  }

  .container-left {
    padding: 0 100px;

    .summary-content {
      flex: 0 0 auto;
      max-width: 400px;
      text-align: justify;
      margin: 0 auto;
      vertical-align: central;
    }
  }

  .container-image {
    img {
      width: 100%;
      height: auto;
    }
  }
}
</style>
