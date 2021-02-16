<template>
  <header ref="header" id="site-header" class="fixed top-0 inset-x-0 py-1 z-50 bg-primary">
    <div class="container flex flex-wrap">
      <!-- header logo -->
      <nuxt-link to="/">
        <div id="header-logo">
          <Logo class="w-4" />
        </div>
      </nuxt-link>

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
        class="w-full mt-1.5 lg:flex lg:items-center lg:justify-end lg:flex-1 lg:m-0"
      >
        <Navigation ulClasses="justify-end nav-menu--header" />
      </div>
    </div>
  </header>
</template>

<script>
export default {
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

#site-header {
  max-height: 88px;
  overflow: hidden;
  @apply transition-height duration-500 ease-in-out;

  &.open {
    max-height: 332px;
    @apply transition-height duration-500 ease-in-out;
  }
}
</style>
