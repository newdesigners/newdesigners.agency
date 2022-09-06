<template>
  <main>

    <!-- Hero -->
    <section id="hero">
      <div class="container">
        <h1 class="mb-2">Our work</h1>
        <p class="md:text-2xl mx-auto">A quick selection of projects</p>
      </div>
    </section>

    <!-- Work -->
    <section id="work">
      <div class="container">

        <div class="flex">

          <div class="p-1">
            <img src="~/assets/images/work/joint-cyber-range.jpg"  class="block pt-2 pb-2">
            <h3>JointCyberRange - <a href="https://jointcyberrange.nl">Visit website</a></h3>
            <p>Giving Cyber Security education a fresh look</p>
            <p class="pt-1">
              <strong class="pr-2">Research</strong>
              <strong class="pr-2">UX/UI Design</strong>
              <strong>Development</strong>
            </p>
          </div>

          <div class="p-1">
            <img src="~/assets/images/work/hsif.jpg"  class="block pt-2 pb-2">
            <h3>The Hague Student Investment Fund</h3>
            <p>Full rebranding package for this initiative</p>
            <p class="pt-1">
              <strong class="pr-2">Branding</strong>
              <strong class="pr-2">Visual Design</strong>
              <strong>Brand Book</strong>
            </p>
          </div>
        </div>

      </div>
    </section>
  </main>
</template>

<script>
export default {
  head() {
    return {
      script: [
        { src: "https://identity.netlify.com/v1/netlify-identity-widget.js" }
      ]
    };
  }
};
</script>
