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
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      type: "3dx",
      size: "s",
      color: "#f2f2f2",
      activeColor: "#f2f2f2"
    };
  }
};
</script>
