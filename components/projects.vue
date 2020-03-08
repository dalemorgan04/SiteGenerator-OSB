<template v-for="project in projects">
  <div class="card" style="width: 18rem;">
    <img
      src="{{project.image}}"
      class="card-img-top"
      alt="{{project.imageAlt}}"
    />
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">
        {{ project.text }}
      </p>
      <a href="#" class="btn btn-primary">View</a>
    </div>
  </div>
</template>
<style></style>
