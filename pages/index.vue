<template>
  <div>
    <section class="jumbotron-container">
      <div class="container-image">
        <img src="../assets/images/lounge.jpg" />
      </div>
      <div class="container-text">
        <h1 class="jumbotron-heading accent">
          Inspiring Architectural Design Solutions for your home
        </h1>
        <p>
          OSB-Architects work to create inspiring spaces through functional and
          uplifting design with the overall aim of making that perfect "happy
          home" for you to enjoy
        </p>
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
  padding-top: 125px;
  height: 100vh;
  position: relative;

  jumbotron-heading {
    font-size: 50px;
    color: $dark;
  }

  .container-image img {
    width: 100%;
    height: auto;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
    margin-bottom: 20px;
  }
  .container-text {
    padding: 10px;
    h1 {
      font-size: 30px;
    }
  }
}

// .summary-container {
//   margin: 100px 0;
//   text-align: center;

//   .container-left,
//   .container-right {
//     flex: 1 1 100%;
//   }

//   .container-left {
//     padding: 0 100px;

//     .summary-content {
//       flex: 0 0 auto;
//       max-width: 400px;
//       text-align: justify;
//       margin: 0 auto;
//       vertical-align: central;
//     }
//   }

//   .container-image {
//     img {
//       width: 100%;
//       height: auto;
//     }
//   }
// }

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
