<template>
  <nav class="site-nav">
    <ul class="nav-menu" :class="ulClasses">
      <li v-for="item in items" :key="item.text" class="nav-item">
        <NuxtLink
          :to="item.link"
          class="nav-link"
          :class="{ disabled: item.disabled }"
        >
          {{ item.text }}
          <span v-if="item.disabled" class="text-xs uppercase">coming soon!</span>
        </NuxtLink>
      </li>
      <li class="nav-item mt-0.75">
        <nuxt-link to="/get-started" class="nav-link btn btn-sm">
          Get started
          <span class="inline-flex items-center pl-0.5"><Fa icon="arrow-right"/></span>
        </nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  props: {
    ulClasses: String
  },
  data() {
    return {
      items: [
        { link: "/", text: "Introduction" },
        { link: "/work", text: "Our projects", disabled: false},
        { link: "/about", text: "About us", disabled: false}
      ]
    };
  }
};
</script>

<style lang="postcss">
.nav-link {
  &.disabled {
    span {
      font-size: 7px;
      top: -9px;
      @apply absolute left-0
    }
  }
}
</style>
