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

<style lang="postcss" scoped>
.card {
  clip-path: polygon(
    0 calc(0% + 10px),
    100% 0,
    calc(100% - 10px) 100%,
    calc(0% + 10px) calc(100% - 10px)
  );

  &:nth-of-type(2) {
    clip-path: polygon(
      calc(0% + 10px) 0,
      calc(100% - 10px) calc(0% + 10px),
      100% calc(100% - 10px),
      0% 100%
    );
  }

  &:nth-of-type(3) {
    clip-path: polygon(
      0 calc(0% + 10px),
      100% 0,
      calc(100% - 10px) 100%,
      calc(0% + 10px) calc(100% - 10px)
    );
  }

  &:hover {
    clip-path: polygon(0 0, 100% 0%, 100% 100%, 0% 100%);
  }
}
</style>
