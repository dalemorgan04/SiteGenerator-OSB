<template>
  <div class="card-project">
    <img :src="projectImage" :alt="project.imageAlt" class="card-img-top" />
    <div class="card-body">
      <h5 class="card-title">{{ project.title }}</h5>
      <p class="card-text">{{ project.text }}</p>
      <a href="#" class="btn btn-primary">View</a>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Project',
  props: {
    project: {
      type: Object,
      required: true
    }
  },
  computed: {
    projectImage() {
      if (!this.project.image) {
        return
      }
      const filename = this.project.image.toLowerCase()
      return require(`../assets/projects/${filename}.jpg`)
    }
  }
}
</script>
<style lang="scss" scoped>
@import '../assets/theme.scss';
.card-project {
  img {
    box-shadow: $shadow;
  }
  .card-body {
    position: relative;

    .card-title {
      font-family: $font-header;
      font-size: 30px;
      margin-right: 40px;
    }
    a {
      position: absolute;
      top: 20px;
      right: 0;
    }
  }
}
</style>
