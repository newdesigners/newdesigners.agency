<template>
  <header
    id="site-header"
    class="fixed top-0 inset-x-0 py-1"
    v-class="{ active: isActive }"
  >
    <div class="container flex flex-wrap">
      <!-- header logo -->
      <div id="header-logo">
        <Logo style="width: 75px" />
      </div>

      <!-- menu toggler -->
      <div
        id="menu-toggler"
        class="flex-1 flex justify-end items-center lg:hidden"
      >
        <Hamburger @toggle="modalToggle" />
      </div>

      <!-- header menu -->
      <div id="header-menu" class="w-full lg:flex-1">
        <Navigation />
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      isActive: false
    };
  },
  methods: {
    onToggle(active) {
      this.isActive = !this.isActive;
    }
  }
};
</script>

<style lang="postcss">
#header-menu {
  .site-nav {
    .nav-menu {
      @apply lg:flex;
    }
  }
}
</style>
