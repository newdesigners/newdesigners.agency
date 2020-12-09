<template>
  <div class="card">
    <img
      :src="require(`~/assets/images/services/${image}.svg`)"
      class="card-img"
    />

    <div class="card-body">
      <h3 class="card-title">
        {{ heading }}
      </h3>
      <p class="card-text">
        {{ text }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    image: String,
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
