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
        <nuxt-link to="/post-a-design-project" class="nav-link btn btn-sm">
          Post a design project
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
        { link: "/", text: "Home" },
        { link: "/projects", text: "Projects", disabled: true},
        { link: "/studentwork", text: "Studentwork", disabled: true },
        { link: "/become-a-member", text: "Become a member", disabled: true },
        { link: "/contact", text: "Contact", disabled: true }
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
