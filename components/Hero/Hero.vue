<template>
    <section id="hero">
      <div class="container">
        <h1 class="mb-2">{{ title }}</h1>
      </div>
    </section>
</template>

<script>
export default {
  props: {
    title: String,
  },
  data() {
  return {
  };
}
};
</script>
