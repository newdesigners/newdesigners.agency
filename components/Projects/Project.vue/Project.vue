<template>
  <div class="card">
    <div class="card-body">
      <h3 class="card-title">
        {{ heading }}
      </h3>
      <p class="card-text">
        {{ text }}
      </p>
    </div>
    <div class="card-footer flex justify-between">
      <span>{{ footer1 }}</span>
      <span>{{ footer2 }}</span>
      <span>{{ footer3 }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    heading: String,
    text: String,
    footer1: String,
    footer2: String,
    footer3: String
  }
};
</script>

<style lang="postcss" scoped>
.card {
  &:nth-of-type(odd) {
    clip-path: polygon(
      0 calc(0% + 10px),
      100% 0,
      calc(100% - 10px) 100%,
      calc(0% + 10px) calc(100% - 10px)
    );
  }

  &:nth-of-type(even) {
    clip-path: polygon(
      calc(0% + 10px) 0,
      calc(100% - 10px) calc(0% + 10px),
      100% calc(100% - 10px),
      0% 100%
    );
  }

  &:hover {
    clip-path: polygon(0 0, 100% 0%, 100% 100%, 0% 100%);
  }
}
</style>
