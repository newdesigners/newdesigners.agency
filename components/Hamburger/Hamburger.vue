<template>
  <div
    id="burger-wrapper"
    class="w-3.5 h-3.5 flex justify-center items-center bg-primary rounded-full"
  >
    <tasty-burger-button
      :type="type"
      :size="size"
      :color="color"
      :active-color="activeColor"
      :active="isActive"
      v-on:toggle="onToggle"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      type: "emphatic",
      isActive: false,
      size: "s",
      color: "#f2f2f2",
      activeColor: "#f2f2f2"
    };
  },
  methods: {
    onToggle(active) {
      this.$parent.$refs.header.classList.toggle('open');
    }
  },
  mounted(active) {
    // document.addEventListener('scroll', () => {
    //   console.log('ree');
    //   this.$parent.$refs.header.classList.remove('open');
    // });
  }
};
</script>
