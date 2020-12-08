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
        <a
          href="https://forms.office.com/Pages/ResponsePage.aspx?id=m2tYomf4PEuTY1tDXF28RbTkDX42-gROkMzHS38XZmJUQ1pQME5GRFlQNUpNNkgzQzdWWVNJRkREQS4u"
          target="_blank"
          rel="noopener nofollow"
          class="nav-link btn"
          >Post a design project</a
        >
      </li>
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
