<template>
  <nav class="site-nav">
    <ul class="nav-menu">
      <li v-for="item in items" :key="item.text" class="nav-item">
        <NuxtLink
          :to="item.link"
          class="nav-link"
          :class="{ disabled: item.disabled }"
          >{{ item.text }}</NuxtLink
        >
      </li>
      <li class="nav-item">
        <NuxtLink to="/post-a-design-project" class="nav-link btn"
          >Post a design project</NuxtLink
        >
      </li>
      <button v-tooltip="'You have 5 new messages.'">huh</button>
    </ul>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { link: "/", text: "Home" },
        { link: "/projects", text: "Projects", disabled: true },
        { link: "/studentwork", text: "Studentwork", disabled: true },
        { link: "/become-a-member", text: "Become a member", disabled: true },
        { link: "/contact", text: "Contact", disabled: true }
      ]
    };
  }
};
</script>
