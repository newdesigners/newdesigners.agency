<template>
  <div class="card">
    <div class="card-icon">
      <i v-bind:class="`fas fa-${icon}`"></i>
    </div>

    <div class="card-header">
      <h3>
        {{ heading }}
      </h3>
    </div>

    <div class="card-body">
      <p class="card-text">
        {{ text }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    icon: String,
    heading: String,
    text: String
  }
};
</script>
