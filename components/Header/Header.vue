<template>
  <header id="site-header" class="fixed top-0 inset-x-0 py-1 z-50">
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
        <Hamburger />
      </div>

      <!-- header menu -->
      <div
        id="header-menu"
        class="w-full lg:flex lg:items-center lg:justify-end lg:flex-1"
      >
        <Navigation ulClasses="justify-end" />
      </div>
    </div>
  </header>
</template>

<script>
export default {};
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
