<template>
  <main>
    <!-- Hero -->
    <section id="hero">
      <div class="container">
        <h1>Projects</h1>
      </div>
    </section>

    <section>
      <div class="container">
        <Projects />
      </div>
    </section>
  </main>
</template>

<script>
export default {
  head: {
    title: "Projects",
    meta: [
      {
        hid: "description",
        name: "description",
        content: "New Designers Agency projects"
      },
      { hid: "robots", name: "robots", content: "noindex" }
    ]
  }
};
</script>
